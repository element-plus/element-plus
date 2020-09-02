<template>
  <transition name="msgbox-fade">
    <div
      v-show="visible"
      class="el-message-box__wrapper"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'"
      @click.self="handleWrapperClick"
    >
      <div class="el-message-box" :class="[customClass, center && 'el-message-box--center']">
        <div v-if="title !== null" class="el-message-box__header">
          <div class="el-message-box__title">
            <div
              v-if="icon && center"
              :class="['el-message-box__status', icon]"
            >
            </div>
            <span>{{ title }}</span>
          </div>
          <button
            v-if="showClose"
            type="button"
            class="el-message-box__headerbtn"
            aria-label="Close"
            @click="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')"
            @keydown.enter="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')"
          >
            <i class="el-message-box__close el-icon-close"></i>
          </button>
        </div>
        <div class="el-message-box__content">
          <div
            v-if="icon && !center && message !== ''"
            :class="['el-message-box__status', icon]"
          >
          </div>
          <div v-if="message !== ''" class="el-message-box__message">
            <slot>
              <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
              <p v-else v-html="message"></p>
            </slot>
          </div>
          <div v-show="showInput" class="el-message-box__input">
            <el-input
              ref="input"
              v-model="inputValue"
              :type="inputType"
              :placeholder="inputPlaceholder"
              @keydown.enter="handleInputEnter"
            />
            <div class="el-message-box__errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="el-message-box__btns">
          <el-button
            v-if="showCancelButton"
            :loading="cancelButtonLoading"
            :class="[ cancelButtonClasses ]"
            :round="roundButton"
            size="small"
            @click="handleAction('cancel')"
            @keydown.enter="handleAction('cancel')"
          >
            {{ cancelButtonText || t('el.messagebox.cancel') }}
          </el-button>
          <el-button
            v-show="showConfirmButton"
            ref="confirm"
            :loading="confirmButtonLoading"
            :class="[ confirmButtonClasses ]"
            :round="roundButton"
            size="small"
            @click="handleAction('confirm')"
            @keydown.enter="handleAction('confirm')"
          >
            {{ confirmButtonText || t('el.messagebox.confirm') }}
          </el-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang='ts'>
import {
  defineComponent,
  nextTick,
  ref,
  onMounted,
  computed,
  watch,
  getCurrentInstance,
  reactive,
  toRefs,
} from 'vue'
import { addClass, removeClass } from '@element-plus/utils/dom'
import ElButton from '@element-plus/button/src/button.vue'
import { t } from '@element-plus/locale'
import Dialog  from '@element-plus/utils/aria-dialog'
import usePopup from '@element-plus/utils/popup/usePopup'
import fa from '../../locale/lang/fa'

let messageBox

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

export default defineComponent({
  name: 'ElMessageBox',
  components: {
    ElButton,
  },
  mixins: [usePopup],
  props: {
    modal: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    closeOnHashChange: {
      type: Boolean,
      default: true,
    },
    center: {
      default: false,
      type: Boolean,
    },
    roundButton: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    let vm
    const state = reactive<State>({
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      iconClass: '',
      customClass: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: false,
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null,
      dangerouslyUseHTMLString: false,
      focusAfterClosed: null,
      isOnComposition: false,
      distinguishCancelAndClose: false,
      t,
      visible: false,
    })
    const icon = computed(() => state.iconClass || (state.type && TypeMap[state.type] ? `el-icon-${ TypeMap[state.type] }` : ''))

    const confirmButtonClasses = computed(() => `el-button--primary ${ state.confirmButtonClass }`)

    const cancelButtonClasses = computed(() => `${ state.cancelButtonClass }`)

    watch(state.visible, val => {
      if (val) {
        state.uid++
        if (state.type$ === 'alert' || state.type$ === 'confirm') {
          nextTick().then(() => { vm.refs.confirm.$el.focus() })
        }
        state.focusAfterClosed = document.activeElement
        messageBox = new Dialog(vm.vnode.el, state.focusAfterClosed, getFirstFocus())
      }
      //
      if (state.type$ !== 'prompt') return
      if (val) {
        setTimeout(() => {
          if (vm.refs.input && vm.refs.input.$el) {
            this.getInputElement().focus()
          }}, 500)
      } else {
        state.editorErrorMessage = ''
        removeClass(this.getInputElement(), 'invalid')
      }
    })

    onMounted(async () => {
      vm = getCurrentInstance()
      await nextTick()
      if (props.closeOnHashChange) {
        // window.addEventListener('hashchange', this.close)
      }
    })

    const getSafeClose = () => {
      const currentId = state.uid
      return () => {
        nextTick().then(() => {
          if (currentId === state.uid) doClose()
        })
      }
    }

    const doClose = () => {
      if (!state.visible) return
      state.visible = false
      this._closing = true

      this.onClose && this.onClose()
      messageBox.closeDialog() // 解绑
      if (props.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200)
      }
      this.opened = false
      this.doAfterClose()
      setTimeout(() => {
        if (state.action) callback.value(state.action, vm)
      })
    }

    const getFirstFocus = () => {
      const btn = vm.vnode.el.querySelector('.el-message-box__btns .el-button')
      const title = vm.vnode.el.querySelector('.el-message-box__btns .el-message-box__title')
      return btn || title
    }


    return {
      ...toRefs(state),
      icon,
      confirmButtonClasses,
      cancelButtonClasses,
    }
  },
  beforeUnmount() {
    if (this.closeOnHashChange) {
      window.removeEventListener('hashchange', this.close)
    }
    setTimeout(() => {
      messageBox.closeDialog()
    })
  },
  methods: {
    handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction(this.distinguishCancelAndClose ? 'close' : 'cancel')
      }
    },

    handleInputEnter() {
      if (this.inputType !== 'textarea') {
        return this.handleAction('confirm')
      }
    },

    handleAction(action) {
      if (this.type$ === 'prompt' && action === 'confirm' && !this.validate()) {
        return
      }
      this.action = action
      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose()
        this.beforeClose(action, this, this.close)
      } else {
        this.doClose()
      }
    },
    validate() {
      if (this.type$ === 'prompt') {
        const inputPattern = this.inputPattern
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error')
          addClass(this.getInputElement(), 'invalid')
          return false
        }
        const inputValidator = this.inputValidator
        if (typeof inputValidator === 'function') {
          const validateResult = inputValidator(this.inputValue)
          if (validateResult === false) {
            this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error')
            addClass(this.getInputElement(), 'invalid')
            return false
          }
          if (typeof validateResult === 'string') {
            this.editorErrorMessage = validateResult
            addClass(this.getInputElement(), 'invalid')
            return false
          }
        }
      }
      this.editorErrorMessage = ''
      removeClass(this.getInputElement(), 'invalid')
      return true
    },

    getFirstFocus() {
      const btn = this.$el.querySelector('.el-message-box__btns .el-button')
      const title = this.$el.querySelector('.el-message-box__btns .el-message-box__title')
      return btn || title
    },

    getInputElement() {
      const inputRefs = this.$refs.input.$refs
      return inputRefs.input || inputRefs.textarea
    },

    handleClose() {
      this.handleAction('close')
    },
  },
})
</script>
<style scoped>
</style>

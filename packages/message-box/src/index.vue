<template>
  <transition name="msgbox-fade">
    <div
      v-show="visible"
      ref="root"
      :aria-label="title || 'dialog'"
      class="el-message-box__wrapper"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      @click.self="handleWrapperClick"
    >
      <div class="el-message-box" :class="[customClass, center && 'el-message-box--center']">
        <div v-if="title !== null && title !== undefined" class="el-message-box__header">
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
          <div class="el-message-box__container">
            <div
              v-if="icon && !center && hasMessage"
              :class="['el-message-box__status', icon]"
            >
            </div>
            <div v-if="hasMessage" class="el-message-box__message">
              <slot>
                <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
                <p v-else v-html="message"></p>
              </slot>
            </div>
          </div>
          <div v-show="showInput" class="el-message-box__input">
            <el-input
              ref="input"
              v-model="inputValue"
              :type="inputType"
              :placeholder="inputPlaceholder"
              :class="{ invalid: validateError }"
              @keydown.enter="handleInputEnter"
            />
            <div class="el-message-box__errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="el-message-box__btns">
          <el-button
            v-if="showCancelButton"
            :loading="cancelButtonLoading"
            :class="[ cancelButtonClass ]"
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
            :disabled="confirmButtonDisabled"
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
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  onBeforeMount,
  getCurrentInstance,
  reactive,
  toRefs,
} from 'vue'
import ElButton from '@element-plus/button'
import ElInput from '@element-plus/input'
import { t } from '@element-plus/locale'
import Dialog  from '@element-plus/utils/aria-dialog'
import usePopup from '@element-plus/utils/popup/usePopup'
import { on, off } from '@element-plus/utils/dom'

let dialog

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
    ElInput,
  },
  props: {
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    zIndex: Number,
    modalFade: {
      type: Boolean,
      default: true,
    },
    modalClass: {
      type: String,
      default: '',
    },
    modalAppendToBody: {
      type: Boolean,
      default: false,
    },
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
  } ,
  setup(props) {
    let vm
    const popup = usePopup(props, doClose)
    const state = reactive({
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
      type$: '',
      visible: false,
      validateError: false,
    })
    const icon = computed(() => state.iconClass || (state.type && TypeMap[state.type] ? `el-icon-${ TypeMap[state.type] }` : ''))
    const hasMessage = computed(() => !!state.message)

    const confirmButtonClasses = computed(() => `el-button--primary ${ state.confirmButtonClass }`)

    watch(() => state.inputValue, async val => {
      await nextTick()
      if (state.type$ === 'prompt' && val !== null) {
        validate()
      }
    }, { immediate: true })

    watch(() => state.visible, val => {
      popup.state.visible = val
      if (val) {
        state.uid++
        if (state.type$ === 'alert' || state.type$ === 'confirm') {
          nextTick().then(() => { vm.refs.confirm.$el.focus() })
        }
        state.focusAfterClosed = document.activeElement
        dialog = new Dialog(vm.vnode.el, state.focusAfterClosed, getFirstFocus())
      }
      if (state.type$ !== 'prompt') return
      if (val) {
        nextTick().then(() => {
          if (vm.refs.input && vm.refs.input.$el) {
            getInputElement().focus()
          }
        })
      } else {
        state.editorErrorMessage = ''
        state.validateError = false
      }
    })

    onBeforeMount(() => {
      vm = getCurrentInstance()
      vm.setupInstall = {
        state,
        doClose,
      }
    })

    onMounted(async () => {
      await nextTick()
      if (props.closeOnHashChange) {
        on(window, 'hashchange', popup.close)
      }
    })

    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        off(window, 'hashchange', popup.close)
      }
      setTimeout(() => {
        dialog.closeDialog()
      })
    })

    function getSafeClose () {
      const currentId = state.uid
      return async () => {

        await nextTick()
        if (currentId === state.uid) doClose()
      }
    }

    function doClose() {
      if (!state.visible) return
      state.visible = false
      popup.updateClosingFlag(true)
      dialog.closeDialog()
      if (props.lockScroll) {
        setTimeout(popup.restoreBodyStyle, 200)
      }
      popup.state.opened = false
      popup.doAfterClose()
      setTimeout(() => {
        if (state.action) state.callback(state.action, state)
      })
    }

    const getFirstFocus = () => {
      const btn = vm.vnode.el.querySelector('.el-message-box__btns .el-button')
      const title = vm.vnode.el.querySelector('.el-message-box__btns .el-message-box__title')
      return btn || title
    }

    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? 'close' : 'cancel')
      }
    }

    const handleInputEnter = () => {
      if (state.inputType !== 'textarea') {
        return handleAction('confirm')
      }
    }

    const handleAction = action => {
      if (state.type$ === 'prompt' && action === 'confirm' && !validate()) {
        return
      }
      state.action = action
      if (typeof vm.setupInstall.state.beforeClose === 'function') {
        vm.setupInstall.state.close = getSafeClose()
        vm.setupInstall.state.beforeClose(action, state, popup.close)
      } else {
        doClose()
      }
    }

    const validate = () => {
      if (state.type$ === 'prompt') {
        const inputPattern = state.inputPattern
        if (inputPattern && !inputPattern.test(state.inputValue || '')) {
          state.editorErrorMessage = state.inputErrorMessage || t('el.messagebox.error')
          state.validateError = true
          return false
        }
        const inputValidator = state.inputValidator
        if (typeof inputValidator === 'function') {
          const validateResult = inputValidator(state.inputValue)
          if (validateResult === false) {
            state.editorErrorMessage = state.inputErrorMessage || t('el.messagebox.error')
            state.validateError = true
            return false
          }
          if (typeof validateResult === 'string') {
            state.editorErrorMessage = validateResult
            state.validateError = true
            return false
          }
        }
      }
      state.editorErrorMessage = ''
      state.validateError = false
      return true
    }

    const getInputElement = () => {
      const inputRefs = vm.refs.input.$refs
      return inputRefs.input || inputRefs.textarea
    }

    const handleClose = () => {
      handleAction('close')
    }

    return {
      ...toRefs(state),
      hasMessage,
      icon,
      confirmButtonClasses,
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      handleClose,
      t,
      doClose,
    }
  },
})
</script>

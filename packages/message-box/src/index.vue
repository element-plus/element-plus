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
import { defineComponent, render, nextTick } from 'vue'
import ElButton from '@element-plus/button/src/button.vue'
import { t } from '@element-plus/locale'
import Dialog  from '@element-plus/utils/aria-dialog'

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
  data() {
    return {
      uid: 1,
      title: undefined,
      visible: false,
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
    }
  },
  computed: {
    icon() {
      const { type, iconClass } = this
      return iconClass || (type && TypeMap[type] ? `el-icon-${ TypeMap[type] }` : '')
    },
    confirmButtonClasses() {
      return `el-button--primary ${ this.confirmButtonClass }`
    },
    cancelButtonClasses() {
      return `${ this.cancelButtonClass }`
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.uid++
        this.focusAfterClosed = document.activeElement
        messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFirstFocus())
      }

      // if (this.$type !== 'prompt') return
      // if (val) {
      //   setTimeout(() => {
      //     if (this.$refs.input && this.$refs.input.$el) {
      //       this.getInputElement().focus()
      //     }
      //   }, 500)
      // } else {
      //   this.editorErrorMessage = ''
      //   removeClass(this.getInputElement(), 'invalid')
      // }
    },
  },
  mounted() {
    nextTick(() => {
      if (this.closeOnHashChange) {
        window.addEventListener('hashchange', this.close)
      }
    })
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
    getSafeClose() {
      const currentId = this.uid
      return () => {
        nextTick(() => {
          if (currentId === this.uid) this.doClose()
        })
      }
    },
    handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction(this.distinguishCancelAndClose ? 'close' : 'cancel')
      }
    },
    handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
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
    handleInputEnter() {
      //
    },
    validate() {
      return true
    },
    doClose() {
      if (!this.visible) return
      this.visible = false
      // this.onClose && this.onClose()
      messageBox.closeDialog() // 解绑
      if (this.lockScroll) {
        // setTimeout(this.restoreBodyStyle, 200)
      }
      setTimeout(() => {
        if (this.action) this.callback(this.action, this)
      }, 0)
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
  },
})
</script>
<style scoped>
</style>

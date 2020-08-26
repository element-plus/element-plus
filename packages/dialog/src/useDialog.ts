import { computed, ref, watch, nextTick, onMounted } from 'vue'

import isServer from '@element-plus/utils/isServer'
import { on, off } from '@element-plus/utils/dom'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import PopupManager from '@element-plus/utils/popup-manager'
import { clearTimer } from '@element-plus/utils/util'
import { useLockScreen } from '@element-plus/hooks'

import type { UseDialogProps } from './dialog'
import type { SetupContext } from '@vue/runtime-core'

export const CLOSE_EVENT = 'close'
export const OPEN_EVENT = 'open'
export const CLOSED_EVENT = 'closed'
export const OPENED_EVENT = 'opened'
export { UPDATE_MODEL_EVENT }

export default function(props: UseDialogProps, ctx: SetupContext) {
  const visible = ref(false)
  const closed = ref(false)
  const key = ref(0)
  const dialogRef = ref(null)
  const openTimer = ref<NodeJS.Timeout>(null)
  const closeTimer = ref<NodeJS.Timeout>(null)
  const zIndex = ref(props.zIndex || PopupManager.nextZIndex())
  const modalRef = ref<HTMLElement>(null)

  const style = computed(() => {
    const style = {} as CSSStyleDeclaration
    if (!props.fullscreen) {
      style.marginTop = props.top
      if (props.width) {
        style.width = props.width
      }
    }
    style.zIndex = String(zIndex.value + 1)
    return style
  })

  function afterEnter() {
    ctx.emit(OPENED_EVENT)
  }

  function afterLeave() {
    ctx.emit(CLOSED_EVENT)
    ctx.emit(UPDATE_MODEL_EVENT, false)
  }

  function open() {
    clearTimer(closeTimer)
    clearTimer(openTimer)
    if (props.openDelay && props.openDelay > 0) {
      openTimer.value = setTimeout(() => {
        openTimer.value = null
        doOpen()
      }, props.openDelay)
    } else {
      doOpen()
    }
  }

  function close() {
    // if (this.willClose && !this.willClose()) return;
    clearTimer(openTimer)
    clearTimer(closeTimer)

    if (props.closeDelay && props.closeDelay > 0) {
      closeTimer.value = setTimeout(() => {
        closeTimer.value = null
        doClose()
      }, props.closeDelay)
    } else {
      doClose()
    }
  }

  function hide(shouldCancel: boolean) {
    if (shouldCancel) return
    closed.value = true
    visible.value = false
  }

  function handleClose() {
    if (props.beforeClose) {
      props.beforeClose(hide)
    } else {
      hide(false)
    }
  }

  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose()
    }
  }

  function doOpen() {
    if (isServer) {
      return
    }

    // if (props.willOpen?.()) {
    //  return
    // }
    visible.value = true
  }

  function doClose() {
    visible.value = false
  }

  watch(() => props.modelValue, val => {
    if (val) {
      closed.value = false
      open()
      ctx.emit(OPEN_EVENT)
      // this.$el.addEventListener('scroll', this.updatePopper)
      nextTick(() => {
        dialogRef.value.scrollTop = 0
      })
    } else {
      // this.$el.removeEventListener('scroll', this.updatePopper
      close()
      if (!closed.value) {
        ctx.emit(CLOSE_EVENT)
      }
    }
  })

  if (props.lockScroll) {
    useLockScreen(visible)
  }

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    handleClose,
    onModalClick,
    closed,
    dialogRef,
    style,
    key,
    modalRef,
    visible,
    zIndex,
  }
}

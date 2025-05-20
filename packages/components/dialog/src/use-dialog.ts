import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useTimeoutFn } from '@vueuse/core'

import { isUndefined } from 'lodash-unified'
import {
  defaultNamespace,
  useId,
  useLockscreen,
  useZIndex,
} from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { addUnit, isClient } from '@element-plus/utils'
import { useGlobalConfig } from '@element-plus/components/config-provider'

import type { CSSProperties, Ref, SetupContext } from 'vue'
import type { DialogEmits, DialogProps } from './dialog'

export const useDialog = (
  props: DialogProps,
  targetRef: Ref<HTMLElement | undefined>
) => {
  const instance = getCurrentInstance()!
  const emit = instance.emit as SetupContext<DialogEmits>['emit']
  const { nextZIndex } = useZIndex()

  let lastPosition = ''
  const titleId = useId()
  const bodyId = useId()
  const visible = ref(false)
  const closed = ref(false)
  const rendered = ref(false) // when desctroyOnClose is true, we initialize it as false vise versa
  const zIndex = ref(props.zIndex ?? nextZIndex())

  let openTimer: (() => void) | undefined = undefined
  let closeTimer: (() => void) | undefined = undefined

  const namespace = useGlobalConfig('namespace', defaultNamespace)

  const style = computed<CSSProperties>(() => {
    const style: CSSProperties = {}
    const varPrefix = `--${namespace.value}-dialog` as const
    if (!props.fullscreen) {
      if (props.top) {
        style[`${varPrefix}-margin-top`] = props.top
      }
      if (props.width) {
        style[`${varPrefix}-width`] = addUnit(props.width)
      }
    }
    return style
  })

  const overlayDialogStyle = computed<CSSProperties>(() => {
    if (props.alignCenter) {
      return { display: 'flex' }
    }
    return {}
  })

  function afterEnter() {
    emit('opened')
  }

  function afterLeave() {
    emit('closed')
    emit(UPDATE_MODEL_EVENT, false)
    if (props.destroyOnClose) {
      rendered.value = false
    }
  }

  function beforeLeave() {
    emit('close')
  }

  function open() {
    closeTimer?.()
    openTimer?.()

    if (props.openDelay && props.openDelay > 0) {
      ;({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay))
    } else {
      doOpen()
    }
  }

  function close() {
    openTimer?.()
    closeTimer?.()

    if (props.closeDelay && props.closeDelay > 0) {
      ;({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay))
    } else {
      doClose()
    }
  }

  function handleClose() {
    function hide(shouldCancel?: boolean) {
      if (shouldCancel) return
      closed.value = true
      visible.value = false
    }

    if (props.beforeClose) {
      props.beforeClose(hide)
    } else {
      close()
    }
  }

  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose()
    }
  }

  function doOpen() {
    if (!isClient) return
    visible.value = true
  }

  function doClose() {
    visible.value = false
  }

  function onOpenAutoFocus() {
    emit('openAutoFocus')
  }

  function onCloseAutoFocus() {
    emit('closeAutoFocus')
  }

  function onFocusoutPrevented(event: CustomEvent) {
    if (event.detail?.focusReason === 'pointer') {
      event.preventDefault()
    }
  }

  if (props.lockScroll) {
    useLockscreen(visible)
  }

  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose()
    }
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false
        open()
        rendered.value = true // enables lazy rendering
        zIndex.value = isUndefined(props.zIndex) ? nextZIndex() : zIndex.value++
        // this.$el.addEventListener('scroll', this.updatePopper)
        nextTick(() => {
          emit('open')
          if (targetRef.value) {
            targetRef.value.parentElement!.scrollTop = 0
            targetRef.value.parentElement!.scrollLeft = 0
            targetRef.value.scrollTop = 0
          }
        })
      } else {
        // this.$el.removeEventListener('scroll', this.updatePopper
        if (visible.value) {
          close()
        }
      }
    }
  )

  watch(
    () => props.fullscreen,
    (val) => {
      if (!targetRef.value) return
      if (val) {
        lastPosition = targetRef.value.style.transform
        targetRef.value.style.transform = ''
      } else {
        targetRef.value.style.transform = lastPosition
      }
    }
  )

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      rendered.value = true // enables lazy rendering
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex,
  }
}

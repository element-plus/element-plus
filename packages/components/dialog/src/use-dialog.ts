import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import {
  defaultNamespace,
  useId,
  useLockscreen,
  useZIndex,
} from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import {
  addUnit,
  debugWarn,
  isArray,
  isClient,
  isFunction,
  isObject,
} from '@element-plus/utils'
import { useGlobalConfig } from '@element-plus/components/config-provider'
import { DEFAULT_DIALOG_TRANSITION } from './constants'

import type { CSSProperties, Ref, SetupContext, TransitionProps } from 'vue'
import type { Arrayable } from '@element-plus/utils'
import type { DialogEmits, DialogProps } from './dialog'

const COMPONENT_NAME = 'ElDialog'

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
  const rendered = ref(false) // when destroyOnClose is true, we initialize it as false vise versa
  const zIndex = ref(props.zIndex ?? nextZIndex())

  let openTimer: (() => void) | undefined = undefined
  let closeTimer: (() => void) | undefined = undefined

  const config = useGlobalConfig()

  const namespace = computed(() => config.value?.namespace ?? defaultNamespace)
  const globalConfig = computed(() => config.value?.dialog)

  const style = computed<CSSProperties>(() => {
    const style: CSSProperties = {}
    const varPrefix = `--${namespace.value}-dialog` as const
    if (!props.fullscreen) {
      if (props.top) {
        style[`${varPrefix}-margin-top`] = props.top
      }
      const width = addUnit(props.width)
      if (width) {
        style[`${varPrefix}-width`] = width
      }
    }
    return style
  })

  const _draggable = computed(
    () =>
      (props.draggable ?? globalConfig.value?.draggable ?? false) &&
      !props.fullscreen
  )

  const _alignCenter = computed(
    () => props.alignCenter ?? globalConfig.value?.alignCenter ?? false
  )

  const _overflow = computed(
    () => props.overflow ?? globalConfig.value?.overflow ?? false
  )

  const overlayDialogStyle = computed<CSSProperties>(() => {
    if (_alignCenter.value) {
      return { display: 'flex' }
    }
    return {}
  })

  const transitionConfig = computed(() => {
    const transition =
      props.transition ??
      globalConfig.value?.transition ??
      DEFAULT_DIALOG_TRANSITION
    const baseConfig = {
      name: transition,
      onAfterEnter: afterEnter,
      onBeforeLeave: beforeLeave,
      onAfterLeave: afterLeave,
    }
    if (isObject(transition)) {
      const config = { ...transition } as TransitionProps
      const _mergeHook = (
        userHook: Arrayable<(el: Element) => void> | undefined,
        defaultHook: () => void
      ) => {
        return (el: Element) => {
          if (isArray(userHook)) {
            userHook.forEach((fn) => {
              if (isFunction(fn)) fn(el)
            })
          } else if (isFunction(userHook)) {
            userHook(el)
          }
          defaultHook()
        }
      }
      config.onAfterEnter = _mergeHook(config.onAfterEnter, afterEnter)
      config.onBeforeLeave = _mergeHook(config.onBeforeLeave, beforeLeave)
      config.onAfterLeave = _mergeHook(config.onAfterLeave, afterLeave)
      if (!config.name) {
        config.name = DEFAULT_DIALOG_TRANSITION
        debugWarn(
          COMPONENT_NAME,
          `transition.name is missing when using object syntax, fallback to '${DEFAULT_DIALOG_TRANSITION}'`
        )
      }
      return config
    }

    return baseConfig
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
    () => props.zIndex,
    () => {
      zIndex.value = props.zIndex ?? nextZIndex()
    }
  )

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false
        open()
        rendered.value = true // enables lazy rendering
        zIndex.value = props.zIndex ?? nextZIndex()
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
    transitionConfig,
    _draggable,
    _alignCenter,
    _overflow,
  }
}

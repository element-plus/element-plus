import {
  computed,
  ref,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  watch,
} from 'vue'
import { createPopper } from '@popperjs/core'

import { generateId, clearTimer, isBool, isHTMLElement } from '@element-plus/utils/util'

import useModifier from './useModifier'

import type { IPopperOptions, RefElement, PopperInstance } from './popper'
import type { ComponentPublicInstance, SetupContext } from 'vue'

export const DEFAULT_TRIGGER = ['hover']
export const UPDATE_VISIBLE_EVENT = 'update:visible'

export default (props: IPopperOptions, { emit }: SetupContext) => {
  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref<ComponentPublicInstance | HTMLElement>(null)
  const triggerId = ref<number>(-1)
  const exceptionState = ref(false)
  const popperInstance = ref<Nullable<PopperInstance>>(null)
  const popperId = ref(`el-popper-${generateId()}`)
  const popperRef = ref<RefElement>(null)
  const timeout = ref<TimeoutHandle>(null)
  const timeoutPending = ref<TimeoutHandle>(null)
  const excludes = computed(() => {
    return triggerRef.value
  })

  const triggerFocused = ref(false)

  const popperOptions = computed(() => {
    return {
      modifierOptions: {
        arrowOffset: props.arrowOffset,
        arrowRef: arrowRef.value,
        boundariesPadding: props.boundariesPadding,
        cutoff: props.cutoff,
        offset: props.offset,
        showArrow: props.showArrow,
        fallbackOptions: props.flip ? {} : { fallbackPlacements: [] },
      },
      placement: props.placement,
      strategy: props.strategy,
    }
  })


  const _visible = ref(false)
  // visible has been taken by props.visible, avoiding name collision
  const visibility = computed(() => {
    if (props.disabled) {
      return false
    } else {
      return isBool(props.visible) ? props.visible : _visible.value
    }
  })

  function _show() {
    if (props.hideAfter > 0) {
      timeoutPending.value = window.setTimeout(() => {
        _hide()
      }, props.hideAfter)
    }
    isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT, true) : _visible.value = true
  }

  function _hide() {
    isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT, false) : _visible.value = false
  }

  function clearTimers() {
    clearTimer(timeout)
    clearTimer(timeoutPending)
  }

  const showPopper = () => {
    if (!exceptionState.value || props.manualMode || props.disabled) return
    clearTimers()
    if (props.showAfter === 0) {
      _show()
    } else {
      timeout.value = window.setTimeout(() => {
        _show()
      }, props.showAfter)
    }
  }

  const closePopper = () => {
    if ((props.enterable && exceptionState.value) || props.manualMode) return
    clearTimers()
    if (props.closeDelay > 0) {
      timeoutPending.value = window.setTimeout(() => {
        close()
      }, props.closeDelay)
    } else {
      close()
    }
  }
  const close = () => {
    _hide()
    if (props.disabled) {
      doDestroy(true)
    }
  }

  function onShow() {
    setExceptionState(true)
    showPopper()
  }

  function onHide() {
    setExceptionState(false)
    closePopper()
  }

  function onPopperMouseEnter() {
    clearTimer(timeoutPending)
  }

  function onPopperMouseLeave() {
    if (props.trigger.length === 1 && props.trigger[0] === 'click') return
    onHide()
  }

  function setExceptionState(state: boolean) {
    if (!state) {
      clearTimer(timeoutPending)
    }
    exceptionState.value = state
  }

  function initializePopper() {
    const _trigger = isHTMLElement(triggerRef.value)
      ? triggerRef.value
      : (triggerRef.value as ComponentPublicInstance).$el
    popperInstance.value = createPopper(_trigger, popperRef.value,
      props.popperOptions !== null
        ? props.popperOptions
        : {
          placement: popperOptions.value.placement,
          onFirstUpdate: () => {
            popperInstance.value.forceUpdate()
          },
          strategy: popperOptions.value.strategy,
          modifiers: useModifier(popperOptions.value.modifierOptions),
        })
  }

  function doDestroy(forceDestroy: boolean) {
    /* istanbul ignore if */
    if (!popperInstance.value || (visibility.value && !forceDestroy)) return
    detachPopper()
  }

  function detachPopper() {
    popperInstance.value.destroy()
    popperInstance.value = null
  }

  const events = {} as {
    onClick?: (e: Event) => void
    onMouseEnter?: (e: Event) => void
    onMouseLeave?: (e: Event) => void
    onFocus?: (e: Event) => void
    onBlur?: (e: Event) => void
  }

  if (!props.manualMode) {
    const toggleState = () => {
      if (visibility.value) {
        onHide()
      } else {
        onShow()
      }
    }

    const popperEventsHandler = (e: Event) => {
      e.stopImmediatePropagation()
      e.stopPropagation()
      switch (e.type) {
        case 'click': {
          if (triggerFocused.value) {
            // reset previous focus event
            triggerFocused.value = false
          } else {
            toggleState()
          }
          break
        }
        case 'mouseenter': {
          onShow()
          break
        }
        case 'mouseleave': {
          onHide()
          break
        }
        case 'focus': {
          triggerFocused.value = true
          onShow()
          break
        }
        case 'blur': {
          triggerFocused.value = false
          onHide()
          break
        }
      }
    }

    Object.values(props.trigger).map(t => {
      switch (t) {
        case 'click': {
          events.onClick = popperEventsHandler
          break
        }
        case 'hover': {
          events.onMouseEnter = popperEventsHandler
          events.onMouseLeave = popperEventsHandler
          break
        }
        case 'focus': {
          events.onFocus = popperEventsHandler
          events.onBlur = popperEventsHandler
          break
        }
        default: {
          break
        }
      }
    })
  }

  watch(popperOptions, val => {
    if (!popperInstance.value) return
    popperInstance.value.setOptions({
      placement: val.placement,
      strategy: val.strategy,
      modifiers: useModifier(val.modifierOptions),
    })
    popperInstance.value.update()
  })

  watch(visibility,
    () => {
      if (popperInstance.value) {
        popperInstance.value.update()
      } else {
        initializePopper()
      }
    },
  )

  watch(triggerId, () => {
    initializePopper()
  })

  onMounted(() => {
    initializePopper()
  })

  onBeforeUnmount(() => {
    doDestroy(true)
  })

  onActivated(() => {
    initializePopper()
  })

  onDeactivated(() => {
    doDestroy(true)
  })

  return {
    doDestroy,
    onShow,
    onHide,
    onPopperMouseEnter,
    onPopperMouseLeave,
    initializePopper,
    arrowRef,
    excludes,
    events,
    popperId,
    popperInstance,
    popperRef,
    triggerRef,
    triggerId,
    visibility,
  }
}

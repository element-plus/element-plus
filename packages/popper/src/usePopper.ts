import { computed, Fragment, getCurrentInstance, ref, onMounted, onBeforeUnmount, onUpdated, watch } from 'vue'
import { debounce } from 'lodash'
import { createPopper } from '@popperjs/core'

import { generateId, clearTimer } from '@element-plus/utils/util'
import { addClass } from '@element-plus/utils/dom'
import throwError from '@element-plus/utils/error'

import { default as useEvents } from '@element-plus/hooks/use-events'

import useModifier from './useModifier'

import type { IPopperOptions, RefElement, PopperInstance } from './popper'

export const DEFAULT_TRIGGER = ['hover']
export const UPDATE_VALUE_EVENT = 'updateValue'

const getTrigger = () => {
  const { subTree: { children } } = getCurrentInstance()
  // SubTree is formed by <slot name="trigger"/><popper />
  // So that the trigger element is within the slot, we need to take it out of the slot in order to attach
  // events on top of it
  let targetSlot = children[0]
  if (targetSlot.length > 1) {
    console.warn('Popper will only be attached to the first child')
  }
  // This indicates if the slot is rendered with directives (e.g. v-if) or templates (e.g. <template />)
  // if it's true, then the children needs to be taken by accessing targetSlots.children to get it
  while (targetSlot.type === Fragment) {
    targetSlot = targetSlot.children[0]
  }

  const trigger: HTMLElement = targetSlot.el || targetSlot.children[0]
  if (!trigger) {
    throwError('ElPopper', 'Cannot find referrer to attach popper to')
  }
  return trigger
}

export default <T extends IPopperOptions>(props: T) => {
  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref<RefElement>(null)
  const exceptionState = ref(false)
  const popperInstance = ref<Nullable<PopperInstance>>(null)
  const popperId = ref(`el-popper-${generateId()}`)
  const popperRef = ref<RefElement>(null)
  const show = ref(false)
  const timeout = ref<NodeJS.Timeout>(null)
  const timeoutPending = ref<NodeJS.Timeout>(null)
  const excludes = computed(() => triggerRef.value)
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

  const visible = computed(() => {
    return props.manualMode ? props.value : !props.disabled && show.value
  })

  const showPopper = () => {
    if (!exceptionState.value || props.manualMode || props.disabled) return
    clearTimer(timeout)
    const handleHideAfter = () => {
      if (props.hideAfter > 0) {
        timeoutPending.value = setTimeout(() => {
          show.value = false
        }, props.hideAfter)
      }
    }
    if (props.showAfter === 0) {
      show.value = true
      handleHideAfter()
    } else {
      timeout.value = setTimeout(() => {
        show.value = true
        handleHideAfter()
      }, props.showAfter)
    }
  }

  const close = () => {
    if (props.enterable && exceptionState.value) return
    clearTimer(timeout)
    clearTimer(timeoutPending)
    show.value = false
    if (props.disabled) {
      doDestroy(true)
    }
  }
  const closePopper = props.closeDelay
    ? debounce(close, props.closeDelay)
    : close

  function onShow() {
    setExpectionState(true)
    showPopper()
  }

  function onHide() {
    setExpectionState(false)
    closePopper()
  }

  function setExpectionState(state: boolean) {
    if (!state) {
      clearTimer(timeoutPending)
    }
    exceptionState.value = state
  }

  function initializePopper() {
    const _trigger = getTrigger()
    triggerRef.value = _trigger

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
    _trigger.setAttribute('aria-describedby', popperId.value)
    _trigger.setAttribute('tabindex', props.tabIndex)
    addClass(_trigger, props.class)
  }

  function doDestroy(forceDestroy: boolean) {
    /* istanbul ignore if */
    if (!popperInstance.value || (visible.value && !forceDestroy)) return
    detachPopper()
  }

  function detachPopper() {
    popperInstance.value.destroy()
    popperInstance.value = null
    triggerRef.value = null
  }

  if (!props.manualMode) {
    const toggleState = () => {
      if (visible.value) {
        onHide()
      } else {
        onShow()
      }
    }

    const handlePopperEvents = (e: Event) => {
      e.stopImmediatePropagation()
      switch (e.type) {
        case 'click': {
          if (triggerFocused.value) {
            // reset previous focus event
            triggerFocused.value = false
          }
          toggleState()
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
    const events = []
    const handler = handlePopperEvents
    if (props.trigger.includes('click')) {
      events.push({
        name: 'click',
        handler,
      })
    }

    if (props.trigger.includes('hover')) {
      events.push({
        name: 'mouseenter',
        handler,
      },
      {
        name: 'mouseleave',
        handler,
      })
    }

    if (props.trigger.includes('focus')) {
      events.push({
        name: 'focus',
        handler,
      },
      {
        name: 'blur',
        handler,
      })
    }
    useEvents(triggerRef, events)
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

  watch(visible,
    () => {
      if (popperInstance.value) {
        popperInstance.value.update()
      } else {
        initializePopper()
      }
    },
  )

  onMounted(() => {
    initializePopper()
  })

  onBeforeUnmount(() => {
    doDestroy(true)
  })

  onUpdated(() => {
    const _trigger = getTrigger()
    if (_trigger !== triggerRef.value && popperInstance.value) {
      detachPopper()
    }
    if (popperInstance.value) {
      popperInstance.value.update()
    } else {
      initializePopper()
    }
  })

  return {
    doDestroy,
    onShow,
    onHide,
    initializePopper,
    arrowRef,
    excludes,
    popperId,
    popperInstance,
    popperRef,
    triggerRef,
    visible,
  }
}

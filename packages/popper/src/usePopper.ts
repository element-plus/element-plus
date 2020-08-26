import { computed, Fragment, getCurrentInstance, ref, onMounted, onBeforeUnmount, onUpdated, watch } from 'vue'
import { debounce } from 'lodash'
import { createPopper } from '@popperjs/core'

import { generateId } from '@element-plus/utils/util'
import { off, addClass } from '@element-plus/utils/dom'
import throwError from '@element-plus/utils/error'

import useEvents from '@element-plus/hooks/use-events'

import useModifier from './useModifier'

import type { Ref } from 'vue'
import type { SetupContext } from '@vue/runtime-core'
import type { IPopperOptions, RefElement, PopperInstance } from './popper'

export const DEFAULT_TRIGGER = ['click', 'hover', 'focus', 'contextMenu']
export const UPDATE_VALUE_EVENT = 'updateValue'

const clearTimer = (timer: Ref<Nullable<NodeJS.Timeout>>) => {
  clearTimeout(timer.value)
  timer.value = null
}

const getTrigger = () => {
  const { subTree: { children } } = getCurrentInstance()
  // SubTree is formed by <slot name="trigger"/><popper />
  // So that the trigger element is within the slot, we need to take it out of the slot in order to attach
  // events on top of it
  const targetSlot = children[0]
  if (targetSlot.length > 1) {
    console.warn('Popper will only be attached to the first child')
  }

  // This indicates if the slot is rendered with directives (e.g. v-if) or templates (e.g. <template />)
  // if it's true, then the children needs to be taken by accessing targetSlots.children to get it

  const trigger: HTMLElement = targetSlot.type === Fragment
    ? targetSlot.children[0].el
    : targetSlot.el
  if (!trigger) {
    throwError('ElPopper', 'Cannot find referrer to attach popper to')
  }
  return trigger
}

export default <T extends IPopperOptions>(props: T, ctx: SetupContext) => {
  const arrowRef = ref<RefElement>(null)
  const trigger = ref<RefElement>(null)
  const exceptionState = ref(false)
  const popperInstance = ref<Nullable<PopperInstance>>(null)
  const popperId = ref(`el-popper-${generateId()}`)
  const popperRef = ref<RefElement>(null)
  const show = ref(false)
  const timeout = ref<NodeJS.Timeout>(null)
  const timeoutPending = ref<NodeJS.Timeout>(null)

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

  const closePopper = debounce(() => {
    if (props.enterable && exceptionState.value) return
    clearTimer(timeout)
    if (timeoutPending.value !== null) {
      clearTimer(timeoutPending)
    }
    show.value = false
    if (props.disabled) {
      doDestroy(true)
    }
  }, props.closeDelay)

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
    trigger.value = _trigger

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

    const events = [
      {
        name: 'mouseenter',
        handler: onShow,
      },
      {
        name: 'mouseleave',
        handler: onHide,
      },
      {
        name: 'focus',
        handler: onShow,
      },
      {
        name: 'blur',
        handler: onHide,
      },
    ]
    useEvents(trigger, events)
  }

  function doDestroy(forceDestroy: boolean) {
    /* istanbul ignore if */
    if (!popperInstance.value || (visible.value && !forceDestroy)) return
    detachPopper()
  }

  function clickMask() {
    if (props.manualMode) {
      ctx.emit(UPDATE_VALUE_EVENT, false)
    }
  }

  function detachPopper() {
    popperInstance.value.destroy()
    popperInstance.value = null
    const _trigger = trigger.value
    off(_trigger, 'mouseenter', onShow)
    off(_trigger, 'mouseleave', onHide)
    off(_trigger, 'focus', onShow)
    off(_trigger, 'blur', onHide)
    trigger.value = null
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
    if (_trigger !== trigger.value && popperInstance.value) {
      detachPopper()
    }
    if (popperInstance.value) {
      popperInstance.value.update()
    } else {
      initializePopper()
    }
  })

  return {
    clickMask,
    doDestroy,
    onShow,
    onHide,
    initializePopper,
    arrowRef,
    popperId,
    popperInstance,
    popperRef,
    visible,
  }
}

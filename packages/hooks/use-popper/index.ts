import {
  cloneVNode,
  computed,
  Fragment,
  getCurrentInstance,
  h,
  nextTick,
  toDisplayString,
  toRef,
  Transition,
  ref,
  renderSlot,
  withDirectives,
} from 'vue'
import { NOOP } from '@vue/shared'
import { createPopper } from '@popperjs/core'
import { ClickOutside } from '@element-plus/directives'
import {
  generateId,
  isHTMLElement,
  isString,
  refAttacher,
} from '@element-plus/utils/util'
import { getFirstValidNode } from '@element-plus/utils/vnode'
import { stop } from '@element-plus/utils/dom'
import PopupManager from '@element-plus/utils/popup-manager'
import throwError from '@element-plus/utils/error'

import useTeleport from '../use-teleport'
import useTimeout from '../use-timeout'
import { useModelToggle } from '../use-model-toggle'
import { useTransitionFallthrough } from '../use-transition-fallthrough'
import { defaultPopperOptions, defaultModifiers } from './use-popper-options'
import { useTargetEvents, DEFAULT_TRIGGER } from './use-target-events'

import type {
  CSSProperties,
  ComponentPublicInstance,
  ExtractPropTypes,
  PropType,
} from 'vue'
import type {
  Instance as PopperInstance,
  StrictModifiers,
} from '@popperjs/core'
import type { RefElement } from '@element-plus/utils/types'
import type { Trigger } from './use-target-events'

export type Effect = 'light' | 'dark'
export type Offset = [number, number] | number

type ElementType = ComponentPublicInstance | HTMLElement

export const DARK_EFFECT = 'dark'
export const LIGHT_EFFECT = 'light'

export const usePopperControlProps = {
  appendToBody: {
    type: Boolean,
    default: true,
  },
  arrowOffset: {
    type: Number,
  },
  popperOptions: defaultPopperOptions,
  popperClass: {
    type: String,
    default: '',
  },
}

export const usePopperProps = {
  ...usePopperControlProps,
  // the arrow size is an equailateral triangle with 10px side length, the 3rd side length ~ 14.1px
  // adding a offset to the ceil of 4.1 should be 5 this resolves the problem of arrow overflowing out of popper.
  autoClose: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    default: '',
  },
  class: String,
  style: Object,
  hideAfter: {
    type: Number,
    default: 200,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  effect: {
    type: String as PropType<Effect>,
    default: DARK_EFFECT,
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  pure: {
    type: Boolean,
    default: false,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  transition: {
    type: String,
    default: 'el-fade-in-linear',
  },
  trigger: {
    type: [String, Array] as PropType<Trigger>,
    default: DEFAULT_TRIGGER,
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
}

export const usePopper = () => {

  const vm = getCurrentInstance()
  const props = vm.props as ExtractPropTypes<typeof usePopperProps>
  const { slots } = vm

  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref<ElementType>(null)
  const popperRef = ref<RefElement>(null)

  const popperStyle = ref<CSSProperties>({ zIndex: PopupManager.nextZIndex() })
  const visible = ref(false)
  const isManual = computed(() => props.manualMode || props.trigger === 'manual')

  const popperId = `el-popper-${generateId()}`
  let popperInstance: Nullable<PopperInstance> = null

  const {
    renderTeleport,
    showTeleport,
    hideTeleport,
  } = useTeleport(popupRenderer, toRef(props, 'appendToBody'))

  const { show, hide } = useModelToggle({
    indicator: visible,
    onShow,
    onHide,
  })

  const { registerTimeout, cancelTimeout } = useTimeout()

  // event handlers

  function onShow() {
    popperStyle.value.zIndex = PopupManager.nextZIndex()
    nextTick(initializePopper)
  }

  function onHide() {
    hideTeleport()
    nextTick(detachPopper)
  }

  /**
   * The calling mechanism here is:
   * when the visibility gets changed, let's say we change it to true
   * the delayShow gets called which initializes a global root node for the popper content
   * to insert in, then it register a timer for calling the show method, which changes the flag to
   * true, then calls onShow method.
   * So the order of invocation is: delayedShow -> timer(show) -> set the indicator to true -> onShow
   */

  function delayShow() {
    if (isManual.value || props.disabled) return
    // renders out the teleport element root.
    showTeleport()
    registerTimeout(show, props.showAfter)
  }

  function delayHide() {
    if (isManual.value) return
    registerTimeout(hide, props.hideAfter)
  }

  function onToggle() {
    if (visible.value) {
      delayShow()
    } else {
      delayHide()
    }
  }

  function detachPopper() {
    popperInstance?.destroy?.()
    popperInstance = null
  }

  function onPopperMouseEnter() {
    // if trigger is click, user won't be able to close popper when
    // user tries to move the mouse over popper contents
    if (props.enterable && props.trigger !== 'click') {
      cancelTimeout()
    }
  }

  function onPopperMouseLeave() {
    const { trigger } = props
    const shouldPrevent =
      (isString(trigger) && (trigger === 'click' || trigger === 'focus')) ||
      // we'd like to test array type trigger here, but the only case we need to cover is trigger === 'click' or
      // trigger === 'focus', because that when trigger is string
      // trigger.length === 1 and trigger[0] === 5 chars string is mutually exclusive.
      // so there will be no need to test if trigger is array type.
      (trigger.length === 1 &&
        (trigger[0] === 'click' || trigger[0] === 'focus'))
    if (shouldPrevent) return
    delayHide()
  }

  function initializePopper() {
    if (!visible.value || popperInstance !== null) {
      return
    }
    const unwrappedTrigger = triggerRef.value
    const $el = isHTMLElement(unwrappedTrigger)
      ? unwrappedTrigger
      : (unwrappedTrigger as ComponentPublicInstance).$el

    popperInstance = createPopper($el, popperRef.value, buildPopperOptions())
    popperInstance.update()
  }

  function buildPopperOptions() {
    const modifiers = [
      ...defaultModifiers,
      ...props.popperOptions.modifiers,
    ]

    if (props.showArrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          padding: props.arrowOffset || 5,
          element: arrowRef.value,
        },
      } as StrictModifiers)
    }

    return {
      ...props.popperOptions,
      modifiers,
    }
  }

  const {
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  } = useTransitionFallthrough()

  const events = useTargetEvents(delayShow, delayHide, onToggle)

  const arrowRefAttacher = refAttacher(arrowRef)
  const popperRefAttacher = refAttacher(popperRef)
  const triggerRefAttacher = refAttacher(triggerRef)

  // renderers
  function popupRenderer() {
    const mouseUpAndDown = props.stopPopperMouseEvent ? stop : NOOP
    return h(
      Transition,
      {
        name: props.transition,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
      },
      {
        default: () => () => visible.value ? h('div',
          {
            'aria-hidden': false,
            class: [
              props.popperClass,
              'el-popper',
              `is-${props.effect}`,
              props.pure ? 'is-pure' : '',
            ],
            style: popperStyle.value,
            id: popperId,
            ref: popperRefAttacher,
            role: 'tooltip',
            onMouseenter: onPopperMouseEnter,
            onMouseleave: onPopperMouseLeave,
            onClick: stop,
            onMousedown: mouseUpAndDown,
            onMouseup: mouseUpAndDown,
          },
          [
            renderSlot(slots, 'default', {}, () => [toDisplayString(props.content)]),
            arrowRenderer(),
          ],
        ) : null,
      },
    )
  }

  function arrowRenderer() {
    return props.showArrow
      ? h(
        'div',
        {
          ref: arrowRefAttacher,
          class: 'el-popper__arrow',
          'data-popper-arrow': '',
        },
        null,
      )
      : null
  }

  function triggerRenderer(triggerProps) {
    const trigger = slots.trigger?.()
    const firstElement = getFirstValidNode(trigger, 1)
    if (!firstElement) throwError('renderTrigger', 'trigger expects single rooted node')
    return cloneVNode(firstElement, triggerProps, true)
  }

  function render() {

    const trigger = triggerRenderer({
      'aria-describedby': popperId,
      class: props.class,
      style: props.style,
      ref: triggerRefAttacher,
      ...events,
    })
    return h(Fragment, null, [
      isManual.value
        ? trigger
        : withDirectives(trigger, [[ClickOutside, delayHide]]),
      renderTeleport(),
    ])
  }

  return {
    render,
  }
}



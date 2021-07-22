import {
  cloneVNode,
  computed,
  Fragment,
  getCurrentInstance,
  h,
  toDisplayString,
  toRef,
  Transition,
  ref,
  renderSlot,
  watch,
  withDirectives,
} from 'vue'
import { NOOP } from '@vue/shared'
import { createPopper } from '@popperjs/core'
import { ClickOutside } from '@element-plus/directives'
import {
  generateId,
  isHTMLElement,
  isArray,
  isBool,
  isString,
  isNumber,
  isNull,
  refAttacher,
} from '@element-plus/utils/util'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { getFirstValidNode } from '@element-plus/utils/vnode'
import {
  batchAddEvts,
  clearEvts,
  stop,
} from '@element-plus/utils/dom'

import PopupManager from '@element-plus/utils/popup-manager'
import throwError from '@element-plus/utils/error'

import useTeleport from '../use-teleport'
import useTimeout from '../use-timeout'
import {
  useModelToggle,
  useModelToggleEmits,
  useModelToggleProps,
} from '../use-model-toggle'
import { useTransitionFallthrough } from '../use-transition-fallthrough'
import { useTransitionProps, useTransition } from '../use-transition'
import { useAnchorProps, useAnchor } from '../use-anchor'
import { defaultPopperOptions, defaultModifiers } from './use-popper-options'

import type {
  CSSProperties,
  ComponentPublicInstance,
  ExtractPropTypes,
  PropType,
} from 'vue'
import type {
  Instance as PopperInstance,
  StrictModifiers,
  Placement,
} from '@popperjs/core'
import type { RefElement } from '@element-plus/utils/types'
import type { Events } from '@element-plus/utils/dom'

export type TriggerType = 'click' | 'hover' | 'focus'
export type Trigger = (TriggerType | 'manual') | TriggerType[]

export type Effect = 'light' | 'dark'
export type Offset = [number, number] | number

type ElementType = ComponentPublicInstance | HTMLElement

export const DARK_EFFECT = 'dark'
export const LIGHT_EFFECT = 'light'

export const usePopperEmits = [
  ...useModelToggleEmits,
  'before-hide',
  'before-show',
  'after-hide',
  'after-show',
  'hide',
  'show',
]

export const usePopperControlProps = {
  appendToBody: {
    type: Boolean,
    default: true,
  },
  arrowOffset: {
    type: Number,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  popperOptions: defaultPopperOptions,
  popperClass: {
    type: String,
    default: '',
  },
}

export const usePopperProps = {
  ...useAnchorProps,
  ...usePopperControlProps,
  ...useModelToggleProps,
  ...useTransitionProps,
  // the arrow size is an equailateral triangle with 10px side length, the 3rd side length ~ 14.1px
  // adding a offset to the ceil of 4.1 should be 5 this resolves the problem of arrow overflowing out of popper.
  autoClose: {
    type: Number,
  },
  content: {
    type: String,
    default: '',
  },
  class: String,
  style: [String, Object, Array],
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
    default: 'hover',
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
  const { slots, emit, proxy } = vm

  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref<ElementType>(null)
  const popperRef = ref<RefElement>(null)

  const popperStyle = ref<CSSProperties>({ zIndex: PopupManager.nextZIndex() })
  const visible = ref(false)
  const isManual = computed(
    () => props.manualMode
      || props.trigger === 'manual'
      || (
        isBool(props.modelValue) && !props[UPDATE_MODEL_EVENT]
      ),
  )

  const popperOptions = computed(() => {
    const modifiers = [...defaultModifiers, ...props.popperOptions.modifiers]

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
      placement: props.placement,
      modifiers,
    }
  })

  Object.assign(proxy, {
    triggerRef,
    popperRef,
  })

  const popperId = `el-popper-${generateId()}`
  let popperInstance: Nullable<PopperInstance> = null

  const { renderTeleport, showTeleport, hideTeleport } = useTeleport(
    popupRenderer,
    toRef(props, 'appendToBody'),
  )

  const { anchorEl, anchorEvents, canShow } = useAnchor({ indicator: visible, mountAnchor })

  const { show, hide } = useModelToggle({
    indicator: visible,
    shouldProceed: canShow,
    onShow,
    onHide,
  })

  Object.assign(anchorEvents, {
    delayHide,
    delayShow,
    onToggle,
  })

  const { registerTimeout, cancelTimeout } = useTimeout()

  const { transition, transitionStyle } = useTransition(props, visible)

  // event handlers
  function onShow() {
    showTeleport()
    popperStyle.value.zIndex = PopupManager.nextZIndex()
    emit('show')
    registerTimeout(() => {
      emit('after-show')
      initializePopper()
      if (isNumber(props.autoClose) && props.autoClose > 0) {
        registerTimeout(delayHide, props.autoClose)
      }
    }, props.transitionDuration)
  }

  function onHide() {
    registerTimeout(() => {
      detachPopper()
      hideTeleport()
      emit('hide')
    }, props.transitionDuration * 1000)
  }

  function onToggle() {
    if (visible.value) {
      delayShow()
    } else {
      delayHide()
    }
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
    // renders out the teleport element root.
    emit('before-show')
    registerTimeout(show, props.showAfter)
  }

  function delayHide() {
    registerTimeout(hide, props.hideAfter)
  }

  function onPopperMouseEnter() {
    if (isManual.value) return
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
    if (shouldPrevent || isManual.value) return
    delayHide()
  }

  function initializePopper() {
    if (!visible.value || popperInstance !== null) {
      console.log(1)
      console.log(popperInstance)
      popperInstance.update()
      return
    }
    const unwrappedTrigger = triggerRef.value
    const $el = isHTMLElement(unwrappedTrigger)
      ? unwrappedTrigger
      : (unwrappedTrigger as ComponentPublicInstance).$el

    popperInstance = createPopper($el, popperRef.value, {
      ...popperOptions.value,
      onFirstUpdate: () => {
        popperInstance.update()
      },
    })
  }

  function mountAnchor() {
    if (
      props.noParentEvent
      || isNull(anchorEl.value)
      || isManual.value
    ) return

    let events: Events

    const getEvent = (trigger: TriggerType): Events => {
      switch(trigger) {
        case 'click': {
          return [
            [
              anchorEl.value,
              'click',
              'onToggle',
              'non-passive',
            ],
          ]
        }
        case 'focus': {
          return [
            [
              anchorEl.value,
              'focus',
              'delayShow',
              'passive',
            ],
            [
              anchorEl.value,
              'blur',
              'delayHide',
              'passive',
            ],
          ]
        }
        // defaults to 'hover'
        default: {
          return [
            [
              anchorEl.value,
              'mouseenter',
              'delayShow',
              'passive',
            ],
            [
              anchorEl.value,
              'mouseleave',
              'delayHide',
              'passive',
            ],
          ]
        }
      }
    }

    if (isArray(props.trigger)) {
      events = []
      Object.values(props.trigger).map(t => {
        events = [...events, ...getEvent(t)]
      })
    } else {
      events = getEvent(props.trigger as TriggerType)
    }

    batchAddEvts(anchorEvents, 'anchor', events)
  }

  function detachPopper() {
    popperInstance?.destroy?.()
    popperInstance = null
  }

  watch(
    () => props.modelValue,
    val => {
      if (isManual.value && val !== null) {
        if (val) {
          show()
        } else {
          hide()
        }
      }
    },
  )

  const {
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  } = useTransitionFallthrough()

  const arrowRefAttacher = refAttacher(arrowRef)
  const popperRefAttacher = refAttacher(popperRef)
  const triggerRefAttacher = refAttacher(triggerRef)

  // renderers
  function popupContent() {
    const mouseUpAndDown = props.stopPopperMouseEvent ? stop : NOOP

    return visible.value
      ? h(
        'div',
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
          onMousedown: mouseUpAndDown,
          onMouseup: mouseUpAndDown,
          onClick: stop,
        },
        [
          renderSlot(slots, 'default', {}, () => [
            toDisplayString(props.content),
          ]),
          arrowRenderer(),
        ],
      )
      : null
  }

  function popupRenderer() {
    return h(
      Transition,
      {
        name: props.transition,
        appear: true,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        style: transitionStyle.value,
      },
      {
        default: popupContent,
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
    if (!firstElement)
      throwError('renderTrigger', 'trigger expects single rooted node')
    return cloneVNode(firstElement, triggerProps, true)
  }

  function render() {
    const trigger = triggerRenderer({
      'aria-describedby': popperId,
      class: props.class,
      style: props.style,
      ref: triggerRefAttacher,
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

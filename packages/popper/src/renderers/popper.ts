import { withDirectives, Transition, vShow, withCtx, h } from 'vue'
import { NOOP } from '@vue/shared'
import { stop } from '@element-plus/utils/dom'

import type { VNode, Ref } from 'vue'
import type { Effect } from '../use-popper/defaults'

interface IRenderPopperProps {
  effect: Effect
  name: string
  stopPopperMouseEvent: boolean
  popperClass: string
  popperStyle?: Partial<CSSStyleDeclaration>
  popperId: string
  popperRef?: Ref<HTMLElement>
  pure?: boolean
  visibility: boolean
  onMouseenter: () => void
  onMouseleave: () => void
  onAfterEnter?: () => void
  onAfterLeave?: () => void
  onBeforeEnter?: () => void
  onBeforeLeave?: () => void
}

export default function renderPopper(
  props: IRenderPopperProps,
  children: VNode[],
) {
  const {
    effect,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseenter,
    onMouseleave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  } = props

  const kls = [
    popperClass,
    'el-popper',
    'is-' + effect,
    pure ? 'is-pure' : '',
  ]
  /**
   * Equivalent to
   * <transition :name="name">
   *  <div v-show="visibility" :aria-hidden="!visibility" :class="kls" ref="popperRef" role="tooltip" @mouseenter="" @mouseleave="" @click="">
   *    <slot />
   *  </div>
   * </transition>
   */

  const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP
  return h(
    Transition,
    {
      name,
      'onAfterEnter': onAfterEnter,
      'onAfterLeave': onAfterLeave,
      'onBeforeEnter': onBeforeEnter,
      'onBeforeLeave': onBeforeLeave,
    },
    {
      default: withCtx(() => [withDirectives(
        h(
          'div',
          {
            'aria-hidden': String(!visibility),
            class: kls,
            style: popperStyle ?? {},
            id: popperId,
            ref: popperRef ?? 'popperRef',
            role: 'tooltip',
            onMouseenter,
            onMouseleave,
            onClick: stop,
            onMousedown: mouseUpAndDown,
            onMouseup: mouseUpAndDown,
          },
          children,
        ),
        [[vShow, visibility]],
      )]),
    },
  )
}

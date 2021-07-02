import { Transition, h } from 'vue'
import { NOOP } from '@vue/shared'
import { stop } from '@element-plus/utils/dom'

import type { VNode, Ref, CSSProperties } from 'vue'
import type { Effect } from '../../../hooks/use-teleport/props'

interface IRenderPopperProps {
  effect: Effect
  name: string
  stopPopperMouseEvent: boolean
  popperClass: string
  popperStyle?: CSSProperties
  popperId: string
  popperRef?: Ref<HTMLElement> | ((val: HTMLElement) => void)
  pure?: boolean
  visible: boolean
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
    visible,
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
      // appear: true,
      name,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
    },
    {
      default: () => visible ? h('div',
        {
          'aria-hidden': String(!visible),
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
      ) : null,
    },
  )
}

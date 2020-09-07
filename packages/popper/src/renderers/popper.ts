import { withDirectives, h, Transition, vShow } from 'vue'
import { stop } from '@element-plus/utils/dom'

import type { VNode } from 'vue'
import type { Effect } from '../popper'

type TransitionEmitters = {
  onAfterEnter: () => void
  onAfterLeave: () => void
}

interface IRenderPopperProps {
  name: string
  effect: Effect
  popperClass: string
  popperId: string
  pure: boolean
  visibility: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  transitionEmitters: TransitionEmitters
}

export default function renderPopper(
  props: IRenderPopperProps,
  children: VNode[],
) {
  const {
    effect,
    name,
    popperClass,
    pure,
    popperId,
    transitionEmitters,
    visibility,
    onMouseEnter,
    onMouseLeave,
  } = props

  const kls = [
    'el-popper',
    'is-' + effect,
    popperClass,
    pure ? 'el-popper__pure' : '',
  ]
  /**
   * Equivalent to
   * <transition :name="name">
   *  <div  v-show="visibility" :aria-hidden="!visibility" :class="kls" ref="popperRef" role="tooltip" @mouseenter="" @mouseleave="" @click="">
   *    {children}
   *  </div>
   * </transition>
   */
  return h(
    Transition,
    {
      name,
      ...transitionEmitters,
    },
    {
      default: () =>
        withDirectives(
          h(
            'div',
            {
              'aria-hidden': String(!visibility),
              class: kls,
              id: popperId,
              ref: 'popperRef',
              role: 'tooltip',
              onMouseEnter,
              onMouseLeave,
              onClick: stop,
            },
            children,
          ),
          [[vShow, visibility]],
        ),
    },
  )
}

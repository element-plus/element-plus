import { withDirectives, Transition, vShow } from 'vue'
import { renderBlock, PatchFlags } from '@element-plus/utils/vnode'
import { stop } from '@element-plus/utils/dom'

import type { VNode, Ref } from 'vue'
import type { Effect } from '../use-popper/defaults'

interface IRenderPopperProps {
  name: string
  effect: Effect
  popperClass: string
  popperStyle: Partial<CSSStyleDeclaration>
  popperId: string
  popperRef?: Ref<HTMLElement>
  pure: boolean
  visibility: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onAfterEnter: () => void
  onAfterLeave: () => void
}

export default function renderPopper(
  props: IRenderPopperProps,
  children: VNode[],
) {
  const {
    effect,
    name,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseEnter,
    onMouseLeave,
    ...transitionEvents
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
   *  <div v-show="visibility" :aria-hidden="!visibility" :class="kls" ref="popperRef" role="tooltip" @mouseenter="" @mouseleave="" @click="">
   *    {children}
   *  </div>
   * </transition>
   */
  return renderBlock(
    Transition,
    {
      name,
      ...transitionEvents,
    },
    {
      default: () =>
        withDirectives(
          renderBlock(
            'div',
            {
              'aria-hidden': String(!visibility),
              class: kls,
              style: popperStyle,
              id: popperId,
              ref: popperRef ?? 'popperRef',
              role: 'tooltip',
              onMouseEnter,
              onMouseLeave,
              onClick: stop,
            },
            children,
            PatchFlags.FULL_PROPS | PatchFlags.NEED_PATCH,
          ),
          [[vShow, visibility]],
        ),
    },
    PatchFlags.DYNAMIC_SLOTS,
  )
}

import { withDirectives, Transition, vShow, withCtx, createVNode } from 'vue'
import { PatchFlags } from '@element-plus/utils/vnode'
import { stop } from '@element-plus/utils/dom'

import type { VNode, Ref } from 'vue'
import type { Effect } from '../use-popper/defaults'

interface IRenderPopperProps {
  name: string
  effect: Effect
  popperClass: string
  popperStyle?: Partial<CSSStyleDeclaration>
  popperId: string
  popperRef?: Ref<HTMLElement>
  pure: boolean
  tabindex: number
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
    tabindex,
    visibility,
    onMouseEnter,
    onMouseLeave,
    onAfterEnter,
    onAfterLeave,
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
   *    <slot />
   *  </div>
   * </transition>
   */
  return createVNode(
    Transition,
    {
      name,
      'onAfter-enter': onAfterEnter,
      'onAfter-leave': onAfterLeave,
    },
    {
      default: withCtx(() => [withDirectives(
        createVNode(
          'div',
          {
            'aria-hidden': String(!visibility),
            class: kls,
            style: popperStyle ?? {},
            id: popperId,
            ref: popperRef ?? 'popperRef',
            role: 'tooltip',
            tabindex,
            onMouseEnter,
            onMouseLeave,
            onClick: stop,
            onMouseDown: stop,
            onMouseUp: stop,
          },
          children,
          PatchFlags.CLASS | PatchFlags.STYLE | PatchFlags.PROPS | PatchFlags.HYDRATE_EVENTS,
          [
            'aria-hidden',
            'onMouseenter',
            'onMouseleave',
            'onMousedown',
            'onMouseup',
            'onClick',
            'id',
            'tabindex',
          ],
        ),
        [[vShow, visibility]],
      )]),
    },
    PatchFlags.PROPS, ['name', 'onAfter-enter', 'onAfter-leave'],
  )
}

import { withDirectives, Transition, vShow, withCtx, createVNode } from 'vue'
import { NOOP } from '@vue/shared'
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
  visibility: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onAfterEnter: () => void
  onAfterLeave: () => void
  isManual: boolean
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
    isManual,
    onMouseEnter,
    onMouseLeave,
    onAfterEnter,
    onAfterLeave,
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
            onMouseEnter,
            onMouseLeave,
            onClick: stop,
            onMouseDown: isManual ? NOOP : stop,
            onMouseUp: isManual ? NOOP : stop,
          },
          children,
          PatchFlags.CLASS | PatchFlags.STYLE | PatchFlags.PROPS | PatchFlags.HYDRATE_EVENTS,
          [
            'aria-hidden',
            'onMouseenter',
            'onMouseleave',
            'onMouseDown',
            'onMouseUp',
            'onClick',
            'id',
          ],
        ),
        [[vShow, visibility]],
      )]),
    },
    PatchFlags.PROPS, ['name', 'onAfter-enter', 'onAfter-leave'],
  )
}

import {
  defineComponent,
  Fragment,
  createTextVNode,
  renderSlot,
  toDisplayString,
  createCommentVNode,
  withDirectives,
  Teleport,
  h,
  reactive,
  toRef,
} from 'vue'
import { ClickOutside } from '@element-plus/directives'
import {
  popperProps,
  Effect,
  renderArrow,
  renderPopper,
  renderTrigger,
} from '@element-plus/components/popper'
import { debugWarn } from '@element-plus/utils/error'
import { renderIf, PatchFlags } from '@element-plus/utils/vnode'
import { buildProp } from '@element-plus/utils/props'
import usePopover, { SHOW_EVENT, HIDE_EVENT } from './usePopover'

import type { ExtractPropTypes, Ref } from 'vue'
import type { TriggerType } from '@element-plus/components/popper'
import type { ElementType } from '@element-plus/components/popper/src/use-popper'

const popoverProps = {
  ...popperProps,
  trigger: buildProp<TriggerType>({
    type: String,
    default: 'click',
  }),
  title: {
    type: String,
  },
  transition: {
    type: String,
    default: 'fade-in-linear',
  },
  width: buildProp<string | number>({
    type: [String, Number],
    default: 150,
  }),
  appendToBody: {
    type: Boolean,
    default: true,
  },
  tabindex: buildProp<string | number>({
    type: [String, Number],
  }),
} as const
const emits = [
  'update:visible',
  'after-enter',
  'after-leave',
  SHOW_EVENT,
  HIDE_EVENT,
]
const NAME = 'ElPopover'

const _hoist = { key: 0, class: 'el-popover__title', role: 'title' }

export type PopoverProps = ExtractPropTypes<typeof popoverProps>

export default defineComponent({
  name: NAME,

  props: popoverProps,
  emits,

  setup(props, ctx) {
    if (
      process.env.NODE_ENV !== 'production' &&
      props.visible &&
      !ctx.slots.reference
    )
      debugWarn(NAME, 'You cannot init popover without given reference')

    const popover = usePopover(props, ctx)

    ctx.expose({
      events: popover.events,
      triggerRef: popover.triggerRef,
      tabindex: toRef(props, 'tabindex'),
    })

    return () => {
      const { slots } = ctx
      const trigger = slots.reference?.() ?? null

      const title = renderIf(
        !!props.title,
        'div',
        _hoist,
        toDisplayString(props.title),
        PatchFlags.TEXT
      )

      const content = renderSlot(slots, 'default', {}, () => [
        createTextVNode(toDisplayString(props.content), PatchFlags.TEXT),
      ])

      const {
        events,
        onAfterEnter,
        onAfterLeave,
        onPopperMouseEnter,
        onPopperMouseLeave,
        popperStyle,
        popperId,
        visibility,
      } = reactive(popover)

      const kls = [
        props.content ? 'el-popover--plain' : '',
        'el-popover',
        props.popperClass,
      ].join(' ')

      const vPopover = renderPopper(
        {
          effect: Effect.LIGHT,
          name: props.transition,
          popperClass: kls,
          popperStyle,
          popperId,
          visibility,
          onMouseenter: onPopperMouseEnter,
          onMouseleave: onPopperMouseLeave,
          onAfterEnter,
          onAfterLeave,
          stopPopperMouseEvent: false,
        },
        [title, content, renderArrow(props.showArrow)]
      )

      // when user uses popover directively, trigger will be null so that we only
      // render a popper window for displaying contents
      const _trigger = trigger
        ? renderTrigger(trigger, {
            ariaDescribedby: popperId,
            ref: popover.triggerRef as Ref<ElementType>,
            tabindex: props.tabindex,
            ...events,
          })
        : createCommentVNode('v-if', true)

      return h(Fragment, null, [
        props.trigger === 'click'
          ? withDirectives(_trigger, [[ClickOutside, popover.hide]])
          : _trigger,
        h(
          Teleport,
          {
            disabled: !props.appendToBody,
            to: 'body',
          },
          [vPopover]
        ),
      ])
    }
  },
})

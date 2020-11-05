<script lang="ts">
import { defineComponent, Fragment, createTextVNode, renderSlot, toDisplayString, createCommentVNode, withDirectives } from 'vue'
import { Popper as ElPopper } from '@element-plus/popper'
import { defaultProps, Effect } from '@element-plus/popper'
import { renderPopper, renderTrigger, renderArrow } from '@element-plus/popper'
import { ClickOutside } from '@element-plus/directives'
import { warn } from '@element-plus/utils/error'
import { renderBlock, renderIf, PatchFlags } from '@element-plus/utils/vnode'
import { stop } from '@element-plus/utils/dom'
import usePopover, { SHOW_EVENT, HIDE_EVENT } from './usePopover'

import type { PropType } from 'vue'
import type { TriggerType } from '@element-plus/popper'

const emits = ['update:visible', 'after-enter', 'after-leave', SHOW_EVENT, HIDE_EVENT ]
const NAME = 'ElPopover'

const _hoist = { key: 0, class: 'el-popover__title', role: 'title' }

export default defineComponent({
  name: NAME,
  components: {
    ElPopper,
  },
  props: {
    ...defaultProps,
    content: {
      type: String,
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'click',
    },
    title: {
      type: String,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    width: {
      type: [String, Number],
      default: 150,
    },
  },
  emits,
  setup(props, ctx) {
    if (process.env.NODE_EVN !== 'production' && props.visible && !ctx.slots.reference) {
      warn(NAME, `
        You cannot init popover without given reference
      `)
    }
    const states = usePopover(props, ctx)

    return states
  },
  render() {
    const { $slots } = this
    const trigger = $slots.reference ? $slots.reference() : null

    const title = renderIf(this.title, 'div', _hoist, toDisplayString(this.title), PatchFlags.TEXT)

    const content = renderSlot($slots, 'default', {},
      () => [createTextVNode(toDisplayString(this.content), PatchFlags.TEXT)])

    const {
      events,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      pure,
      showArrow,
      transition,
      visibility,
    } = this

    const kls = [
      this.content ? 'el-popover__plain' : '',
      'el-popover',
      popperClass,
    ].join(' ')

    let popover = renderPopper({
      effect: Effect.LIGHT,
      name: transition,
      popperClass: kls,
      popperStyle: popperStyle,
      popperId,
      pure,
      visibility,
      onMouseEnter: onPopperMouseEnter,
      onMouseLeave: onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
    }, [
      title,
      content,
      renderArrow(showArrow),
    ],
    )

    // when user uses popover directively, trigger will be null so that we only
    // render a popper window for displaying contents
    const _trigger = trigger ? renderTrigger(trigger, {
      ariaDescribedby: popperId,
      ref: 'triggerRef',
      onMouseDown: stop,
      onMouseUp: stop,
      ...events,
    }) : createCommentVNode('v-if', true)


    return renderBlock(Fragment, null, [
      this.trigger === 'click'
        ? withDirectives(_trigger, [[ClickOutside, this.hide]])
        : _trigger,
      popover,
    ])
  },
})
</script>

<style>
.el-popover .el-popper__arrow::before {
  border: 1px solid #ebeef5;
}
</style>

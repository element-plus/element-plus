<script lang="ts">
import { defineComponent, Fragment, createTextVNode } from 'vue'
import { Popper as ElPopper } from '@element-plus/popper'
import defaultProps, { Effect } from '@element-plus/popper/src/use-popper/defaults'
import { renderPopper, renderTrigger, renderArrow } from '@element-plus/popper/src/renderers'

import { warn } from '@element-plus/utils/error'
import { renderBlock, renderIf, PatchFlags } from '@element-plus/utils/vnode'
import { stop } from '@element-plus/utils/dom'
import usePopover, { SHOW_EVENT, HIDE_EVENT } from './usePopover'

import type { PropType } from 'vue'
import type { TriggerType } from '@element-plus/popper/src/use-popper/defaults'

const emits = ['update:visible', 'after-enter', 'after-leave', SHOW_EVENT, HIDE_EVENT ]
const NAME = 'ElPopover'

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
    let trigger = $slots.reference?.()

    const title = renderIf(!!this.title, 'div', {
      class: 'el-popover__title',
      role: 'title',
    }, this.title, PatchFlags.TEXT)

    const content = renderBlock(Fragment, null, $slots.default?.() ??
        createTextVNode(this.content, PatchFlags.TEXT), PatchFlags.STABLE_FRAGMENT)

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
      tabIndex,
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
    }, [renderBlock(Fragment, null, [
      title,
      content,
      renderArrow(showArrow),
    ], PatchFlags.STABLE_FRAGMENT)],
    )

    // when user uses popover directively, trigger will be null so that we only
    // render a popper window for displaying contents
    const _trigger = trigger ? renderTrigger(trigger, {
      ariaDescribedby: popperId,
      ref: 'triggerRef',
      tabindex: tabIndex,
      onMouseDown: stop,
      onMouseUp: stop,
      ...events,
    }) : createTextVNode('')

    return renderBlock(Fragment, null, [
      _trigger,
      popover,
    ], PatchFlags.NEED_PATCH)
  },
})
</script>

<style>
.el-popover .el-popper__arrow::before {
  border: 1px solid #ebeef5;
}
</style>

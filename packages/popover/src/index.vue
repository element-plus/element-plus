<script lang="ts">
import { defineComponent, Fragment, createTextVNode, h } from 'vue'
import { Popper as ElPopper } from '@element-plus/popper'
import defaultProps from '@element-plus/popper/src/use-popper/defaults'
import { renderPopper, renderTrigger, renderArrow } from '@element-plus/popper/src/renderers'

import { warn } from '@element-plus/utils/error'
import { renderBlock, renderIf, PatchFlags } from '@element-plus/utils/vnode'
import { stop } from '@element-plus/utils/dom'
import usePopover, { SHOW_EVENT, HIDE_EVENT } from './usePopover'

import { PropType } from 'vue'
import type { TriggerType, Placement, Effect } from '@element-plus/popper/src/use-popper/defaults'

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
    // init here

    if (process.env.NODE_EVN !== 'production' && props.visible && !ctx.slots.reference) {
      warn(NAME, `
        You cannot init popover without given reference
      `)
    }
    const states = usePopover(props, ctx)

    return () => {
      const { slots } = ctx
      let trigger = slots.reference?.()

      const title = renderIf(!!props.title, 'div', {
        class: 'el-popover__title'
      }, props.title, PatchFlags.TEXT)

      const content = renderBlock(Fragment, null, slots.default?.() ??
        createTextVNode(props.content, PatchFlags.TEXT), PatchFlags.STABLE_FRAGMENT)
      const { transition, popperClass, pure, tabIndex } = props
      const { 
        events,
        onAfterEnter,
        onAfterLeave,
        onPopperMouseEnter,
        onPopperMouseLeave,
        popperStyle,
        popperId, 
        popperRef,
        triggerRef,
        visibility,
      } = states

      const kls = [
        props.content ? 'el-popover__plain' : '',
        'el-popover',
        popperClass,
      ].join(' ')

      let popover = renderPopper({
        effect: 'light' as Effect,
        name: transition,
        popperClass: kls,
        popperStyle: popperStyle.value,
        popperId,
        popperRef,
        pure,
        visibility: visibility.value,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,

      }, [renderBlock(Fragment, null, [
        title,
        content,
      ], PatchFlags.STABLE_FRAGMENT)]
      )

      const _trigger = trigger ? renderTrigger(trigger, {
        ariaDescribedby: popperId,
        ref: triggerRef,
        tabindex: tabIndex,
        onMouseDown: stop,
        onMouseUp: stop,
        ...events,
        }) : null

      return renderBlock(Fragment, null, [
        _trigger,
        popover,
      ], PatchFlags.BAIL)
    }
  },
})
</script>

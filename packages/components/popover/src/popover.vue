<script lang="ts">
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
} from 'vue'
import { ClickOutside } from '@element-plus/directives'
import ElPopper, {
  Effect,
  renderArrow,
  renderPopper,
  renderTrigger,
} from '@element-plus/components/popper'
import { debugWarn } from '@element-plus/utils/error'
import { renderIf, PatchFlags } from '@element-plus/utils/vnode'
import usePopover from './usePopover'
import { popoverProps, popoverEmits } from './popover'

const NAME = 'ElPopover'
const _hoist = { key: 0, class: 'el-popover__title', role: 'title' }

export default defineComponent({
  name: NAME,
  components: {
    ElPopper,
  },
  props: popoverProps,
  emits: popoverEmits,
  setup(props, ctx) {
    if (props.visible && !ctx.slots.reference) {
      debugWarn(
        NAME,
        `
        You cannot init popover without given reference
      `
      )
    }
    const states = usePopover(props, ctx)

    return states
  },
  render() {
    const { $slots } = this
    const trigger = $slots.reference ? $slots.reference() : null

    const title = renderIf(
      !!this.title,
      'div',
      _hoist,
      toDisplayString(this.title),
      PatchFlags.TEXT
    )

    const content = renderSlot($slots, 'default', {}, () => [
      createTextVNode(toDisplayString(this.content), PatchFlags.TEXT),
    ])

    const {
      events,
      onAfterEnter,
      onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      showArrow,
      transition,
      visibility,
      tabindex,
    } = this

    const kls = [
      this.content ? 'el-popover--plain' : '',
      'el-popover',
      popperClass,
    ].join(' ')

    const popover = renderPopper(
      {
        effect: Effect.LIGHT,
        name: transition,
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
      [title, content, renderArrow(showArrow)]
    )

    // when user uses popover directively, trigger will be null so that we only
    // render a popper window for displaying contents
    const _trigger = trigger
      ? renderTrigger(trigger, {
          ariaDescribedby: popperId,
          ref: 'triggerRef',
          tabindex,
          ...events,
        })
      : createCommentVNode('v-if', true)

    return h(Fragment, null, [
      this.trigger === 'click'
        ? withDirectives(_trigger, [[ClickOutside, this.hide]])
        : _trigger,
      h(
        Teleport as any,
        {
          disabled: !this.appendToBody,
          to: 'body',
        },
        [popover]
      ),
    ])
  },
})
</script>

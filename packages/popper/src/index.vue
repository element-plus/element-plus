<script lang="ts">
import {
  createVNode,
  defineComponent,
  Fragment,
  Teleport,
  onBeforeUnmount,
  onDeactivated,
  onActivated,
  renderSlot,
  toDisplayString,
  withDirectives,
} from 'vue'

import throwError from '@element-plus/utils/error'
import { renderBlock } from '@element-plus/utils/vnode'

import usePopper from './use-popper/index'
import defaultProps from './use-popper/defaults'

import { renderPopper, renderTrigger, renderArrow } from './renderers'
import { ClickOutside } from '@element-plus/directives'

const compName = 'ElPopper'
const UPDATE_VISIBLE_EVENT = 'update:visible'

const emits = [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave']

export default defineComponent({
  name: compName,
  props: defaultProps,
  emits,
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError(compName, 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance

    // return usePopper(props as IPopperOptions, ctx as SetupContext)
    const popperStates = usePopper(props, ctx)

    const forceDestroy = () => popperStates.doDestroy(true)
    onBeforeUnmount(forceDestroy)
    onActivated(popperStates.initializePopper)
    onDeactivated(forceDestroy)

    return popperStates
  },

  render() {
    const {
      $slots,
      appendToBody,
      class: kls,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      popperClass,
      popperId,
      pure,
      showArrow,
      transition,
      visibility,
    } = this

    const arrow = renderArrow(showArrow)
    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        pure,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow,
      ],
    )

    const _t = $slots.trigger?.()
    const isManual = this.isManualMode()

    const triggerProps = {
      ariaDescribedby: popperId,
      class: kls,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    return renderBlock(Fragment, null, [
      trigger,
      appendToBody
        ? createVNode(
          Teleport as any, // Vue did not support createVNode for Teleport
          {
            to: 'body',
            key: 0,
          },
          [
            popper,
          ],
        )
        : renderBlock(Fragment, { key: 1 }, [popper]),
    ])
  },
})
</script>

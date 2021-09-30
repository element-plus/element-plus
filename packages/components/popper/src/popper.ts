import {
  defineComponent,
  Fragment,
  Teleport,
  onBeforeUnmount,
  onDeactivated,
  onActivated,
  onMounted,
  renderSlot,
  toDisplayString,
  withDirectives,
  h,
} from 'vue'
import { buildProps, definePropType, mutable } from '@element-plus/utils/props'
import { ClickOutside } from '@element-plus/directives'
import { throwError } from '@element-plus/utils/error'

import usePopper from './use-popper/index'
import { renderPopper, renderTrigger, renderArrow } from './renderers'

import type { ExtractPropTypes } from 'vue'
import type { Placement, PositioningStrategy, Options } from '@popperjs/core'

const triggers = ['click', 'hover', 'focus', 'manual'] as const
export type Trigger = typeof triggers[number]

export const popperProps = buildProps({
  // the arrow size is an equilateral triangle with 10px side length, the 3rd side length ~ 14.1px
  // adding a offset to the ceil of 4.1 should be 5 this resolves the problem of arrow overflowing out of popper.
  arrowOffset: {
    type: Number,
    default: 5,
  } as const,
  appendToBody: {
    type: Boolean,
    default: true,
  } as const,
  autoClose: {
    type: Number,
    default: 0,
  } as const,
  boundariesPadding: {
    type: Number,
    default: 0,
  } as const,
  content: {
    type: String,
    default: '',
  } as const,
  class: {
    type: String,
    default: '',
  } as const,
  style: {
    type: [Object, String],
    default: '',
  } as const,
  hideAfter: {
    type: Number,
    default: 200,
  } as const,
  cutoff: {
    type: Boolean,
    default: false,
  } as const,
  disabled: {
    type: Boolean,
    default: false,
  } as const,
  effect: {
    type: String,
    values: ['dark', 'light'],
    default: 'dark',
  } as const,
  enterable: {
    type: Boolean,
    default: true,
  } as const,
  manualMode: {
    type: Boolean,
    default: false,
  } as const,
  showAfter: {
    type: Number,
    default: 0,
  } as const,
  offset: {
    type: Number,
    default: 12,
  } as const,
  placement: {
    type: definePropType<Placement>(String),
    default: 'bottom',
  } as const,
  popperClass: {
    type: String,
    default: '',
  } as const,
  pure: {
    type: Boolean,
    default: false,
  } as const,
  // Once this option were given, the entire popper is under the users' control, top priority
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => mutable({} as const),
  },
  showArrow: {
    type: Boolean,
    default: true,
  } as const,
  strategy: {
    type: definePropType<PositioningStrategy>(String),
    default: 'fixed',
  } as const,
  transition: {
    type: String,
    default: 'el-fade-in-linear',
  } as const,
  trigger: {
    type: [String, Array],
    values: triggers,
    default: 'hover',
    validator: (values: unknown): values is Trigger[] =>
      Array.isArray(values) && values.every((val) => triggers.includes(val)),
  },
  visible: {
    type: definePropType<boolean | undefined>(Boolean),
    default: undefined,
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  } as const,
  gpuAcceleration: {
    type: Boolean,
    default: true,
  } as const,
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: () => mutable([] as const),
  },
} as const)
export type PopperProps = ExtractPropTypes<typeof popperProps>
export type PopperEffect = PopperProps['effect']

export const popperEmits = {
  'update:visible': (val: boolean) => typeof val === 'boolean',
  'after-enter': () => true,
  'after-leave': () => true,
  'before-enter': () => true,
  'before-leave': () => true,
}
export type PopperEmits = typeof popperEmits

const COMPONENT_NAME = 'ElPopper'
export default defineComponent({
  name: COMPONENT_NAME,

  props: popperProps,
  emits: popperEmits,

  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError(COMPONENT_NAME, 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance

    // return usePopper(props as IPopperOptions, ctx as SetupContext)
    const popperStates = usePopper(props, ctx)

    const forceDestroy = () => popperStates.doDestroy(true)
    onMounted(popperStates.initializePopper)
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
      style,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent,
    } = this

    const isManual = this.isManualMode()
    const arrow = renderArrow(showArrow)
    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow,
      ]
    )

    const _t = $slots.trigger?.()

    const triggerProps = {
      'aria-describedby': popperId,
      class: kls,
      style,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    return h(Fragment, null, [
      trigger,
      h(
        Teleport as any, // Vue did not support createVNode for Teleport
        {
          to: 'body',
          disabled: !appendToBody,
        },
        [popper]
      ),
    ])
  },
})

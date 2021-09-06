import { defineComponent, h, ref, cloneVNode } from 'vue'
import {
  default as ElPopper,
  popperProps,
} from '@element-plus/components/popper'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { throwError } from '@element-plus/utils/error'
import { getFirstValidNode } from '@element-plus/utils/vnode'
import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

const tooltipProps = {
  ...popperProps,
  manual: {
    type: Boolean,
    default: false,
  },
  modelValue: buildProp<boolean | undefined>({
    type: Boolean,
    default: undefined,
  }),
  // This API should be decaprecate since it's confusing with close-delay
  openDelay: {
    type: Number,
    default: 0,
  },
  visibleArrow: {
    type: Boolean,
    default: true,
  },
  tabindex: buildProp<string | number>({
    type: [String, Number],
    default: '0',
  }),
} as const
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

/**
 * ElTooltip
 * Tooltip is essentially an upper layer for Popper, due to popper has already implemented so many functionalities and Popper is essentially a component shared internally
 * Tooltip also does the API translation work for popper.
 * Tooltip shares the exact same API which v2 has, so that the user should be able to
 */
export default defineComponent({
  name: 'ElTooltip',

  props: tooltipProps,
  emits: [UPDATE_MODEL_EVENT],

  setup(props, { emit, slots, expose }) {
    // when manual mode is true, v-model must be passed down
    if (props.manual && typeof props.modelValue === undefined) {
      throwError(
        '[ElTooltip]',
        'You need to pass a v-model to el-tooltip when `manual` is true'
      )
    }

    const popper = ref()

    const onUpdateVisible = (val: boolean) => {
      emit(UPDATE_MODEL_EVENT, val)
    }

    const updatePopper = () => popper.value.update()

    expose({
      updatePopper,
    })

    return () => {
      const {
        content,
        manual,
        openDelay,
        showAfter,
        visibleArrow,
        modelValue,
        tabindex,
      } = props

      function throwErrorTip(): never {
        throwError('[ElTooltip]', 'you need to provide a valid default slot.')
      }

      return h(
        ElPopper,
        {
          ref: popper,
          ...Object.fromEntries(
            Object.entries(popperProps).map(([key]) => [key, props[key]])
          ),
          manualMode: manual,
          showAfter: openDelay || showAfter, // this is for mapping API due to we decided to rename the current openDelay API to showAfter for better readability,
          showArrow: visibleArrow,
          visible: modelValue,
          'onUpdate:visible': onUpdateVisible,
        },
        {
          default: () => slots.content?.() ?? content,
          trigger: () => {
            if (slots.default) {
              const firstVnode = getFirstValidNode(slots.default(), 1)
              if (!firstVnode) throwErrorTip()
              return cloneVNode(firstVnode, { tabindex }, true)
            }
            throwErrorTip()
          },
        }
      )
    }
  },
})

import { buildProps, definePropType, isNumber } from '@element-plus/utils'
import type { StyleValue, ExtractPropTypes } from 'vue'

export const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: '',
  },
  maxHeight: {
    type: [String, Number],
    default: '',
  },
  native: {
    type: Boolean,
    default: false,
  },
  wrapStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
  wrapClass: {
    type: [String, Array],
    default: '',
  },
  viewClass: {
    type: [String, Array],
    default: '',
  },
  viewStyle: {
    type: [String, Array, Object],
    default: '',
  },
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  tag: {
    type: String,
    default: 'div',
  },
  always: {
    type: Boolean,
    default: false,
  },
  minSize: {
    type: Number,
    default: 20,
  },
} as const)

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>

export const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft,
  }: {
    scrollTop: number
    scrollLeft: number
  }) => isNumber(scrollTop) && isNumber(scrollLeft),
}
export type ScrollbarEmits = typeof scrollbarEmits

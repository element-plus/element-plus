import { defineComponent } from 'vue'
import { buildProps } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const descriptionsItemProps = buildProps({
  label: {
    type: String,
    default: '',
  },
  span: {
    type: Number,
    default: 1,
  },
  width: {
    type: [String, Number],
    default: '',
  },
  minWidth: {
    type: [String, Number],
    default: '',
  },
  align: {
    type: String,
    default: 'left',
  },
  labelAlign: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
  labelClassName: {
    type: String,
    default: '',
  },
} as const)

export type DescriptionsItemProps = ExtractPropTypes<
  typeof descriptionsItemProps
>

export default defineComponent({
  name: 'ElDescriptionsItem',
  props: descriptionsItemProps,
})

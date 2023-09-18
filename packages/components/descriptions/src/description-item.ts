import { defineComponent } from 'vue'
import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, Slot, VNode } from 'vue'

const descriptionItemProps = buildProps({
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
})
const DescriptionItem = defineComponent({
  name: 'ElDescriptionsItem',
  props: descriptionItemProps,
})

export default DescriptionItem

type DescriptionItemProps = ExtractPropTypes<typeof descriptionItemProps>
export type DescriptionItemVNode = VNode & {
  children: { [name: string]: Slot } | null
  props: Partial<DescriptionItemProps> | null
}

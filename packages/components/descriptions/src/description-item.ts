import { defineComponent } from 'vue'

import type { SetupContext, VNode } from 'vue'

const DescriptionItem = defineComponent({
  name: 'ElDescriptionsItem',
  props: {
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
  },
})
export default DescriptionItem

export type DescriptionItemVNode = VNode & {
  children: SetupContext['slots']
  props: InstanceType<typeof DescriptionItem>['$props']
}

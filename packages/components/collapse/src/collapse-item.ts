import { buildProps, definePropType, generateId } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { CollapseActiveName } from './collapse'
import type CollapseItem from './collapse-item.vue'

export const collapseItemProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  name: {
    type: definePropType<CollapseActiveName>([String, Number]),
    default: () => generateId(),
  },
  disabled: Boolean,
} as const)
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

export type CollapseItemInstance = InstanceType<typeof CollapseItem>

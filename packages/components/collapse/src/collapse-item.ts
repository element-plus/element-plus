import { buildProps, definePropType } from '@element-plus/utils/props'
import { generateId } from '@element-plus/utils/util'
import type { ExtractPropTypes } from 'vue'

export const collapseItemProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  name: {
    type: definePropType<string | number>([String, Number]),
    default: () => {
      return generateId()
    },
  },
  disabled: Boolean,
} as const)

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { CollapseActiveName } from './collapse'

export const collapseItemProps = buildProps({
  /**
   * @description title of the panel
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description unique identification of the panel
   */
  name: {
    type: definePropType<CollapseActiveName>([String, Number]),
    default: undefined,
  },
  /**
   * @description disable the collapse item
   */
  disabled: Boolean,
} as const)
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

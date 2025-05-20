import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { ArrowRight } from '@element-plus/icons-vue'
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
   * @description icon of the collapse item
   */
  icon: {
    type: iconPropType,
    default: ArrowRight,
  },
  /**
   * @description disable the collapse item
   */
  disabled: Boolean,
} as const)
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

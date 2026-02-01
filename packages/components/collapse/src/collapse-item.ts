import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { ArrowRight } from '@element-plus/icons-vue'

import type { ExtractPublicPropTypes } from 'vue'
import type { IconPropType } from '@element-plus/utils'
import type { CollapseActiveName } from './collapse'

export interface CollapseItemProps {
  /**
   * @description title of the panel
   */
  title?: string
  /**
   * @description unique identification of the panel
   */
  name?: CollapseActiveName
  /**
   * @description icon of the collapse item
   */
  icon?: IconPropType
  /**
   * @description disable the collapse item
   */
  disabled?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `CollapseItemProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `CollapseItemProps` instead.
 */
export type CollapseItemPropsPublic = ExtractPublicPropTypes<
  typeof collapseItemProps
>

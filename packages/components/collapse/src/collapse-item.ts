import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { ArrowRight } from '@element-plus/icons-vue'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
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
   * @deprecated This prop is deprecated and will be removed in the next major version. Use `collapsible="disabled"` instead.
   */
  disabled: Boolean,
  /**
   * @description Specify whether the panel be collapsible or the trigger area of collapsible
   */
  collapsible: {
    type: definePropType<'icon' | 'header' | 'disabled'>([String]),
  },
} as const)
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
export type CollapseItemPropsPublic = __ExtractPublicPropTypes<
  typeof collapseItemProps
>

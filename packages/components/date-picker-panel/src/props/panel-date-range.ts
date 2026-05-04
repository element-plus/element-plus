import { buildProps } from '@element-plus/utils'
import { panelRangeSharedProps, panelSharedProps } from './shared'

import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps,
} as const)

export type PanelDateRangeProps = ExtractPropTypes<typeof panelDateRangeProps>
export type PanelDateRangePropsPublic = ExtractPublicPropTypes<
  typeof panelDateRangeProps
>

import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

type AutoResizeHandler = (event: { height: number; width: number }) => void

export const autoResizerProps = buildProps({
  disableWidth: Boolean,
  disableHeight: Boolean,
  onResize: {
    type: definePropType<AutoResizeHandler>(Function),
  },
} as const)

export type AutoResizerProps = ExtractPropTypes<typeof autoResizerProps>
export type AutoResizerPropsPublic = __ExtractPublicPropTypes<
  typeof autoResizerProps
>

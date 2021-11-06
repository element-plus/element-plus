import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export const markerProps = buildProps({
  mark: {
    type: definePropType<string | Record<string, unknown>>([String, Object]),
    default: undefined,
  },
} as const)

export type MakerProps = ExtractPropTypes<typeof markerProps>

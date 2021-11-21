import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'
import type marker from './marker.vue'

export const markerProps = buildProps({
  mark: {
    type: definePropType<string | Record<string, unknown>>([String, Object]),
  },
} as const)

export type MakerProps = ExtractPropTypes<typeof markerProps>

export type MarkerInstance = InstanceType<typeof marker>

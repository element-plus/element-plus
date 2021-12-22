import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes, StyleValue } from 'vue'

export const elTeleportProps = buildProps({
  container: {
    type: definePropType<string | HTMLElement>([String, Object]),
    default: 'body',
  },
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  zIndex: {
    type: String,
    default: '2000',
  },
})

export type ElTeleportProps = ExtractPropTypes<typeof elTeleportProps>

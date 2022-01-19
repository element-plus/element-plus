import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes, StyleValue } from 'vue'

export const elTeleportProps = buildProps({
  container: {
    type: definePropType<string>(String),
    default: 'body',
  },
  disabled: {
    type: Boolean,
    default: false,
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

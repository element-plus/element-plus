import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'
import type Teleport from './teleport.vue'

export const teleportProps = buildProps({
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
} as const)

export type TeleportProps = ExtractPropTypes<typeof teleportProps>
export type TeleportInstance = InstanceType<typeof Teleport>

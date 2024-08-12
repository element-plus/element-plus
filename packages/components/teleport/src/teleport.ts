import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Teleport from './teleport.vue'

export const teleportProps = buildProps({
  to: {
    type: definePropType<string | HTMLElement>([String, Object]),
    required: true,
  },
  disabled: Boolean,
} as const)

export type TeleportProps = ExtractPropTypes<typeof teleportProps>
export type TeleportInstance = InstanceType<typeof Teleport>

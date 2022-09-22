import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const avatarFallbackProps = buildProps({
  delayMs: Number,
} as const)

export type AvatarFallbackProps = ExtractPropTypes<typeof avatarFallbackProps>

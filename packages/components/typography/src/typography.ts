import { buildProps } from '@element-plus/utils'

import { useSizeProp } from '@element-plus/hooks'
import type { ExtractPropTypes } from 'vue'
import type Typography from './typography.vue'
export const typographyProps = buildProps({
  size: useSizeProp,
})
export type TypographyProps = ExtractPropTypes<typeof typographyProps>
export type TypographyInstance = InstanceType<typeof Typography>

import { buildProps } from '@element-plus/utils'

import { useSizeProp } from '@element-plus/hooks'
import { getDesignatedType } from './util'
import { baseProps } from './base'
import type { EditConfig, copyConfig } from './base'
import type Typography from './typography.vue'
import type { ExtractPropTypes, PropType } from 'vue'
export interface InternalBlockProps {
  editable?: boolean | EditConfig
  copyable?: boolean | copyConfig
}
export const typographyProps = buildProps({
  size: useSizeProp,
  ...getDesignatedType(baseProps(), ['editable', 'copyable']),
})

export type TypographyProps = ExtractPropTypes<typeof typographyProps>
export type TypographyInstance = InstanceType<typeof Typography>

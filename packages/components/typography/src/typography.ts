import { buildProps } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import { getDesignatedType } from './util'
import { baseProps } from './base'
import type { EditConfig, copyConfig } from './base'
import type { ExtractPropTypes, InjectionKey } from 'vue'

export interface InternalBlockProps {
  editable?: boolean | EditConfig
  copyable?: boolean | copyConfig
}
export const commonInjection = buildProps({
  color: String,
  font: String,
} as const)

export const typographyProps = buildProps({
  size: useSizeProp,
  ...commonInjection,
  ...getDesignatedType(baseProps(), ['editable', 'copyable']),
})
export type commonInjectionType = ExtractPropTypes<typeof commonInjection>

export type TypographyProps = ExtractPropTypes<typeof typographyProps>

export const typographyContextKey: InjectionKey<TypographyProps> = Symbol(
  'typographyContextKey'
)
export const paragraphContextKey: InjectionKey<commonInjectionType> = Symbol(
  'paragraphContextKey'
)

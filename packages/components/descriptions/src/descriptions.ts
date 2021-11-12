import { buildProps, definePropType } from '@element-plus/utils/props'
import { isValidComponentSize } from '@element-plus/utils/validators'
import type { ComponentSize } from '@element-plus/utils/types'
import type { ExtractPropTypes } from 'vue'

export const descriptionsProps = buildProps({
  border: {
    type: Boolean,
    default: false,
  },
  column: {
    type: Number,
    default: 3,
  },
  direction: {
    type: definePropType<'horizontal' | 'vertical'>(String),
    default: 'horizontal',
  },
  size: {
    type: definePropType<ComponentSize>(String),
    validator: isValidComponentSize,
  },
  title: {
    type: String,
    default: '',
  },
  extra: {
    type: String,
    default: '',
  },
} as const)

export type DescriptionsProps = ExtractPropTypes<typeof descriptionsProps>

export interface IDescriptionsItemInject {
  label: string
  span: number
  width: string | number
  minWidth: string | number
  align: string
  labelAlign: string
  className: string
  labelClassName: string
}

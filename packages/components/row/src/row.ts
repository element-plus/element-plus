import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Row from './row.vue'

export const rowProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String,
    values: [
      'start',
      'center',
      'end',
      'space-around',
      'space-between',
      'space-evenly',
    ],
    default: 'start',
  },
  align: {
    type: String,
    values: ['top', 'middle', 'bottom'],
    default: 'top',
  },
} as const)

export type RowProps = ExtractPropTypes<typeof rowProps>
export type RowInstance = InstanceType<typeof Row>

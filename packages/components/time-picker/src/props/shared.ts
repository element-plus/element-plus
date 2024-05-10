import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { Dayjs } from 'dayjs'

export type GetDisabledHours = (role: string, comparingDate?: Dayjs) => number[]
export type GetDisabledMinutes = (
  hour: number,
  role: string,
  comparingDate?: Dayjs
) => number[]
export type GetDisabledSeconds = (
  hour: number,
  minute: number,
  role: string,
  comparingDate?: Dayjs
) => number[]

export const disabledTimeListsProps = buildProps({
  /**
   * @description To specify the array of hours that cannot be selected
   */
  disabledHours: {
    type: definePropType<GetDisabledHours>(Function),
  },
  /**
   * @description To specify the array of minutes that cannot be selected
   */
  disabledMinutes: {
    type: definePropType<GetDisabledMinutes>(Function),
  },
  /**
   * @description To specify the array of seconds that cannot be selected
   */
  disabledSeconds: {
    type: definePropType<GetDisabledSeconds>(Function),
  },
} as const)

export type DisabledTimeListsProps = ExtractPropTypes<
  typeof disabledTimeListsProps
>

export const timePanelSharedProps = buildProps({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: undefined,
  },
  format: {
    type: String,
    default: '',
  },
} as const)

export type TimePanelSharedProps = ExtractPropTypes<typeof timePanelSharedProps>

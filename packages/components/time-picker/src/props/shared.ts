import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

import type {
  GetDisabledHours,
  GetDisabledMinutes,
  GetDisabledSeconds,
} from '../common/props'

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

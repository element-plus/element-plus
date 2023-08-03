import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isBoolean } from '@element-plus/utils'

export const selectEmits = {
  [UPDATE_MODEL_EVENT]: (value: any) => true,
  [CHANGE_EVENT]: (value: any) => true,
  'remove-tag': (tagValue: any) => true,
  clear: () => true,
  'visible-change': (visible: boolean) => isBoolean(visible),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type SelectEmits = typeof selectEmits

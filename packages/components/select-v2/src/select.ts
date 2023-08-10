import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isBoolean } from '@element-plus/utils'

export const selectV2Emits = {
  [UPDATE_MODEL_EVENT]: (value: any) => value || true,
  [CHANGE_EVENT]: (value: any) => value || true,
  'remove-tag': (tagValue: any) => tagValue || true,
  clear: () => true,
  'visible-change': (visible: boolean) => isBoolean(visible),
  focus: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
  blur: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
}

export type SelectV2Emits = typeof selectV2Emits

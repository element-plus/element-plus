import { isArray, isBoolean, isString } from '@element-plus/utils'

import type { FormItemProp } from './form-item'

export const formSectionEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
}
export type FormSectionEmits = typeof formSectionEmits

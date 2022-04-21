import { isNumber, isString } from '../types'
import { debugWarn } from '../error'

const SCOPE = 'utils/vue/style'

export function addUnit(
  value: string | number | undefined,
  defaultUnit = 'px'
) {
  if (!value) return ''
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
  debugWarn(SCOPE, 'binding value must be a string or number')
}

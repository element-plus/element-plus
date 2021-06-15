import { isArray } from '@vue/shared'
import type { Option, OptionGroup } from './select.types'

export const flattenOptions = (options: Array<Option | OptionGroup>) => {
  const flattened = []
  options.map(option => {
    if (isArray(option.options)) {
      flattened.push({
        label: option.label,
        isTitle: true,
        type: 'Group',
      })

      option.options.forEach((o: Option) => {
        flattened.push(o)
      })
      flattened.push({
        type: 'Group',
      })
    } else {
      flattened.push(option)
    }
  })

  return flattened
}

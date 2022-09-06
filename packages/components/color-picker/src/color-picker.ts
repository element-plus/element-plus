import { buildProps } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'

export const colorPickerProps = buildProps({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: useSizeProp,
  popperClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: undefined,
  },
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  predefine: Array,
  validateEvent: {
    type: Boolean,
    default: true,
  },
} as const)

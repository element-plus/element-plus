import { buildProps, isBoolean } from '@element-plus/utils'
import type CheckTag from './check-tag.vue'
import type { ExtractPropTypes } from 'vue'

export const checkTagProps = buildProps({
  checked: {
    type: Boolean,
    default: false,
  },
} as const)
export type CheckTagProps = ExtractPropTypes<typeof checkTagProps>

export const checkTagEmits = {
  'update:checked': (value: boolean) => isBoolean(value),
  change: (value: boolean) => isBoolean(value),
}
export type CheckTagEmits = typeof checkTagEmits

export type CheckTagInstance = InstanceType<typeof CheckTag>

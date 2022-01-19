import { isBool } from '@element-plus/utils/util'
import { buildProps } from '@element-plus/utils/props'
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
  'update:checked': (value: boolean) => isBool(value),
  change: (value: boolean) => isBool(value),
}
export type CheckTagEmits = typeof checkTagEmits

export type CheckTagInstance = InstanceType<typeof CheckTag>

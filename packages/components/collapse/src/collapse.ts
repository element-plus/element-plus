import { buildProps, definePropType } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/constants'
import type { ExtractPropTypes } from 'vue'
import type Collapse from './collapse.vue'

export type ModelValueType = string | number | Array<string | number>

export const emitChangeFn = (value: ModelValueType) =>
  typeof value === 'number' || typeof value === 'string' || Array.isArray(value)

export const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType<ModelValueType>([Array, String, Number]),
    default: () => [] as Array<string | number>,
  },
} as const)
export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
}
export type CollapseEmits = typeof collapseEmits

export type CollapseInstance = InstanceType<typeof Collapse>

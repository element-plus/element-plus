// import type { Ref } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { isString, isNumber, isArray } from '@element-plus/utils/util'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import type { Ref, ExtractPropTypes } from 'vue'

export interface CollapseProvider {
  activeNames: Ref
  handleItemClick: (name: string | number) => void
}

export const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType<string | number | Array<string | number>>([
      Array,
      String,
      Number,
    ]),
    default: () => [],
  },
} as const)

export type CollapseProps = ExtractPropTypes<typeof collapseProps>

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: (value: string | number | Array<string | number>) => {
    return isString(value) || isNumber(value) || isArray(value)
  },
  [CHANGE_EVENT]: (value: string | number | Array<string | number>) => {
    return isString(value) || isNumber(value) || isArray(value)
  },
}

export type CollapseEmits = typeof collapseEmits

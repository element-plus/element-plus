import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes, Component } from 'vue'

export const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({}),
  },
  disabled: Boolean,
  divided: Boolean,
  icon: {
    type: definePropType<string | Component>([String, Object]),
  },
} as const)

export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>

import {
  buildProps,
  definePropType,
  isArray,
  isEmpty,
  isString,
  isUndefined,
} from '@element-plus/utils'

import { useSizeProp } from '@element-plus/hooks'
import type { ExtractPropTypes } from 'vue'
import type { selectIconPropsIcons } from './types'
import type { PaginationProps } from '@element-plus/components/pagination'

export const selectIconProps = buildProps({
  icons: {
    type: definePropType<selectIconPropsIcons[]>(Array),
    default: [],
  },
  pagination: {
    type: definePropType<PaginationProps>(Object),
    default: () => ({
      currentPage: 1,
      pageSize: 50,
    }),
  },
  modelValue: {
    type: definePropType<string | string[] | null | undefined>([
      String,
      Number,
      Object,
      Array,
    ]),
    default: '',
  },
  filter: {
    type: definePropType<string>(String),
    default: '',
  },
  iconColor: {
    type: definePropType<string>(String),
    default: '#000000',
  },
  iconBackgroundColor: {
    type: definePropType<string>(String),
    default: '#ffffff',
  },
  backgroundColor: {
    type: definePropType<string>(String),
    default: '#ffffff',
  },
  selectedColor: {
    type: definePropType<string>(String),
    default: '#409eff',
  },
  iconBackgroundSize: useSizeProp,
  iconSize: {
    type: definePropType<number>(Number),
    default: 24,
  },
  multiple: {
    type: definePropType<boolean>(Boolean),
    default: false,
  },
  hiddenPagination: {
    type: definePropType<boolean>(Boolean),
    default: false,
  },
  useDefaultIcon: {
    type: definePropType<boolean>(Boolean),
    default: true,
  },
} as const)
export type SelectIconProps = ExtractPropTypes<typeof selectIconProps>

export const selectIconEmits = {
  'update:modelValue': (val: string | string[] | null | undefined) =>
    isString(val) || isArray(val) || isUndefined(val) || isEmpty(val),
}
export type IconSelectEmits = typeof selectIconEmits

import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Next from './next.vue'

export const paginationNextProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1,
  },
  pageCount: {
    type: Number,
    default: 50,
  },
  nextText: {
    type: String,
    default: '',
  },
})

export type PaginationNextProps = ExtractPropTypes<typeof paginationNextProps>

export type NextInstance = InstanceType<typeof Next>

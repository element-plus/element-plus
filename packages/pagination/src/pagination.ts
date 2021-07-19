import { ComputedRef } from 'vue'
import { AnyFunction } from '@element-plus/utils/types'

export interface IPagination {
  currentPage?: ComputedRef<number>
  pageCount?: ComputedRef<number>
  disabled?: ComputedRef<boolean>
  changeEvent?: AnyFunction<any>
  handleSizeChange?: AnyFunction<any>
}

export interface IPaginationProps {
  pageSize: number
  small: boolean
  total: number
  pageCount: number
  pagerCount: number
  currentPage: number
  layout: Record<string, string | undefined>
  pageSizes: Array<number>
  popperClass: string
  prevText: string
  nextText: string
  background: boolean
  disabled: boolean
  hideOnSinglePage: boolean
}

export interface IPaginationSetups {
  currentPage: number
  pageCount: number
  pagerCount: number
  disabled: boolean
  pageSizes: Array<number>
}

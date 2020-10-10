import { inject } from 'vue'
import { IPagination } from './pagination'

export const usePagination = () => {
  const pagination = inject<IPagination>('pagination', {})

  return {
    pagination,
    pageCount: pagination.pageCount,
    disabled: pagination.disabled,
    currentPage: pagination.currentPage,
  }
}

import { inject } from 'vue'
import { elPaginationKey } from './constants'

export const usePagination = () => inject(elPaginationKey, {})

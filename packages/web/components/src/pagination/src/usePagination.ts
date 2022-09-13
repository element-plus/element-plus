import { inject } from 'vue'
import { elPaginationKey } from '@element-plus/tokens'

export const usePagination = () => inject(elPaginationKey, {})

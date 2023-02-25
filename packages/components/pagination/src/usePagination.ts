import { inject } from 'vue'
import { elPaginationKey } from '@element-plus/components/tokens'

export const usePagination = () => inject(elPaginationKey, {})

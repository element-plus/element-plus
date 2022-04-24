import { inject } from 'vue'
import { loadingKey } from '@element-plus/tokens'
import type { ElLoadingService } from '@element-plus/components/loading'
export const useLoading = () =>
  inject<typeof ElLoadingService>(loadingKey) as typeof ElLoadingService

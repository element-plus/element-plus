import type { InjectionKey } from 'vue'
import type { ElLoadingService } from '@element-plus/components/loading'
export const loadingKey: InjectionKey<typeof ElLoadingService> =
  Symbol('Loading')

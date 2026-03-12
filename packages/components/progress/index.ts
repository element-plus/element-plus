import { withInstall } from '@element-plus/utils'
import Progress from './src/progress.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GProgress: SFCWithInstall<typeof Progress> = withInstall(Progress)
export default GProgress

export * from './src/progress'

import { withInstall } from '@element-plus/utils'
import Backtop from './src/backtop.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GBacktop: SFCWithInstall<typeof Backtop> = withInstall(Backtop)
export default GBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'

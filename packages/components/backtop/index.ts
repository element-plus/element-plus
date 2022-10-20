import { withInstall } from '@element-plus/utils'

import Backtop from './src/backtop.vue'

export const ElBacktop = withInstall(Backtop)
export default ElBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'

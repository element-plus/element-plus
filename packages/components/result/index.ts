import { withInstall } from '@element-plus/utils'
import Result from './src/result.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GResult: SFCWithInstall<typeof Result> = withInstall(Result)

export default GResult

export * from './src/result'

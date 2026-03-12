import { withInstall } from '@element-plus/utils'
import Input from './src/input.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default GInput

export * from './src/input'
export type { InputInstance } from './src/instance'

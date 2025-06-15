import { withInstall } from '@element-plus/utils'
import Input from './src/input.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElInput: SFCWithInstall<typeof Input> = withInstall(Input)
export default ElInput

export * from './src/input'
export type { InputInstance } from './src/instance'

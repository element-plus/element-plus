import { withInstall } from '@element-plus/utils'
import Teleport from './src/teleport.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default ElTeleport

export * from './src/teleport'

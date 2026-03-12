import { withInstall } from '@element-plus/utils'
import Teleport from './src/teleport.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default GTeleport

export * from './src/teleport'

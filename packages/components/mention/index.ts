import { withInstall } from '@element-plus/utils'
import Mention from './src/mention.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GMention: SFCWithInstall<typeof Mention> = withInstall(Mention)
export default GMention

export * from './src/mention'

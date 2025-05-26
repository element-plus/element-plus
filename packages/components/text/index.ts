import { withInstall } from '@element-plus/utils'

import Text from './src/text.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElText: SFCWithInstall<typeof Text> = withInstall(Text)
export default ElText

export * from './src/text'

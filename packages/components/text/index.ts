import { withInstall } from '@element-plus/utils'
import Text from './src/text.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GText: SFCWithInstall<typeof Text> = withInstall(Text)
export default GText

export * from './src/text'

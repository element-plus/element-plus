import { withInstall } from '@element-plus/utils'
import Tag from './src/tag.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTag: SFCWithInstall<typeof Tag> = withInstall(Tag)
export default GTag

export * from './src/tag'

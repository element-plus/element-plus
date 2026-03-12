import { withInstall } from '@element-plus/utils'
import Image from './src/image.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GImage: SFCWithInstall<typeof Image> = withInstall(Image)
export default GImage

export * from './src/image'

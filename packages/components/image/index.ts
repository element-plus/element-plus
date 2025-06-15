import { withInstall } from '@element-plus/utils'

import Image from './src/image.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElImage: SFCWithInstall<typeof Image> = withInstall(Image)
export default ElImage

export * from './src/image'

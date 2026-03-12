import { withInstall } from '@element-plus/utils'
import Upload from './src/upload.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GUpload: SFCWithInstall<typeof Upload> = withInstall(Upload)
export default GUpload

export * from './src/upload'
export * from './src/upload-content'
export * from './src/upload-list'
export * from './src/upload-dragger'
export * from './src/constants'

import { withInstall } from '@element-plus/utils'
import Upload from './src/upload.vue'

export const ElUpload = withInstall(Upload)
export default ElUpload

export * from './src/upload'
export * from './src/upload-content'
export * from './src/upload-list'
export * from './src/upload-dragger'

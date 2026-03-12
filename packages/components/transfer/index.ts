import { withInstall } from '@element-plus/utils'
import Transfer from './src/transfer.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GTransfer: SFCWithInstall<typeof Transfer> = withInstall(Transfer)
export default GTransfer

export * from './src/transfer'

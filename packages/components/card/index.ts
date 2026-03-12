import { withInstall } from '@element-plus/utils'
import Card from './src/card.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GCard: SFCWithInstall<typeof Card> = withInstall(Card)
export default GCard

export * from './src/card'
export type { CardInstance } from './src/instance'

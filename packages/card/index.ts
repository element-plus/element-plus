import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Card from './src/index.vue'

Card.install = (app: App): void => {
  app.component(Card.name, Card)
}

const _Card: SFCWithInstall<typeof Card> = Card

export default _Card

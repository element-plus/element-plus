import { App } from 'vue'
import Card from './src/index.vue'

Card.install = (app: App): void => {
  app.component(Card.name, Card)
}

export default Card

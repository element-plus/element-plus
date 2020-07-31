import { App } from 'vue'
import Card from './src/index.vue'
export default (app: App): void => {
  app.component(Card.name, Card)
}

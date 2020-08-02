import { App } from 'vue'
import Avatar from './src/index.vue'
export default (app: App): void => {
  app.component(Avatar.name, Avatar)
}

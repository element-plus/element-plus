import { App } from 'vue'
import Avatar from './src/index.vue'

Avatar.install = (app: App): void => {
  app.component(Avatar.name, Avatar)
}

export default Avatar

import { App } from 'vue'
import Timeline from './src/index.vue'

Timeline.install = (app: App): void => {
  app.component(Timeline.name, Timeline)
}

export default Timeline

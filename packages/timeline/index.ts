import { App } from 'vue'
import Timeline from './src/index.vue'
import TimelineItem from './src/item.vue'
export default (app: App): void => {
  app.component(Timeline.name, Timeline)
  app.component(TimelineItem.name, TimelineItem)
}

import { App } from 'vue'
import TimelineItem from '../timeline/src/item.vue'

TimelineItem.install = (app: App): void => {
  app.component(TimelineItem.name, TimelineItem)
}

export default TimelineItem

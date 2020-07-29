import { App } from 'vue'
import TimeLine from './src/index.vue'
import TimeLineItem from './src/item.vue'
export default (app: App): void => {
  app.component(TimeLine.name, TimeLine)
  app.component(TimeLineItem.name, TimeLineItem)
}

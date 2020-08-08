import type { App } from 'vue'
import ElButton from '@element-plus/button'
import ElBadge from '@element-plus/badge'
import ElCard from '@element-plus/card'
import ElTag from '@element-plus/tag'
import ElLayout from '@element-plus/layout'
import ElDivider from '@element-plus/divider'
import ElTimeLine from '@element-plus/time-line'
import ElCarousel from '@element-plus/carousel'
import ElCarouselItem from '@element-plus/carousel-item'

export {
  ElLayout,
  ElButton,
  ElBadge,
  ElCard,
  ElDivider,
  ElTag,
  ElTimeLine,
  ElCarousel,
  ElCarouselItem,
}

export default function install(app: App): void {
  ElButton(app)
  ElBadge(app)
  ElCard(app)
  ElTag(app)
  ElLayout(app)
  ElDivider(app)
  ElTimeLine(app)
  ElCarousel(app)
  ElCarouselItem(app)
}

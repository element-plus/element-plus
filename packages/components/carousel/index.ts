import { withInstall, withNoopInstall } from '@element-plus/utils'
import Carousel from './src/main.vue'
import CarouselItem from './src/item.vue'

export const ElCarousel = withInstall(Carousel, {
  CarouselItem,
})

export default ElCarousel

export const ElCarouselItem = withNoopInstall(CarouselItem)

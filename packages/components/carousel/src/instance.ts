import type Carousel from './carousel.vue'
import type CarouselItem from './carousel-item.vue'

export type CarouselInstance = InstanceType<typeof Carousel> & unknown
export type CarouselItemInstance = InstanceType<typeof CarouselItem> & unknown

import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type CarouselItem from './carousel-item.vue'

export const carouselItemProps = buildProps({
  name: { type: String, default: '' },
  label: {
    type: [String, Number],
    default: '',
  },
} as const)

export type CarouselItemProps = ExtractPropTypes<typeof carouselItemProps>

export type CarouselItemInstance = InstanceType<typeof CarouselItem>

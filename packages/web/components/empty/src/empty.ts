import type { ExtractPropTypes } from 'vue'
import type Empty from './empty.vue'

export const emptyProps = {
  image: {
    type: String,
    default: '',
  },
  imageSize: Number,
  description: {
    type: String,
    default: '',
  },
} as const
export type EmptyProps = ExtractPropTypes<typeof emptyProps>

export type EmptyInstance = InstanceType<typeof Empty>

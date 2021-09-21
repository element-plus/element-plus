import type { ExtractPropTypes } from 'vue'

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

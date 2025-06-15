import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { PosInfo } from './types'

export const maskProps = buildProps({
  /**
   * @description mask's zIndex
   */
  zIndex: {
    type: Number,
    default: 1001,
  },
  /**
   * @description whether to show the mask
   */
  visible: Boolean,
  /**
   * @description mask's fill
   */
  fill: {
    type: String,
    default: 'rgba(0,0,0,0.5)',
  },
  /***
   * @description mask's transparent space position
   */
  pos: {
    type: definePropType<PosInfo | null>(Object),
  },
  /**
   * @description whether the target element can be clickable, when using mask
   */
  targetAreaClickable: {
    type: Boolean,
    default: true,
  },
})

export type MaskProps = ExtractPropTypes<typeof maskProps>

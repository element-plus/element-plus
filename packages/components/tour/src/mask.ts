import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { PosInfo } from './types'

export interface MaskProps {
  /**
   * @description mask's zIndex
   */
  zIndex?: number
  /**
   * @description whether to show the mask
   */
  visible?: boolean
  /**
   * @description mask's fill
   */
  fill?: string
  /***
   * @description mask's transparent space position
   */
  pos?: PosInfo | null
  /**
   * @description whether the target element can be clickable, when using mask
   */
  targetAreaClickable?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `MaskProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `MaskProps` instead.
 */
export type MaskPropsPublic = ExtractPublicPropTypes<typeof maskProps>

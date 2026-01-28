import {
  buildProps,
  definePropType,
  isBoolean,
  isNumber,
} from '@element-plus/utils'
import { CHANGE_EVENT } from '@element-plus/constants'
import { teleportProps } from '@element-plus/components/teleport'

import type { CSSProperties, ExtractPublicPropTypes } from 'vue'
import type Affix from './affix.vue'

export interface AffixProps {
  /**
   * @description affix element zIndex value
   * */
  zIndex?: CSSProperties['z-index']
  /**
   * @description target container. (CSS selector)
   */
  target?: string
  /**
   * @description offset distance
   * */
  offset?: number
  /**
   * @description position of affix
   * */
  position?: 'top' | 'bottom'
  /**
   * @description whether affix element is teleported, if `true` it will be teleported to where `append-to` sets
   * */
  teleported?: boolean
  /**
   * @description which element the affix element appends to
   * */
  appendTo?: string | HTMLElement
}

/**
 * @deprecated Removed after 3.0.0, Use `AffixProps` instead.
 */
export const affixProps = buildProps({
  /**
   * @description affix element zIndex value
   * */
  zIndex: {
    type: definePropType<CSSProperties['z-index']>([Number, String]),
    default: 100,
  },
  /**
   * @description target container. (CSS selector)
   */
  target: {
    type: String,
    default: '',
  },
  /**
   * @description offset distance
   * */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description position of affix
   * */
  position: {
    type: String,
    values: ['top', 'bottom'],
    default: 'top',
  },
  /**
   * @description whether affix element is teleported, if `true` it will be teleported to where `append-to` sets
   * */
  teleported: Boolean,
  /**
   * @description which element the affix element appends to
   * */
  appendTo: {
    type: teleportProps.to.type,
    default: 'body',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `AffixProps` instead.
 */
export type AffixPropsPublic = ExtractPublicPropTypes<typeof affixProps>

export const affixEmits = {
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) =>
    isNumber(scrollTop) && isBoolean(fixed),
  [CHANGE_EVENT]: (fixed: boolean) => isBoolean(fixed),
}
export type AffixEmits = typeof affixEmits

export type AffixExpose = {
  update: () => void
  updateRoot: () => void
}

export type AffixInstance = InstanceType<typeof Affix> & AffixExpose

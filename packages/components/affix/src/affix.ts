import {
  buildProps,
  definePropType,
  isBoolean,
  isNumber,
} from '@element-plus/utils'
import { CHANGE_EVENT } from '@element-plus/constants'
import { teleportProps } from '@element-plus/components/teleport'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { ZIndexProperty } from 'csstype'
import type Affix from './affix.vue'

export const affixProps = buildProps({
  /**
   * @description affix element zIndex value
   * */
  zIndex: {
    type: definePropType<ZIndexProperty>([Number, String]),
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
  teleported: {
    type: Boolean,
    default: false,
  },
  /**
   * @description which element the affix element appends to
   * */
  appendTo: {
    type: teleportProps.to.type,
    default: 'body',
  },
} as const)
export type AffixProps = ExtractPropTypes<typeof affixProps>
export type AffixPropsPublic = __ExtractPublicPropTypes<typeof affixProps>

export const affixEmits = {
  scroll: ({ scrollTop, fixed }: { scrollTop: number; fixed: boolean }) =>
    isNumber(scrollTop) && isBoolean(fixed),
  [CHANGE_EVENT]: (fixed: boolean) => isBoolean(fixed),
}
export type AffixEmits = typeof affixEmits

export type AffixInstance = InstanceType<typeof Affix> & unknown

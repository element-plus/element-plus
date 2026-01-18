import { markRaw } from 'vue'
import { Star, StarFilled } from '@element-plus/icons-vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import {
  buildProps,
  definePropType,
  iconPropType,
  isNumber,
  mutable,
} from '@element-plus/utils'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'

import type { Component, ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type Rate from './rate.vue'

export interface RateProps {
  /**
   * @description binding value
   */
  modelValue?: number
  /**
   * @description native `id` attribute
   */
  id?: string
  /**
   * @description threshold value between low and medium level. The value itself will be included in low level
   */
  lowThreshold?: number
  /**
   * @description threshold value between medium and high level. The value itself will be included in high level
   */
  highThreshold?: number
  /**
   * @description max rating score
   */
  max?: number
  /**
   * @description colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color
   */
  colors?: string[] | Record<number, string>
  /**
   * @description color of unselected icons
   */
  voidColor?: string
  /**
   * @description color of unselected read-only icons
   */
  disabledVoidColor?: string
  /**
   * @description icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component
   */
  icons?: Array<string | Component> | Record<number, string | Component>
  /**
   * @description component of unselected icons
   */
  voidIcon?: string | Component
  /**
   * @description component of unselected read-only icons
   */
  disabledVoidIcon?: string | Component
  /**
   * @description whether Rate is read-only
   */
  disabled?: boolean
  /**
   * @description whether picking half start is allowed
   */
  allowHalf?: boolean
  /**
   * @description whether to display texts
   */
  showText?: boolean
  /**
   * @description whether to display current score. show-score and show-text cannot be true at the same time
   */
  showScore?: boolean
  /**
   * @description color of texts
   */
  textColor?: string
  /**
   * @description text array
   */
  texts?: string[]
  /**
   * @description score template
   */
  scoreTemplate?: string
  /**
   * @description size of Rate
   */
  size?: ComponentSize
  /**
   * @description whether value can be reset to `0`
   */
  clearable?: boolean
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `RateProps` instead.
 */
export const rateProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: Number,
    default: 0,
  },
  /**
   * @description native `id` attribute
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description threshold value between low and medium level. The value itself will be included in low level
   */
  lowThreshold: {
    type: Number,
    default: 2,
  },
  /**
   * @description threshold value between medium and high level. The value itself will be included in high level
   */
  highThreshold: {
    type: Number,
    default: 4,
  },
  /**
   * @description max rating score
   */
  max: {
    type: Number,
    default: 5,
  },
  /**
   * @description colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color
   */
  colors: {
    type: definePropType<string[] | Record<number, string>>([Array, Object]),
    default: () => mutable(['', '', ''] as const),
  },
  /**
   * @description color of unselected icons
   */
  voidColor: {
    type: String,
    default: '',
  },
  /**
   * @description color of unselected read-only icons
   */
  disabledVoidColor: {
    type: String,
    default: '',
  },
  /**
   * @description icon components. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component
   */
  icons: {
    type: definePropType<
      Array<string | Component> | Record<number, string | Component>
    >([Array, Object]),
    default: () =>
      [StarFilled, StarFilled, StarFilled] as [Component, Component, Component],
  },
  /**
   * @description component of unselected icons
   */
  voidIcon: {
    type: iconPropType,
    default: () => Star as Component,
  },
  /**
   * @description component of unselected read-only icons
   */
  disabledVoidIcon: {
    type: iconPropType,
    default: () => StarFilled as Component,
  },
  /**
   * @description whether Rate is read-only
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description whether picking half start is allowed
   */
  allowHalf: Boolean,
  /**
   * @description whether to display texts
   */
  showText: Boolean,
  /**
   * @description whether to display current score. show-score and show-text cannot be true at the same time
   */
  showScore: Boolean,
  /**
   * @description color of texts
   */
  textColor: {
    type: String,
    default: '',
  },
  /**
   * @description text array
   */
  texts: {
    type: definePropType<string[]>(Array),
    default: () =>
      mutable([
        'Extremely bad',
        'Disappointed',
        'Fair',
        'Satisfied',
        'Surprise',
      ] as const),
  },
  /**
   * @description score template
   */
  scoreTemplate: {
    type: String,
    default: '{value}',
  },
  /**
   * @description size of Rate
   */
  size: useSizeProp,
  /**
   * @description whether value can be reset to `0`
   */
  clearable: Boolean,
  ...useAriaProps(['ariaLabel']),
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `RateProps` instead.
 */
export type RatePropsPublic = ExtractPublicPropTypes<typeof rateProps>

/**
 * @description default values for RateProps
 */
export const ratePropsDefaults = {
  modelValue: 0,
  lowThreshold: 2,
  highThreshold: 4,
  max: 5,
  colors: () => ['', '', ''],
  voidColor: '',
  disabledVoidColor: '',
  icons: () => [markRaw(StarFilled), markRaw(StarFilled), markRaw(StarFilled)],
  voidIcon: markRaw(Star),
  disabledVoidIcon: markRaw(StarFilled),
  texts: () => [
    'Extremely bad',
    'Disappointed',
    'Fair',
    'Satisfied',
    'Surprise',
  ],
  scoreTemplate: '{value}',
} as const

export const rateEmits = {
  [CHANGE_EVENT]: (value: number) => isNumber(value),
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value),
}
export type RateEmits = typeof rateEmits

export type RateInstance = InstanceType<typeof Rate> & unknown

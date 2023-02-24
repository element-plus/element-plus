import isPropValid from '@emotion/is-prop-valid'
import { isString } from '@element-plus/utils'

import type { Component } from 'vue'
import type {
  PrivateStyledComponent,
  StyledComponentType,
  StyledOptions,
} from './types'

export const composeShouldForwardProps = (
  tag: Component,
  options: StyledOptions | undefined,
  isReal: boolean
) => {
  let shouldForwardProp
  if (options) {
    const optionsShouldForwardProp = options.shouldForwardProp
    shouldForwardProp =
      (tag as PrivateStyledComponent).__emotion_forwardProp &&
      optionsShouldForwardProp
        ? (propName: string) =>
            (tag as PrivateStyledComponent).__emotion_forwardProp(propName) &&
            optionsShouldForwardProp(propName)
        : optionsShouldForwardProp
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = (tag as PrivateStyledComponent).__emotion_forwardProp
  }

  return shouldForwardProp
}

const testOmitPropsOnStringTag = isPropValid
const testOmitPropsOnComponent = (key: string) => key !== 'theme'

export const getDefaultShouldForwardProp = (tag: StyledComponentType) =>
  typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96
    ? testOmitPropsOnStringTag
    : testOmitPropsOnComponent

export const getComponentName = (primitive: string | Component | undefined) => {
  return isString(primitive)
    ? primitive
    : (primitive as Component)?.name || 'Component'
}

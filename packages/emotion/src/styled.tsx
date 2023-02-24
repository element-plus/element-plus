import { isUndefined } from '@element-plus/utils'
import {
  composeShouldForwardProps,
  getComponentName,
  getDefaultShouldForwardProp,
} from './utils'
import { generateComponent } from './component'
import {
  ILLEGAL_ESCAPE_SEQUENCE_ERROR,
  UNDEFINED_TAG_ERROR,
  __DEV__,
} from './constants'

import type { Component } from 'vue'
import type {
  Interpolations,
  PrivateStyledComponent,
  StyledOptions,
} from './types'

const createStyled = (tag: Component | string, options: StyledOptions = {}) => {
  if (__DEV__) {
    if (tag === undefined) {
      throw new Error(UNDEFINED_TAG_ERROR)
    }
  }

  const identifierName = options.label
  const targetClassName = options.target

  const isReal = (tag as PrivateStyledComponent).__emotion_real === tag
  const baseTag =
    (isReal && (tag as PrivateStyledComponent).__emotion_base) || tag

  const shouldForwardProp = composeShouldForwardProps(
    tag as Component,
    options,
    isReal
  )
  const defaultShouldForwardProp =
    shouldForwardProp || getDefaultShouldForwardProp(baseTag)
  const shouldUseAs = !defaultShouldForwardProp('as')

  return function (...args: Interpolations) {
    const styles =
      isReal && (tag as PrivateStyledComponent).__emotion_styles !== undefined
        ? (tag as PrivateStyledComponent).__emotion_styles.slice(0)
        : []

    if (!isUndefined(identifierName)) {
      styles.push(`label:${identifierName};`)
    }

    if (args[0] === null || isUndefined(args[0].raw)) {
      styles.push(...args)
    } else {
      if (__DEV__ && isUndefined(args[0][0])) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
      }

      styles.push(args[0][0])
      const len = args.length
      for (let i = 1; i < len; i++) {
        if (__DEV__ && isUndefined(args[0][i])) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
        }

        styles.push(args[i], args[0][i])
      }
    }

    const Styled = generateComponent({
      name: isUndefined(identifierName)
        ? `Styled${getComponentName(baseTag)}`
        : identifierName,
      shouldUseAs,
      getFinalShouldForwardProp: (tag) =>
        shouldUseAs && shouldForwardProp === undefined
          ? getDefaultShouldForwardProp(tag)
          : defaultShouldForwardProp,
      targetClassName,
      styles,
      baseTag,
    })

    Styled.__emotion_real = Styled
    Styled.__emotion_base = baseTag
    Styled.__emotion_styles = styles

    Styled.withComponent = (nextTag: Component) => {
      return createStyled(nextTag)(...styles)
    }

    return Styled
  }
}

export const styled = createStyled

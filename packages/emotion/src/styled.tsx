import { defineComponent, inject, ref } from 'vue'
import clsx from 'clsx'
import { getRegisteredStyles, insertStyles } from '@emotion/utils'
import { serializeStyles } from '@emotion/serialize'
import createCache from '@emotion/cache'
import { composeShouldForwardProps, getDefaultShouldForwardProp } from './utils'

import type { Component } from 'vue'
import type {
  Interpolations,
  PrivateStyledComponent,
  StyledOptions,
} from './types'

const localCache = createCache({ key: 'css' })

const ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`

const createStyled = (tag: Component, options: StyledOptions = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error(
        'You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.'
      )
    }
  }

  const identifierName = options.label
  const targetClassName = options.target

  const isReal = (tag as PrivateStyledComponent).__emotion_real === tag
  const baseTag =
    (isReal && (tag as PrivateStyledComponent).__emotion_base) || tag

  const shouldForwardProp = composeShouldForwardProps(tag, options, isReal)
  const defaultShouldForwardProp =
    shouldForwardProp || getDefaultShouldForwardProp(baseTag)
  const shouldUseAs = !defaultShouldForwardProp('as')

  return function (...args: Interpolations) {
    const styles =
      isReal && (tag as PrivateStyledComponent).__emotion_styles !== undefined
        ? (tag as PrivateStyledComponent).__emotion_styles.slice(0)
        : []

    if (identifierName !== undefined) {
      styles.push(`label:${identifierName};`)
    }

    if (args[0] === null || args[0].raw === undefined) {
      styles.push(...args)
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
      }

      styles.push(args[0][0])
      const len = args.length
      let i = 1
      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR)
        }

        styles.push(args[i], args[0][i])
      }
    }

    const Styled = defineComponent({
      name:
        identifierName === undefined
          ? `Styled${
              typeof baseTag === 'string'
                ? baseTag
                : baseTag.name || 'Component'
            }`
          : identifierName,
      props: {
        forwardRef: {
          type: Function,
          default: undefined,
        },
      },

      setup(props, { attrs, slots }) {
        const theme = inject('element-plus-theme', undefined)
        const cache = inject('element-plus-emotion-cache', localCache)
        const componentRef = ref()

        const refSetter = props.forwardRef || componentRef

        return () => {
          const { as, theme: propsTheme } = attrs || {}
          const FinalTag = as || baseTag

          const classInterpolations: string[] = []
          const mergedProps = {
            ...attrs,
            theme: propsTheme || theme,
          }

          let className = ''
          if (attrs.class) {
            className = getRegisteredStyles(
              cache.registered,
              classInterpolations,
              clsx(attrs.class)
            )
          }

          const serialized = serializeStyles(
            styles.concat(classInterpolations),
            cache.registered,
            mergedProps
          )

          insertStyles(cache, serialized, typeof FinalTag === 'string')

          className += `${cache.key}-${serialized.name}`

          if (targetClassName !== undefined) {
            className += ` ${targetClassName}`
          }

          const finalShouldForwardProp =
            shouldUseAs && shouldForwardProp === undefined
              ? getDefaultShouldForwardProp(FinalTag)
              : defaultShouldForwardProp

          const newProps: Record<string, any> = {}

          for (const key in attrs) {
            if (shouldUseAs && key === 'as') continue

            if (finalShouldForwardProp(key)) {
              newProps[key] = attrs[key]
            }
          }

          newProps.class = className
          newProps.ref = refSetter
          return <FinalTag {...newProps}>{slots.default?.()}</FinalTag>
        }
      },
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

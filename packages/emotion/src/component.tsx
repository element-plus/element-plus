import { defineComponent, inject, ref } from 'vue'
import clsx from 'clsx'
import { getRegisteredStyles, insertStyles } from '@emotion/utils'
import { serializeStyles } from '@emotion/serialize'
import createCache from '@emotion/cache'
import { isString, isUndefined } from '@element-plus/utils'

const localCache = createCache({ key: 'css' })

interface GenerateComponentOptions {
  name: string
  baseTag: string
  shouldUseAs: boolean
  getFinalShouldForwardProp: (tag: string) => (key: string) => boolean
  styles: any[]
  targetClassName: string | undefined
}

export const generateComponent = ({
  name,
  baseTag,
  shouldUseAs,
  getFinalShouldForwardProp,
  styles,
  targetClassName,
}: GenerateComponentOptions) => {
  return defineComponent({
    name,
    props: {
      forwardRef: {
        type: Function,
        default: undefined,
      },
    },

    setup(props, { attrs, slots, expose }) {
      const theme = inject('element-plus-theme', undefined)
      const cache = inject('element-plus-emotion-cache', localCache)
      // internal ref for the actual DOM element,
      // can be accessed via `ref.unwrappedEl`
      const componentRef = ref()

      const refSetter = (el: any) => {
        props.forwardRef?.(el)
        componentRef.value = el
      }

      expose({
        /**
         * @description the actual DOM element
         */
        unwrappedEl: componentRef,
      })

      return () => {
        const { as, theme: propsTheme } = attrs || {}
        const FinalTag = (as || baseTag) as string
        const finalShouldForwardProp = getFinalShouldForwardProp(FinalTag)

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
            clsx(attrs.class as string)
          )
        }

        const serialized = serializeStyles(
          styles.concat(classInterpolations),
          cache.registered,
          mergedProps
        )

        insertStyles(cache, serialized, isString(FinalTag))

        className += `${cache.key}-${serialized.name}`

        if (!isUndefined(targetClassName)) {
          className += ` ${targetClassName}`
        }

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
}

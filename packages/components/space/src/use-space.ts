import { computed, ref, watchEffect } from 'vue'
import { isArray, isNumber } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'

import type { SpaceProps } from './space'
import type { CSSProperties, StyleValue } from 'vue'

const SIZE_MAP = {
  small: 8,
  default: 12,
  large: 16,
} as const

export function useSpace(props: SpaceProps) {
  const ns = useNamespace('space')

  const classes = computed(() => [ns.b(), ns.m(props.direction), props.class])

  const horizontalSize = ref(0)
  const verticalSize = ref(0)

  const containerStyle = computed<StyleValue>(() => {
    const wrapKls: CSSProperties =
      props.wrap || props.fill ? { flexWrap: 'wrap' } : {}
    const alignment: CSSProperties = {
      alignItems: props.alignment,
    }
    const gap: CSSProperties = {
      rowGap: `${verticalSize.value}px`,
      columnGap: `${horizontalSize.value}px`,
    }
    return [wrapKls, alignment, gap, props.style]
  })

  const itemStyle = computed<StyleValue>(() => {
    return props.fill ? { flexGrow: 1, minWidth: `${props.fillRatio}%` } : {}
  })

  watchEffect(() => {
    const { size = 'small', wrap, direction: dir, fill } = props

    // when the specified size have been given
    if (isArray(size)) {
      const [h = 0, v = 0] = size
      horizontalSize.value = h
      verticalSize.value = v
    } else {
      let val: number
      if (isNumber(size)) {
        val = size
      } else {
        val = SIZE_MAP[size || 'small'] || SIZE_MAP.small
      }

      if ((wrap || fill) && dir === 'horizontal') {
        horizontalSize.value = verticalSize.value = val
      } else {
        if (dir === 'horizontal') {
          horizontalSize.value = val
          verticalSize.value = 0
        } else {
          verticalSize.value = val
          horizontalSize.value = 0
        }
      }
    }
  })

  return {
    classes,
    containerStyle,
    itemStyle,
  }
}

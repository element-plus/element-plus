import { ref, computed, watch, isVNode } from 'vue'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { isNumber, isArray, isString } from '@element-plus/utils/util'

import type { PropType, ExtractPropTypes, CSSProperties, VNodeChild } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

const SizeMap: Record<ComponentSize, number> = {
  mini: 4,
  small: 8,
  medium: 12,
  large: 16,
}

export const defaultProps = {
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },

  class: {
    type: [String, Object, Array],
    default: '',
  },

  style: {
    type: [String, Array, Object] as PropType<
      string | Array<any> | CSSProperties
    >,
  },

  alignment: {
    type: String as PropType<''>,
    default: 'center',
  },

  prefixCls: {
    type: String,
  },

  spacer: {
    type: [Object, String, Number] as PropType<VNodeChild>,
    default: null,
    validator: (val: unknown) => {
      return isVNode(val) || isNumber(val) || isString(val)
    },
  },

  wrap: {
    type: Boolean,
    default: false,
  },

  fill: {
    type: Boolean,
    default: false,
  },

  fillRatio: {
    type: Number,
    default: 100,
  },

  size: {
    type: [String, Array, Number] as PropType<
      ComponentSize | [number, number] | number
    >,
    validator: (val: unknown) => {
      return (
        isValidComponentSize(val as string) || isNumber(val) || isArray(val)
      )
    },
  },
}

export function useSpace(props: ExtractPropTypes<typeof defaultProps>) {
  const classes = computed(() => [
    'el-space',
    `el-space--${props.direction}`,
    props.class,
  ])

  const horizontalSize = ref(0)
  const verticalSize = ref(0)

  watch(
    () => [props.size, props.wrap, props.direction, props.fill],
    ([size = 'small', wrap, dir, fill]) => {
      // when the specified size have been given
      if (isArray(size)) {
        const [h = 0, v = 0] = size
        horizontalSize.value = h
        verticalSize.value = v
      } else {
        let val: number
        if (isNumber(size)) {
          val = size as number
        } else {
          val = SizeMap[size as string] || SizeMap.small
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
    },
    { immediate: true }
  )

  const containerStyle = computed(() => {
    const wrapKls: CSSProperties =
      props.wrap || props.fill
        ? { flexWrap: 'wrap', marginBottom: `-${verticalSize.value}px` }
        : null
    const alignment: CSSProperties = {
      alignItems: props.alignment,
    }
    return [wrapKls, alignment, props.style] as Array<CSSProperties>
  })

  const itemStyle = computed(() => {
    const itemBaseStyle = {
      paddingBottom: `${verticalSize.value}px`,
      marginRight: `${horizontalSize.value}px`,
    }

    const fillStyle = props.fill
      ? { flexGrow: 1, minWidth: `${props.fillRatio}%` }
      : null

    return [itemBaseStyle, fillStyle] as Array<CSSProperties>
  })

  return {
    classes,
    containerStyle,
    itemStyle,
  }
}

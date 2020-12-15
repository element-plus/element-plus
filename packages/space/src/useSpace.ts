import { ref, computed } from 'vue'

import type { PropType, ExtractPropTypes, CSSProperties } from 'vue'

export const defaultProps = {
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    value: 'horizontal',
  },

  class: {
    type: String,
  },

  style: {
    type: [String, Array, Object] as PropType<string | Array<any> | CSSProperties >,
  },

  alignment: {
    type: String as PropType<''>,
  },

  prefixCls: {
    type: String,
  },

}

export function useSpace(props: ExtractPropTypes<typeof defaultProps>) {

  const classes = computed(() => ['el-space',
    `el-space-${props.direction}`,
    props.class])

  return {
    classes,
  }
}

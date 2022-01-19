import { computed } from 'vue'
import { NOOP } from '@vue/shared'
import { ExpandTrigger } from './node'

import type { PropType } from 'vue'
import type {
  CascaderValue,
  CascaderOption,
  CascaderConfig,
  CascaderProps,
} from './node'

export const CommonProps = {
  modelValue: [Number, String, Array] as PropType<CascaderValue>,
  options: {
    type: Array as PropType<CascaderOption[]>,
    default: () => [] as CascaderOption[],
  },
  props: {
    type: Object as PropType<CascaderProps>,
    default: () => ({} as CascaderProps),
  },
}

export const DefaultProps: CascaderConfig = {
  expandTrigger: ExpandTrigger.CLICK,
  multiple: false,
  checkStrictly: false, // whether all nodes can be selected
  emitPath: true, // wether to emit an array of all levels value in which node is located
  lazy: false,
  lazyLoad: NOOP,
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disabled: 'disabled',
  hoverThreshold: 500,
}

export const useCascaderConfig = (props: { props: CascaderProps }) => {
  return computed(() => ({
    ...DefaultProps,
    ...props.props,
  }))
}

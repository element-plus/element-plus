import { computed } from 'vue'
import { NOOP } from '@vue/shared'
import { buildProps, definePropType } from '@element-plus/utils'
import type {
  CascaderConfig,
  CascaderOption,
  CascaderProps,
  CascaderValue,
} from './node'

export const CommonProps = buildProps({
  modelValue: {
    type: definePropType<CascaderValue>([Number, String, Array]),
  },
  options: {
    type: definePropType<CascaderOption[]>(Array),
    default: () => [] as CascaderOption[],
  },
  props: {
    type: definePropType<CascaderProps>(Object),
    default: () => ({} as CascaderProps),
  },
} as const)

export const DefaultProps: CascaderConfig = {
  expandTrigger: 'click',
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

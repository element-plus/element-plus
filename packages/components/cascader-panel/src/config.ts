import { computed } from 'vue'
import { NOOP, buildProps, definePropType } from '@element-plus/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { PropType } from 'vue'
import type {
  CascaderConfig,
  CascaderNodePathValue,
  CascaderOption,
  CascaderProps,
  CascaderValue,
  RenderLabel,
} from './types'

export interface CascaderCommonProps {
  /**
   * @description specify which key of node object is used as the node's value
   */
  modelValue?: CascaderValue | null
  /**
   * @description data of the options, the key of `value` and `label` can be customize by `CascaderProps`.
   */
  options?: CascaderOption[]
  /**
   * @description configuration options, see the following `CascaderProps` table.
   */
  props?: CascaderProps
}

export const CommonProps = buildProps({
  /**
   * @description specify which key of node object is used as the node's value
   */
  modelValue: {
    type: definePropType<CascaderValue | null>([Number, String, Array, Object]),
  },
  /**
   * @description data of the options, the key of `value` and `label` can be customize by `CascaderProps`.
   */
  options: {
    type: definePropType<CascaderOption[]>(Array),
    default: () => [] as CascaderOption[],
  },
  /**
   * @description configuration options, see the following `CascaderProps` table.
   */
  props: {
    type: definePropType<CascaderProps>(Object),
    default: () => ({}) as CascaderProps,
  },
} as const)

export interface CascaderPanelProps extends CascaderCommonProps {
  border?: boolean
  renderLabel?: RenderLabel
  /**
   * @description whether to enable virtual scrolling
   */
  virtualScroll?: boolean
  /**
   * @description node height for virtual scrolling
   */
  itemSize?: number
  /**
   * @description menu height for virtual scrolling
   */
  height?: number
}

export const DefaultProps: CascaderConfig = {
  /**
   * @description trigger mode of expanding options
   */
  expandTrigger: 'click',
  /**
   * @description whether multiple selection is enabled
   */
  multiple: false,
  /**
   * @description whether checked state of a node not affects its parent and child nodes
   */
  checkStrictly: false, // whether all nodes can be selected
  /**
   * @description when checked nodes change, whether to emit an array of node's path, if false, only emit the value of node.
   */
  emitPath: true, // whether to emit an array of all levels value in which node is located
  /**
   * @description whether to dynamic load child nodes, use with `lazyload` attribute
   */
  lazy: false,
  /**
   * @description method for loading child nodes data, only works when `lazy` is true
   */
  lazyLoad: NOOP,
  /**
   * @description specify which key of node object is used as the node's value
   */
  value: 'value',
  /**
   * @description specify which key of node object is used as the node's label
   */
  label: 'label',
  /**
   * @description specify which key of node object is used as the node's children
   */
  children: 'children',
  /**
   * @description specify which key of node object is used as the node's leaf
   */
  leaf: 'leaf',
  /**
   * @description specify which key of node object is used as the node's disabled
   */
  disabled: 'disabled',
  /**
   * @description hover threshold of expanding options
   */
  hoverThreshold: 500,
  /**
   * @description whether to check or uncheck node when clicking on the node
   */
  checkOnClickNode: false,
  /**
   * @description whether to check or uncheck node when clicking on leaf node (last children).
   */
  checkOnClickLeaf: true,
  /**
   * @description whether to show the radio or checkbox prefix
   */
  showPrefix: true,
}

/**
 * @deprecated Removed after 3.0.0, Use `CascaderPanelProps` instead.
 */
export const cascaderPanelProps = buildProps({
  ...CommonProps,
  border: {
    type: Boolean,
    default: true,
  },
  renderLabel: {
    type: Function as PropType<RenderLabel>,
  },
  virtualScroll: Boolean,
  itemSize: {
    type: Number,
    default: 34,
  },
  height: {
    type: Number,
    default: 204,
  },
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emitChangeFn = (value: CascaderValue | undefined | null) => true

export const cascaderPanelEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
  close: () => true,
  'expand-change': (value: CascaderNodePathValue) => value,
}

export const useCascaderConfig = (props: { props: CascaderProps }) => {
  return computed(() => ({
    ...DefaultProps,
    ...props.props,
  }))
}

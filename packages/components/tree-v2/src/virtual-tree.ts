import {
  buildProps,
  definePropType,
  iconPropType,
  isBoolean,
  mutable,
} from '@element-plus/utils'

import type { CheckboxValueType } from '@element-plus/components/checkbox'
import type { InjectionKey } from 'vue'
import type {
  CheckedInfo,
  FilterMethod,
  TreeV2Context,
  TreeV2Data,
  TreeV2Key,
  TreeV2Node,
  TreeV2NodeData,
  TreeV2OptionProps,
} from './types'

// constants
export const ROOT_TREE_INJECTION_KEY: InjectionKey<TreeV2Context> = Symbol()
const EMPTY_NODE = {
  key: -1,
  level: -1,
  data: {},
} as const

// enums
export enum TreeV2OptionsEnum {
  KEY = 'id',
  LABEL = 'label',
  CHILDREN = 'children',
  DISABLED = 'disabled',
  CLASS = '',
}

export const enum SetOperationEnum {
  ADD = 'add',
  DELETE = 'delete',
}

const itemSize = {
  type: Number,
  default: 26,
}

// props
export const treeProps = buildProps({
  data: {
    type: definePropType<TreeV2Data>(Array),
    default: () => mutable([] as const),
  },
  emptyText: {
    type: String,
  },
  height: {
    type: Number,
    default: 200,
  },
  props: {
    type: definePropType<TreeV2OptionProps>(Object),
    default: () =>
      mutable({
        children: TreeV2OptionsEnum.CHILDREN,
        label: TreeV2OptionsEnum.LABEL,
        disabled: TreeV2OptionsEnum.DISABLED,
        value: TreeV2OptionsEnum.KEY,
        class: TreeV2OptionsEnum.CLASS,
      } as const),
  },
  highlightCurrent: Boolean,
  showCheckbox: Boolean,
  defaultCheckedKeys: {
    type: definePropType<TreeV2Key[]>(Array),
    default: () => mutable([] as const),
  },
  // Whether checked state of a node not affects its father and
  // child nodes when show-checkbox is true
  checkStrictly: Boolean,
  defaultExpandedKeys: {
    type: definePropType<TreeV2Key[]>(Array),
    default: () => mutable([] as const),
  },
  indent: {
    type: Number,
    default: 16,
  },
  itemSize,
  icon: {
    type: iconPropType,
  },
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
  checkOnClickNode: Boolean,
  checkOnClickLeaf: {
    type: Boolean,
    default: true,
  },
  currentNodeKey: {
    type: definePropType<TreeV2Key>([String, Number]),
  },
  // TODO need to optimization
  accordion: Boolean,
  filterMethod: {
    type: definePropType<FilterMethod>(Function),
  },
  // Performance mode will increase memory usage, but scrolling will be smoother
  perfMode: {
    type: Boolean,
    default: true,
  },
  /**
   * @description always show scrollbar
   */
  scrollbarAlwaysOn: Boolean,
} as const)

export const treeNodeProps = buildProps({
  node: {
    type: definePropType<TreeV2Node>(Object),
    default: () => mutable(EMPTY_NODE),
  },
  expanded: Boolean,
  checked: Boolean,
  indeterminate: Boolean,
  showCheckbox: Boolean,
  disabled: Boolean,
  current: Boolean,
  hiddenExpandIcon: Boolean,
  itemSize,
} as const)

export const treeNodeContentProps = buildProps({
  node: {
    type: definePropType<TreeV2Node>(Object),
    required: true,
  },
} as const)

// emits
export const NODE_CLICK = 'node-click'
export const NODE_DROP = 'node-drop'
export const NODE_EXPAND = 'node-expand'
export const NODE_COLLAPSE = 'node-collapse'
export const CURRENT_CHANGE = 'current-change'
export const NODE_CHECK = 'check'
export const NODE_CHECK_CHANGE = 'check-change'
export const NODE_CONTEXTMENU = 'node-contextmenu'

export const treeEmits = {
  [NODE_CLICK]: (data: TreeV2NodeData, node: TreeV2Node, e: MouseEvent) =>
    data && node && e,
  [NODE_DROP]: (data: TreeV2NodeData, node: TreeV2Node, e: DragEvent) =>
    data && node && e,
  [NODE_EXPAND]: (data: TreeV2NodeData, node: TreeV2Node) => data && node,
  [NODE_COLLAPSE]: (data: TreeV2NodeData, node: TreeV2Node) => data && node,
  [CURRENT_CHANGE]: (data: TreeV2NodeData, node: TreeV2Node) => data && node,
  [NODE_CHECK]: (data: TreeV2NodeData, checkedInfo: CheckedInfo) =>
    data && checkedInfo,
  [NODE_CHECK_CHANGE]: (data: TreeV2NodeData, checked: boolean) =>
    data && isBoolean(checked),
  [NODE_CONTEXTMENU]: (evt: Event, data: TreeV2NodeData, node: TreeV2Node) =>
    evt && data && node,
}

export const treeNodeEmits = {
  click: (node: TreeV2Node, e: MouseEvent) => !!(node && e),
  drop: (node: TreeV2Node, e: DragEvent) => !!(node && e),
  toggle: (node: TreeV2Node) => !!node,
  check: (node: TreeV2Node, checked: CheckboxValueType) =>
    node && isBoolean(checked),
}

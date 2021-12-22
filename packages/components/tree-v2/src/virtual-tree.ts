import { buildProps, definePropType, mutable } from '@element-plus/utils/props'
import type { InjectionKey } from 'vue'
import type { TreeNodeData } from '../../tree/src/tree.type'
import type {
  TreeNode,
  TreeKey,
  TreeData,
  TreeOptionProps,
  FilterMethod,
  CheckedInfo,
  TreeContext,
} from './types'

// constants
export const ROOT_TREE_INJECTION_KEY: InjectionKey<TreeContext> = Symbol()
const EMPTY_NODE = {
  key: -1,
  level: -1,
  data: {},
} as const

// enums
export enum TreeOptionsEnum {
  KEY = 'id',
  LABEL = 'label',
  CHILDREN = 'children',
  DISABLED = 'disabled',
}

export const enum SetOperationEnum {
  ADD = 'add',
  DELETE = 'delete',
}

// props
export const treeProps = buildProps({
  data: {
    type: definePropType<TreeData>(Array),
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
    type: definePropType<TreeOptionProps>(Object),
    default: () =>
      mutable({
        children: TreeOptionsEnum.CHILDREN,
        label: TreeOptionsEnum.LABEL,
        disabled: TreeOptionsEnum.DISABLED,
        value: TreeOptionsEnum.KEY,
      } as const),
  },
  highlightCurrent: {
    type: Boolean,
    default: false,
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  defaultCheckedKeys: {
    type: definePropType<TreeKey[]>(Array),
    default: () => mutable([] as const),
  },
  // Whether checked state of a node not affects its father and
  // child nodes when show-checkbox is true
  checkStrictly: {
    type: Boolean,
    default: false,
  },
  defaultExpandedKeys: {
    type: definePropType<TreeKey[]>(Array),
    default: () => mutable([] as const),
  },
  indent: {
    type: Number,
    default: 16,
  },
  icon: {
    type: String,
  },
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
  checkOnClickNode: {
    type: Boolean,
    default: false,
  },
  currentNodeKey: {
    type: definePropType<TreeKey>([String, Number]),
  },
  // TODO need to optimization
  accordion: {
    type: Boolean,
    default: false,
  },
  filterMethod: {
    type: definePropType<FilterMethod>(Function),
  },
  // Performance mode will increase memory usage, but scrolling will be smoother
  perfMode: {
    type: Boolean,
    default: true,
  },
} as const)

export const treeNodeProps = buildProps({
  node: {
    type: definePropType<TreeNode>(Object),
    default: () => mutable(EMPTY_NODE),
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  current: {
    type: Boolean,
    default: false,
  },
  hiddenExpandIcon: {
    type: Boolean,
    default: false,
  },
} as const)

export const treeNodeContentProps = buildProps({
  node: {
    type: definePropType<TreeNode>(Object),
    required: true,
  },
} as const)

// emits
export const NODE_CLICK = 'node-click'
export const NODE_EXPAND = 'node-expand'
export const NODE_COLLAPSE = 'node-collapse'
export const CURRENT_CHANGE = 'current-change'
export const NODE_CHECK = 'check'
export const NODE_CHECK_CHANGE = 'check-change'
export const NODE_CONTEXTMENU = 'node-contextmenu'

export const treeEmits = {
  [NODE_CLICK]: (data: TreeNodeData, node: TreeNode) => data && node,
  [NODE_EXPAND]: (data: TreeNodeData, node: TreeNode) => data && node,
  [NODE_COLLAPSE]: (data: TreeNodeData, node: TreeNode) => data && node,
  [CURRENT_CHANGE]: (data: TreeNodeData, node: TreeNode) => data && node,
  [NODE_CHECK]: (data: TreeNodeData, checkedInfo: CheckedInfo) =>
    data && checkedInfo,
  [NODE_CHECK_CHANGE]: (data: TreeNodeData, checked: boolean) =>
    data && typeof checked === 'boolean',
  [NODE_CONTEXTMENU]: (event: Event, data: TreeNodeData, node: TreeNode) =>
    event && data && node,
}

export const treeNodeEmits = {
  click: (node: TreeNode) => !!node,
  toggle: (node: TreeNode) => !!node,
  check: (node: TreeNode, checked: boolean) =>
    node && typeof checked === 'boolean',
}

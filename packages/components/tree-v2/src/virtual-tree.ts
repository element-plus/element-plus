import { buildProp, definePropType } from '@element-plus/utils/props'
import type {
  TreeNode,
  TreeKey,
  TreeData,
  TreeOptionProps,
  FilterMethod,
} from './tree.type'

// constants
export const ROOT_TREE_INJECTION_KEY = 'RootTree'
const EMPTY_NODE = {
  key: -1,
  level: -1,
  data: {},
}

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
export const treeProps = {
  data: buildProp({
    type: definePropType<TreeData>(Array),
    default: () => [],
  } as const),
  emptyText: {
    type: String,
  },
  height: {
    type: Number,
    default: 200,
  },
  props: buildProp({
    type: definePropType<TreeOptionProps>(Object),
    default: () => ({
      children: TreeOptionsEnum.CHILDREN,
      label: TreeOptionsEnum.LABEL,
      disabled: TreeOptionsEnum.DISABLED,
      value: TreeOptionsEnum.KEY,
    }),
  } as const),
  highlightCurrent: Boolean,
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  defaultCheckedKeys: buildProp({
    type: definePropType<TreeKey[]>(Array),
    default: () => [],
  } as const),
  // Whether checked state of a node not affects its father and
  // child nodes when show-checkbox is true
  checkStrictly: {
    type: Boolean,
    default: false,
  },
  defaultExpandedKeys: buildProp({
    type: definePropType<TreeKey[]>(Array),
    default: () => [],
  } as const),
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
  currentNodeKey: buildProp({
    type: definePropType<TreeKey>([String, Number]),
  } as const),
  // TODO need to optimization
  accordion: {
    type: Boolean,
    default: false,
  },
  filterMethod: buildProp({
    type: definePropType<FilterMethod>(Function),
  } as const),
  // Performance mode will increase memory usage, but scrolling will be smoother
  perfMode: {
    type: Boolean,
    default: true,
  },
} as const

export const treeNodeProps = {
  node: buildProp({
    type: definePropType<TreeNode>(Object),
    default: () => EMPTY_NODE,
  } as const),
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
} as const

export const treeNodeContentProps = {
  node: buildProp({
    type: definePropType<TreeNode>(Object),
    required: true,
  } as const),
} as const

// emits
export const NODE_CLICK = 'node-click'
export const NODE_EXPAND = 'node-expand'
export const NODE_COLLAPSE = 'node-collapse'
export const CURRENT_CHANGE = 'current-change'
export const NODE_CHECK = 'check'
export const NODE_CHECK_CHANGE = 'check-change'
export const NODE_CONTEXTMENU = 'node-contextmenu'

export const TREE_EMITS = [
  NODE_CLICK,
  NODE_EXPAND,
  NODE_COLLAPSE,
  CURRENT_CHANGE,
  NODE_CHECK,
  NODE_CHECK_CHANGE,
  NODE_CONTEXTMENU,
]

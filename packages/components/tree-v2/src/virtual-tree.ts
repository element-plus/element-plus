import { buildProp, definePropType, mutable } from '@element-plus/utils/props'
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
export const treeProps = {
  data: buildProp({
    type: definePropType<TreeData>(Array),
    default: () => mutable([] as const),
  } as const),
  emptyText: buildProp({
    type: String,
  }),
  height: buildProp({
    type: Number,
    default: 200,
  }),
  props: buildProp({
    type: definePropType<TreeOptionProps>(Object),
    default: () =>
      mutable({
        children: TreeOptionsEnum.CHILDREN,
        label: TreeOptionsEnum.LABEL,
        disabled: TreeOptionsEnum.DISABLED,
        value: TreeOptionsEnum.KEY,
      } as const),
  } as const),
  highlightCurrent: buildProp({
    type: Boolean,
    default: false,
  }),
  showCheckbox: buildProp({
    type: Boolean,
    default: false,
  }),
  defaultCheckedKeys: buildProp({
    type: definePropType<TreeKey[]>(Array),
    default: () => mutable([] as const),
  } as const),
  // Whether checked state of a node not affects its father and
  // child nodes when show-checkbox is true
  checkStrictly: buildProp({
    type: Boolean,
    default: false,
  }),
  defaultExpandedKeys: buildProp({
    type: definePropType<TreeKey[]>(Array),
    default: () => mutable([] as const),
  } as const),
  indent: buildProp({
    type: Number,
    default: 16,
  }),
  icon: buildProp({
    type: String,
  }),
  expandOnClickNode: buildProp({
    type: Boolean,
    default: true,
  }),
  checkOnClickNode: buildProp({
    type: Boolean,
    default: false,
  }),
  currentNodeKey: buildProp({
    type: definePropType<TreeKey>([String, Number]),
  } as const),
  // TODO need to optimization
  accordion: buildProp({
    type: Boolean,
    default: false,
  }),
  filterMethod: buildProp({
    type: definePropType<FilterMethod>(Function),
  } as const),
  // Performance mode will increase memory usage, but scrolling will be smoother
  perfMode: buildProp({
    type: Boolean,
    default: true,
  }),
} as const

export const treeNodeProps = {
  node: buildProp({
    type: definePropType<TreeNode>(Object),
    default: () => mutable(EMPTY_NODE),
  } as const),
  expanded: buildProp({
    type: Boolean,
    default: false,
  }),
  checked: buildProp({
    type: Boolean,
    default: false,
  }),
  indeterminate: buildProp({
    type: Boolean,
    default: false,
  }),
  showCheckbox: buildProp({
    type: Boolean,
    default: false,
  }),
  disabled: buildProp({
    type: Boolean,
    default: false,
  }),
  current: buildProp({
    type: Boolean,
    default: false,
  }),
  hiddenExpandIcon: buildProp({
    type: Boolean,
    default: false,
  }),
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

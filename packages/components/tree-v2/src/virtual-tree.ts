import type { PropType } from 'vue'
import type {
  TreeNode,
  TreeKey,
  TreeData,
  TreeOptionProps,
  FilterMethod,
} from './tree.type'

// constants
export const ROOT_TREE_INJECTION_KEY = 'RootTree'

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
  data: {
    type: Array as PropType<TreeData>,
    default: () => [],
  },
  emptyText: {
    type: String,
  },
  height: {
    type: Number,
    default: 200,
  },
  props: {
    type: Object as PropType<TreeOptionProps>,
    default: () => ({
      children: TreeOptionsEnum.CHILDREN,
      label: TreeOptionsEnum.LABEL,
      disabled: TreeOptionsEnum.DISABLED,
      value: TreeOptionsEnum.KEY,
    }),
  },
  highlightCurrent: Boolean,
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  defaultCheckedKeys: {
    type: Array as PropType<TreeKey[]>,
    default: () => [],
  },
  // Whether checked state of a node not affects its father and
  // child nodes when show-checkbox is true
  checkStrictly: {
    type: Boolean,
    default: false,
  },
  defaultExpandedKeys: {
    type: Array as PropType<TreeKey[]>,
    default: () => [],
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
    type: [String, Number] as PropType<TreeKey>,
  },
  // TODO need to optimization
  accordion: {
    type: Boolean,
    default: false,
  },
  filterMethod: {
    type: Function as PropType<FilterMethod>,
  },
}

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    default: () => ({}),
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
}

export const treeNodeContentProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
}

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

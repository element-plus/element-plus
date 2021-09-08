import type { PropType } from 'vue'
import type { TreeNode, TreeKey, TreeOptionProps } from './tree.type'

export const treeProps = {
  data: {
    type: Array,
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
      children: 'children',
      label: 'label',
      disabled: 'disabled',
      value: 'id',
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
  iconClass: {
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
}

export const treeNodeContentProps = {
  node: {
    type: Object,
    required: true,
  },
}

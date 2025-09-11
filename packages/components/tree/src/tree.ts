import { definePropType, iconPropType } from '@element-plus/utils'

import type { PropType } from 'vue'
import type {
  AllowDragFunction,
  AllowDropFunction,
  RenderContentFunction,
  TreeComponentProps,
  TreeData,
} from './tree.type'

export const treeProps = {
  data: {
    type: definePropType<TreeData>(Array),
    default: () => [],
  },
  emptyText: {
    type: String,
  },
  renderAfterExpand: {
    type: Boolean,
    default: true,
  },
  nodeKey: String,
  checkStrictly: Boolean,
  defaultExpandAll: Boolean,
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
  checkOnClickNode: Boolean,
  checkOnClickLeaf: {
    type: Boolean,
    default: true,
  },
  checkDescendants: Boolean,
  autoExpandParent: {
    type: Boolean,
    default: true,
  },
  defaultCheckedKeys: Array as PropType<
    TreeComponentProps['defaultCheckedKeys']
  >,
  defaultExpandedKeys: Array as PropType<
    TreeComponentProps['defaultExpandedKeys']
  >,
  currentNodeKey: [String, Number] as PropType<string | number>,
  renderContent: {
    type: definePropType<RenderContentFunction>(Function),
  },
  showCheckbox: Boolean,
  draggable: Boolean,
  allowDrag: {
    type: definePropType<AllowDragFunction>(Function),
  },
  allowDrop: {
    type: definePropType<AllowDropFunction>(Function),
  },
  props: {
    type: Object as PropType<TreeComponentProps['props']>,
    default: () => ({
      children: 'children',
      label: 'label',
      disabled: 'disabled',
    }),
  },
  lazy: Boolean,
  highlightCurrent: Boolean,
  load: Function as PropType<TreeComponentProps['load']>,
  filterNodeMethod: Function as PropType<
    TreeComponentProps['filterNodeMethod']
  >,
  accordion: Boolean,
  indent: {
    type: Number,
    default: 18,
  },
  icon: {
    type: iconPropType,
  },
} as const

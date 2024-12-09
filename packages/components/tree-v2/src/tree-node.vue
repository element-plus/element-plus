<template>
  <div
    ref="node$"
    :class="[
      ns.b('node'),
      ns.is('expanded', expanded),
      ns.is('current', current),
      ns.is('focusable', !disabled),
      ns.is('checked', !disabled && checked),
      getNodeClass(node),
    ]"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="disabled"
    :aria-checked="checked"
    :data-key="node?.key"
    @click.stop="handleClick"
    @contextmenu="handleContextMenu"
    @dragover.prevent
    @dragenter.prevent
    @drop.stop="handleDrop"
  >
    <div
      :class="ns.be('node', 'content')"
      :style="{
        paddingLeft: `${(node.level - 1) * indent}px`,
        height: itemSize + 'px',
      }"
    >
      <el-icon
        v-if="icon"
        :class="[
          ns.is('leaf', !!node?.isLeaf),
          ns.is('hidden', hiddenExpandIcon),
          {
            expanded: !node?.isLeaf && expanded,
          },
          ns.be('node', 'expand-icon'),
        ]"
        @click.stop="handleExpandIconClick"
      >
        <component :is="icon" />
      </el-icon>
      <el-checkbox
        v-if="showCheckbox"
        :model-value="checked"
        :indeterminate="indeterminate"
        :disabled="disabled"
        @change="handleCheckChange"
        @click.stop
      />
      <el-node-content :node="node" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { CaretRight } from '@element-plus/icons-vue'
import ElCheckbox from '@element-plus/components/checkbox'
import { useNamespace } from '@element-plus/hooks'
import { isFunction, isString } from '@element-plus/utils'
import ElNodeContent from './tree-node-content'
import {
  NODE_CONTEXTMENU,
  ROOT_TREE_INJECTION_KEY,
  treeNodeEmits,
  treeNodeProps,
} from './virtual-tree'
import type { CheckboxValueType } from '@element-plus/components/checkbox'
import type { TreeNode } from './types'

defineOptions({
  name: 'ElTreeNode',
})

const props = defineProps(treeNodeProps)
const emit = defineEmits(treeNodeEmits)

const tree = inject(ROOT_TREE_INJECTION_KEY)
const ns = useNamespace('tree')

const indent = computed(() => tree?.props.indent ?? 16)
const icon = computed(() => tree?.props.icon ?? CaretRight)

const getNodeClass = (node: TreeNode) => {
  const nodeClassFunc = tree?.props.props.class
  if (!nodeClassFunc) return {}

  let className
  if (isFunction(nodeClassFunc)) {
    const { data } = node
    className = nodeClassFunc(data, node)
  } else {
    className = nodeClassFunc
  }

  return isString(className) ? { [className]: true } : className
}

const handleClick = (e: MouseEvent) => {
  emit('click', props.node, e)
}
const handleDrop = (e: DragEvent) => {
  emit('drop', props.node, e)
}
const handleExpandIconClick = () => {
  emit('toggle', props.node)
}
const handleCheckChange = (value: CheckboxValueType) => {
  emit('check', props.node, value)
}

const handleContextMenu = (event: Event) => {
  if (tree?.instance?.vnode?.props?.['onNodeContextmenu']) {
    event.stopPropagation()
    event.preventDefault()
  }
  tree?.ctx.emit(NODE_CONTEXTMENU, event, props.node?.data, props.node)
}
</script>

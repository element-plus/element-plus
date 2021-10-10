<template>
  <div
    ref="node$"
    class="el-tree-node"
    :class="{
      'is-expanded': expanded,
      'is-current': current,
      'is-focusable': !disabled,
      'is-checked': !disabled && checked,
    }"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="disabled"
    :aria-checked="checked"
    :data-key="node?.key"
    @click.stop="handleClick"
    @contextmenu="handleContextMenu"
  >
    <div
      class="el-tree-node__content"
      :style="{ paddingLeft: `${(node.level - 1) * indent}px` }"
    >
      <el-icon
        :class="[
          {
            'is-leaf': node?.isLeaf,
            'is-hidden': hiddenExpandIcon,
            expanded: !node?.isLeaf && expanded,
          },
          'el-tree-node__expand-icon',
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

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { CaretRight } from '@element-plus/icons'
import ElIcon from '@element-plus/components/icon'
import ElCheckbox from '@element-plus/components/checkbox'
import ElNodeContent from './tree-node-content'
import {
  ROOT_TREE_INJECTION_KEY,
  NODE_CONTEXTMENU,
  treeNodeEmits,
  treeNodeProps,
} from './virtual-tree'

const DEFAULT_ICON = 'caret-right'

export default defineComponent({
  name: 'ElTreeNode',
  components: {
    ElIcon,
    CaretRight,
    ElCheckbox,
    ElNodeContent,
  },
  props: treeNodeProps,
  emits: treeNodeEmits,
  setup(props, { emit }) {
    const tree = inject(ROOT_TREE_INJECTION_KEY)

    const indent = computed(() => {
      return tree?.props.indent || 16
    })

    const icon = computed(() => {
      return tree?.props.icon ? tree.props.icon : DEFAULT_ICON
    })

    const handleClick = () => {
      emit('click', props.node)
    }
    const handleExpandIconClick = () => {
      emit('toggle', props.node)
    }
    const handleCheckChange = (value: boolean) => {
      emit('check', props.node, value)
    }
    const handleContextMenu = (event: Event) => {
      if (tree?.instance?.vnode?.props?.['onNodeContextmenu']) {
        event.stopPropagation()
        event.preventDefault()
      }
      tree?.ctx.emit(NODE_CONTEXTMENU, event, props.node?.data, props.node)
    }

    return {
      indent,
      icon,
      handleClick,
      handleExpandIconClick,
      handleCheckChange,
      handleContextMenu,
    }
  },
})
</script>

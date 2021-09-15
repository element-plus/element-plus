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
    @click.stop="handleClick"
  >
    <div
      class="el-tree-node__content"
      :style="{ paddingLeft: (node.level - 1) * indent + 'px' }"
    >
      <span
        :class="[
          {
            'is-leaf': node.isLeaf,
            'is-hidden': hiddenExpandIcon,
            expanded: !node.isLeaf && expanded,
          },
          'el-tree-node__expand-icon',
          icon,
        ]"
        @click.stop="handleExpandIconClick"
      >
      </span>
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
import ElCheckbox from '@element-plus/components/checkbox'
import ElNodeContent from './tree-node-content.vue'
import { treeNodeProps } from './defaults'
import { RootTreeType } from './tree.type'

const DEFAULT_ICON = 'el-icon-caret-right'

export default defineComponent({
  name: 'ElTreeNode',
  components: {
    ElCheckbox,
    ElNodeContent,
  },
  props: treeNodeProps,
  emits: ['click', 'toggle', 'check'],
  setup(props, { emit }) {
    const tree = inject<RootTreeType>('RootTree')

    const indent = computed(() => {
      return tree.props.indent
    })

    const icon = computed(() => {
      return tree.props.iconClass ? tree.props.iconClass : DEFAULT_ICON
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

    return {
      indent,
      icon,
      handleClick,
      handleExpandIconClick,
      handleCheckChange,
    }
  },
})
</script>

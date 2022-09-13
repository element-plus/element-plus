<template>
  <div
    ref="node$"
    :class="[
      ns.b('node'),
      ns.is('expanded', expanded),
      ns.is('current', current),
      ns.is('focusable', !disabled),
      ns.is('checked', !disabled && checked),
    ]"
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
      :class="ns.be('node', 'content')"
      :style="{ paddingLeft: `${(node.level - 1) * indent}px` }"
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

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, inject } from 'vue'
import { CaretRight } from '@element-plus/icons-vue'
import ElIcon from '@element-plus/components/src/icon'
import ElCheckbox from '@element-plus/components/src/checkbox'
import { useNamespace } from '@element-plus/hooks'
import ElNodeContent from './tree-node-content'
import {
  NODE_CONTEXTMENU,
  ROOT_TREE_INJECTION_KEY,
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
    const ns = useNamespace('tree')

    const indent = computed(() => {
      return tree?.props.indent ?? 16
    })

    const icon = computed(() => {
      return tree?.props.icon ?? DEFAULT_ICON
    })

    const handleClick = (e: MouseEvent) => {
      emit('click', props.node, e)
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
      ns,
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

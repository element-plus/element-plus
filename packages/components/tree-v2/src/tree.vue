<template>
  <div
    class="el-tree"
    :class="{
      'el-tree--highlight-current': highlightCurrent,
    }"
    role="tree"
  >
    <fixed-size-list
      v-if="isNotEmpty"
      class-name="el-tree-virtual-list"
      :data="flattenTree"
      :total="flattenTree.length"
      :height="height"
      :item-size="itemSize"
      :perf-mode="perfMode"
    >
      <template #default="{ data, index, style }">
        <el-tree-node
          :key="data[index].key"
          :style="style"
          :node="data[index]"
          :expanded="isExpanded(data[index])"
          :show-checkbox="showCheckbox"
          :checked="isChecked(data[index])"
          :indeterminate="isIndeterminate(data[index])"
          :disabled="isDisabled(data[index])"
          :current="isCurrent(data[index])"
          :hidden-expand-icon="isForceHiddenExpandIcon(data[index])"
          @click="handleNodeClick"
          @toggle="toggleExpand"
          @check="handleNodeCheck"
        ></el-tree-node>
      </template>
    </fixed-size-list>
    <div v-else class="el-tree__empty-block">
      <span class="el-tree__empty-text">{{
        emptyText || t('el.tree.emptyText')
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide } from 'vue'
import { useLocaleInject } from '@element-plus/hooks'
import { FixedSizeList } from '@element-plus/components/virtual-list'
import { useTree } from './composables/useTree'
import ElTreeNode from './tree-node.vue'
import { ROOT_TREE_INJECTION_KEY, treeEmits, treeProps } from './virtual-tree'
import type { TreeProps } from './types'

export default defineComponent({
  name: 'ElTreeV2',
  components: {
    ElTreeNode,
    FixedSizeList,
  },
  props: treeProps,
  emits: treeEmits,
  setup(props: TreeProps, ctx) {
    provide(ROOT_TREE_INJECTION_KEY, {
      ctx,
      props,
      instance: getCurrentInstance(),
    })
    const { t } = useLocaleInject()
    const {
      flattenTree,
      isNotEmpty,
      toggleExpand,
      isExpanded,
      isIndeterminate,
      isChecked,
      isDisabled,
      isCurrent,
      isForceHiddenExpandIcon,
      toggleCheckbox,
      handleNodeClick,
      handleNodeCheck,
      // expose
      getCurrentNode,
      getCurrentKey,
      setCurrentKey,
      getCheckedKeys,
      getCheckedNodes,
      getHalfCheckedKeys,
      getHalfCheckedNodes,
      setChecked,
      setCheckedKeys,
      filter,
      setData,
    } = useTree(props, ctx.emit)

    ctx.expose({
      getCurrentNode,
      getCurrentKey,
      setCurrentKey,
      getCheckedKeys,
      getCheckedNodes,
      getHalfCheckedKeys,
      getHalfCheckedNodes,
      setChecked,
      setCheckedKeys,
      filter,
      setData,
    })

    return {
      t,
      flattenTree,
      itemSize: 26,
      isNotEmpty,
      toggleExpand,
      toggleCheckbox,
      isExpanded,
      isIndeterminate,
      isChecked,
      isDisabled,
      isCurrent,
      isForceHiddenExpandIcon,
      handleNodeClick,
      handleNodeCheck,
    }
  },
})
</script>

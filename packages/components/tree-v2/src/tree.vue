<template>
  <div
    ref="el$"
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
      width="100%"
      :height="height"
      :item-size="26"
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
import { useTree } from './hooks/useTree'
import ElTreeNode from './tree-node.vue'
import { treeProps } from './defaults'
import { TREE_EMITS } from './emits'
import type { ITreeProps } from './tree.type'

export default defineComponent({
  name: 'ElTreeV2',
  components: {
    ElTreeNode,
    FixedSizeList,
  },
  props: treeProps,
  emits: TREE_EMITS,
  setup(props: ITreeProps, ctx) {
    provide('RootTree', {
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
    })

    return {
      t,
      flattenTree,
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

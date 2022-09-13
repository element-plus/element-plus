<template>
  <div
    :class="[ns.b(), { [ns.m('highlight-current')]: highlightCurrent }]"
    role="tree"
  >
    <fixed-size-list
      v-if="isNotEmpty"
      :class-name="ns.b('virtual-list')"
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
        />
      </template>
    </fixed-size-list>
    <div v-else :class="ns.e('empty-block')">
      <span :class="ns.e('empty-text')">{{
        emptyText ?? t('el.tree.emptyText')
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, provide } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { formItemContextKey } from '@element-plus/tokens'
import { FixedSizeList } from '@element-plus/components/src/virtual-list'
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
    provide(formItemContextKey, undefined)
    const { t } = useLocale()
    const ns = useNamespace('tree')
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
      getNode,
      expandNode,
      collapseNode,
      setExpandedKeys,
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
      getNode,
      expandNode,
      collapseNode,
      setExpandedKeys,
    })

    return {
      t,
      ns,
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

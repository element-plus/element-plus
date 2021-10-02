<template>
  <el-input
    v-model="query"
    placeholder="Please enter keyword"
    @input="onQueryChanged"
  ></el-input>
  <el-tree-v2
    ref="treeRef"
    :data="data"
    :props="props"
    :filter-method="filterMethod"
    :height="208"
  ></el-tree-v2>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

const getKey = (prefix, id) => {
  return `${prefix}-${id}`
}

const createData = (
  maxDeep,
  maxChildren,
  minNodesNumber,
  deep = 1,
  key = 'node'
) => {
  let id = 0
  return new Array(minNodesNumber).fill(deep).map(() => {
    const childrenNumber =
      deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
    const nodeKey = getKey(key, ++id)
    return {
      id: nodeKey,
      label: nodeKey,
      children: childrenNumber
        ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
        : undefined,
    }
  })
}
export default defineComponent({
  setup() {
    const treeRef = ref(null)
    return {
      treeRef,
      data: createData(4, 30, 5),
      query: ref(''),
      props: ref({
        id: 'id',
        label: 'label',
        children: 'children',
      }),
      onQueryChanged(query) {
        const tree = treeRef.value as any
        tree?.filter(query)
      },
      filterMethod(query, node) {
        return node.label.indexOf(query) !== -1
      },
    }
  },
})
</script>

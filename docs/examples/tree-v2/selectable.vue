<template>
  <el-tree-v2
    :data="data"
    :props="props"
    show-checkbox
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
    return {
      data: createData(4, 30, 40),
      props: ref({
        id: 'id',
        label: 'label',
        children: 'children',
      }),
    }
  },
})
</script>

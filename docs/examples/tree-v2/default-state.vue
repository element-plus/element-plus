<template>
  <el-tree-v2
    :data="data"
    :height="208"
    :props="props"
    show-checkbox
    :default-checked-keys="defaultCheckedKeys"
    :default-expanded-keys="defaultExpandedKeys"
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
    const data = createData(4, 30, 40)
    const checkedKeys: any[] = []
    const expanedKeys: any[] = []
    for (let i = 0; i < data.length; ++i) {
      const children = data[i].children
      if (children) {
        expanedKeys.push(data[i].id)
        checkedKeys.push(children[0].id)
        break
      }
    }
    return {
      data,
      props: ref({
        id: 'id',
        label: 'label',
        children: 'children',
      }),
      defaultCheckedKeys: checkedKeys,
      defaultExpandedKeys: expanedKeys,
    }
  },
})
</script>

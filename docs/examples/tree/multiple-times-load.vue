<template>
  <el-tree style="max-width: 600px" :props="props" :load="loadNode" lazy />
</template>

<script lang="ts" setup>
import type Node from 'element-plus/es/components/tree/src/model/node'

interface Tree {
  name: string
  leaf?: boolean
}

const props = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
}

let time = 0
const loadNode = (
  node: Node,
  resolve: (data: Tree[]) => void,
  reject: () => void
) => {
  if (node.level === 0) {
    return resolve([{ name: 'region' }])
  }
  time++
  if (node.level >= 1) {
    setTimeout(() => {
      if (time > 3) {
        return resolve([
          { name: 'zone1', leaf: true },
          { name: 'zone2', leaf: true },
          { name: 'zone3', leaf: true },
        ])
      } else {
        return reject()
      }
    }, 3000)
  }
}
</script>

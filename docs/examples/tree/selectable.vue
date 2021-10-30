<template>
  <el-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
    @check-change="handleCheckChange"
  />
</template>

<script lang="ts">
export default {
  data() {
    return {
      props: {
        label: 'name',
        children: 'zones',
      },
      count: 1,
    }
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    handleNodeClick(data) {
      console.log(data)
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'Root1' }, { name: 'Root2' }])
      }
      if (node.level > 3) return resolve([])

      let hasChild
      if (node.data.name === 'region1') {
        hasChild = true
      } else if (node.data.name === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        let data
        if (hasChild) {
          data = [
            {
              name: `zone${this.count++}`,
            },
            {
              name: `zone${this.count++}`,
            },
          ]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    },
  },
}
</script>

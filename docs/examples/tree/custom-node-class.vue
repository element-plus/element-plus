<template>
  <div class="custom-tree-node-container">
    <div class="block">
      <el-tree
        :data="dataSource"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :props="{ class: customNodeClass }"
      />
    </div>
  </div>
</template>

<script lang="ts">
const id = 1000

export default {
  data() {
    const data = [
      {
        id: 1,
        label: 'Level one 1',
        children: [
          {
            id: 4,
            label: 'Level two 1-1',
            isPenultimate: true,
            children: [
              {
                id: 9,
                label: 'Level three 1-1-1',
              },
              {
                id: 10,
                label: 'Level three 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: 'Level one 2',
        isPenultimate: true,
        children: [
          {
            id: 5,
            label: 'Level two 2-1',
          },
          {
            id: 6,
            label: 'Level two 2-2',
          },
        ],
      },
      {
        id: 3,
        label: 'Level one 3',
        isPenultimate: true,
        children: [
          {
            id: 7,
            label: 'Level two 3-1',
          },
          {
            id: 8,
            label: 'Level two 3-2',
          },
        ],
      },
    ]
    return {
      dataSource: JSON.parse(JSON.stringify(data)),
    }
  },

  methods: {
    customNodeClass(data, node) {
      if (data.isPenultimate) {
        return 'is-penultimate'
      }
      return null
    },
  },
}
</script>

<style>
.is-penultimate > .el-tree-node__content {
  color: red;
}

.el-tree-node.is-expanded.is-penultimate > .el-tree-node__children {
  display: flex;
  flex-direction: row;
}
.is-penultimate > .el-tree-node__children > div {
  width: 25%;
}
</style>

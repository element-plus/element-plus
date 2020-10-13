<template>
  <div class="block">
    <el-tree
      ref="tree"
      :data="data"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
    />

    <button @click="test">test</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 1,
      defaultExpandedKeys: [1, 3],
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 11,
          label: '二级 1-1',
          children: [{
            id: 111,
            label: '三级 1-1',
          }],
        }],
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 21,
          label: '二级 2-1',
        }, {
          id: 22,
          label: '二级 2-2',
        }],
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 31,
          label: '二级 3-1',
        }, {
          id: 32,
          label: '二级 3-2',
        }],
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: 'region1', id: this.count++ }, { label: 'region2', id: this.count++ }])
      }
      if (node.level > 2) return resolve([])
      setTimeout(() => {
        resolve([{
          label: 'zone' + this.count,
          id: this.count++,
        }, {
          label: 'zone' + this.count,
          id: this.count++,
        }])
      }, 50)
    },
    handleCheck(...a) {
      console.log(...a)
    },
    test() {
      console.log(111)
      //   this.$refs.tree.updateKeyChildren(1, [{
      //   id: 111,
      //   label: '三级 1-1'
      // }]);

    },
    handleNodeClick(data) {
      console.log(data)
    },
  },
})
</script>

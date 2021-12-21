<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column prop="date" label="date" sortable width="180" />
      <el-table-column prop="name" label="Name" sortable width="180" />
    </el-table>

    <el-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
    </el-table>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu',
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu',
            },
          ],
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu',
        },
      ],
      tableData1: [
        {
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          hasChildren: true,
        },
        {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu',
        },
      ],
    }
  },
  methods: {
    load(row, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: 'wangxiaohu',
          },
        ])
      }, 1000)
    },
  },
}
</script>

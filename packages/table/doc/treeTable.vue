<template>
  <h3>树形数据与懒加载</h3>
  <div>
    <el-table
      :data="tableData"
      :expand-row-keys="['3']"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      border
      row-key="id"
      style="width: 100%;margin-bottom: 20px;"
    >
      <el-table-column
        label="日期"
        prop="date"
        sortable
        width="180"
      />
      <el-table-column
        label="姓名"
        prop="name"
        sortable
        width="180"
      />
      <el-table-column label="地址" prop="address" />
    </el-table>

    <el-table
      :data="tableData1"
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      border
      lazy
      row-key="id"
      style="width: 100%"
    >
      <el-table-column label="日期" prop="date" width="180" />
      <el-table-column label="姓名" prop="name" width="180" />
      <el-table-column label="地址" prop="address" />
    </el-table>
  </div>
</template>
<script>
export default {
  setup() {
    const load = (tree, treeNode, resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
        ])
      }, 1000)
    }
    return {
      load,
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
          ],
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      tableData1: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true,
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    }
  },
}
</script>

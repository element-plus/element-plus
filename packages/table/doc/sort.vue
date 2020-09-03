<template>
  <h3>排序</h3>
  <el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">
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
    <el-table-column :formatter="formatter" label="地址" prop="address" />
  </el-table>
</template>

<script>
export default {
  setup() {
    const formatter = (row, column) => {
      return row.address
    }
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      formatter,
    }
  },
}
</script>

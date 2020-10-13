<template>
  <div class="block">
    <h3>带状态表格</h3>
    <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%">
      <el-table-column label="日期" prop="date" width="180" />
      <el-table-column label="姓名" prop="name" width="180" />
      <el-table-column label="地址" prop="address" />
    </el-table>
  </div>
</template>

<script lang='ts'>
export default {
  setup() {
    const tableRowClassName = ({ rowIndex }) => {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
    return {
      tableRowClassName,
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
    }
  },
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>


<template>
  <h3>单选</h3>
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
    <el-table-column type="index" width="50" />
    <el-table-column label="日期" property="date" width="120" />
    <el-table-column label="姓名" property="name" width="120" />
    <el-table-column label="地址" property="address" />
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  setup() {
    const currentRow = ref(null)
    const instance = getCurrentInstance()
    const setCurrent = row => {
      instance.refs.singleTable.setCurrentRow(row)
    }
    const handleCurrentChange = val => {
      currentRow.value = val
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
      currentRow,
      setCurrent,
      handleCurrentChange,
    }
  },
}
</script>

<template>
  <h3>多选</h3>
  <el-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column label="日期" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column label="姓名" prop="name" width="120" />
    <el-table-column label="地址" prop="address" />
  </el-table>
  <div style="margin-top: 20px">
    <el-button type @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button type @click="toggleAllSelection()">切换所有行选中状态</el-button>
    <el-button type @click="toggleSelection()">取消选择</el-button>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  setup() {
    const multipleSelection = ref([])
    const instance = getCurrentInstance()
    const toggleSelection = rows => {
      if (rows) {
        rows.forEach(row => {
          instance.refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        instance.refs.multipleTable.clearSelection()
      }
    }
    const handleSelectionChange = val => {
      multipleSelection.value = val
    }
    const toggleAllSelection = () => {
      instance.refs.multipleTable.toggleAllSelection()
    }
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
      multipleSelection,
      toggleSelection,
      handleSelectionChange,
      toggleAllSelection,
    }
  },
}
</script>

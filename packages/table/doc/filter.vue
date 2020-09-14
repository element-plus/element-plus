<template>
  <h3>过滤</h3>
  <el-button type @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button type @click="clearFilter">清除所有过滤器</el-button>
  <el-table ref="filterTable" :data="tableData" style="width: 100%">
    <el-table-column
      :filter-method="filterHandler"
      :filter-multiple="false"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      column-key="date"
      label="日期"
      prop="date"
      sortable
      width="180"
    />
    <el-table-column label="姓名" prop="name" width="180" />
    <el-table-column :formatter="formatter" label="地址" prop="address" />
    <el-table-column
      :filter-method="filterTag"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      filter-placement="bottom-start"
      label="标签"
      prop="tag"
      width="100"
    >
      <template #default="scope">
        <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  setup() {
    const instance = getCurrentInstance()
    const resetDateFilter = () => {
      instance.refs.filterTable.clearFilter('date')
    }
    const clearFilter = () => {
      instance.refs.filterTable.clearFilter()
    }
    const formatter = (row, column) => {
      return row.address + '---'
    }
    const filterTag = (value, row) => {
      return row.tag === value
    }
    const filterHandler = (value, row, column) => {
      const property = column['property']
      return row[property] === value
    }
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司',
        },
      ],
      resetDateFilter,
      clearFilter,
      formatter,
      filterTag,
      filterHandler,
    }
  },
}
</script>

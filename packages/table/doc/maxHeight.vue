<template>
  <h3>流体高度</h3>
  <el-table :data="tableData" max-height="250" style="width: 700px">
    <el-table-column
      fixed
      label="日期"
      prop="date"
      width="150"
    />
    <el-table-column label="姓名" prop="name" width="120" />
    <el-table-column label="省份" prop="province" width="120" />
    <el-table-column label="市区" prop="city" width="120" />
    <el-table-column label="地址" prop="address" width="300" />
    <el-table-column label="邮编" prop="zip" width="120" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button size="small" type="text" @click.prevent="deleteRow(scope.$index, tableData)">移除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  setup() {
    const deleteRow = (index, rows) => {
      rows.splice(index, 1)
    }
    return {
      deleteRow,
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
    }
  },
}
</script>

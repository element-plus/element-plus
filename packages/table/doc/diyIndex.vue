<template>
  <h3>自定义索引</h3>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column :index="indexMethod" type="index" />
    <el-table-column label="日期" prop="date" width="180" />
    <el-table-column label="姓名" prop="name" width="180" />
    <el-table-column label="地址" prop="address" />
  </el-table>
</template>

<script>
export default {
  setup() {
    const indexMethod = index => {
      return index * 2
    }
    return {
      indexMethod,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司',
        },
      ],
    }
  },
}
</script>

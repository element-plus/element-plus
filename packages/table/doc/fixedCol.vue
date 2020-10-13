<template>
  <div class="block">
    <h3>固定列</h3>
    <el-table :data="tableData" border style="width: 500px">
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
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button size="small" type="text" @click="handleClick(scope.row)">查看</el-button>
          <el-button size="small" type="text">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  setup() {
    const handleClick = row => {
      console.log(row)
    }
    return {
      handleClick,
      tableData: [
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
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
        },
      ],
    }
  },
}
</script>

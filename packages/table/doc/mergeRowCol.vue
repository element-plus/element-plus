<template>
  <div>
    <h3>合并行或列</h3>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%"
    >
      <el-table-column label="ID" prop="id" width="180" />
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="数值 1" prop="amount1" sortable />
      <el-table-column label="数值 2" prop="amount2" sortable />
      <el-table-column label="数值 3" prop="amount3" sortable />
    </el-table>

    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column label="ID" prop="id" width="180" />
      <el-table-column label="姓名" prop="name" />
      <el-table-column label="数值 1（元）" prop="amount1" />
      <el-table-column label="数值 2（元）" prop="amount2" />
      <el-table-column label="数值 3（元）" prop="amount3" />
    </el-table>
  </div>
</template>

<script>
export default {
  setup() {
    const arraySpanMethod = ({ rowIndex, columnIndex }) => {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    }

    const objectSpanMethod = ({ rowIndex, columnIndex }) => {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          }
        }
      }
    }
    return {
      arraySpanMethod,
      objectSpanMethod,
      tableData: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
        },
      ],
    }
  },
}
</script>

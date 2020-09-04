<template>
  <h3>表尾合计行</h3>
  <el-table
    :data="tableData"
    border
    show-summary
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
    :summary-method="getSummaries"
    border
    height="200"
    show-summary
    style="width: 100%; margin-top: 20px"
  >
    <el-table-column label="ID" prop="id" width="180" />
    <el-table-column label="姓名" prop="name" />
    <el-table-column label="数值 1（元）" prop="amount1" />
    <el-table-column label="数值 2（元）" prop="amount2" />
    <el-table-column label="数值 3（元）" prop="amount3" />
  </el-table>
</template>

<script>
export default {
  setup() {
    const getSummaries = param => {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
    return {
      getSummaries,
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

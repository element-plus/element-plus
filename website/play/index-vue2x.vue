<template>
  <div>
    <el-pagination
      :page-size="20"
      layout="prev, pager, next"
      :total="1000"
    />

    <el-pagination
      :page-size="10"
      layout="prev, pager, next"
      :key-value="pagerKey"
    />
  </div>
</template>

<script>
import { usePagination } from '@element-plus/pagination/src/usePagination'

export default {
  data () {
    return {
      pagerKey: 'newPager',
    }
  },
  // Execute after initializing the props
  mounted () {
    const { currentPage, total, pageSize } = usePagination(this.pagerKey)

    currentPage.value = 2
    pageSize.value = 5
    total.value = 200
  },
}
</script>

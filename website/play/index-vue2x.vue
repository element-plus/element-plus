<template>
  <div>
    <el-pagination
      :page-size="20"
      layout="prev, pager, next"
      :total="1000"
    />

    <el-pagination
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
  created () {
    const { currentPage, total, pageSize } = usePagination(this.pagerKey)

    currentPage.value = 2
    pageSize.value = 5
    total.value = 200
  },
}
</script>

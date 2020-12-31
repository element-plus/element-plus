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
import { defineComponent, watchEffect, nextTick } from 'vue'
import { usePagination } from '@element-plus/pagination/src/usePagination'

export default defineComponent({
  setup () {
    const pagerKey = 'newPager'
    const { currentPage, total, pageSize } = usePagination(pagerKey)

    // Execute after initializing the props
    nextTick(() => {
      currentPage.value = 2
      pageSize.value = 5
      total.value = 200
    })

    watchEffect(() => {
      console.log(currentPage.value)
    })

    return {
      pagerKey,
    }
  },
})
</script>

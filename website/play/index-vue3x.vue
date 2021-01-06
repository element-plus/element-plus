<template>
  <div>
    <el-pagination
      :page-size="20"
      :total="1000"
      layout="prev, pager, next"
    />

    <el-pagination
      layout="prev, pager, next"
      :key-value="pagerKey"
    />
  </div>
</template>

<script>
import { defineComponent, watchEffect } from 'vue'
import { usePagination } from '@element-plus/pagination/src/usePagination'

export default defineComponent({
  setup () {
    const pagerKey = 'newPager'
    const { currentPage, total, pageSize } = usePagination(pagerKey)

    // Execute after initializing the props
    currentPage.value = 2
    pageSize.value = 5
    total.value = 400

    watchEffect(() => {
      console.log(currentPage.value)
    })

    return {
      pagerKey,
    }
  },
})
</script>

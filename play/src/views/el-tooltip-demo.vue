<template>
  <div class="goodsList">
    <el-tooltip
      v-for="item in list"
      class="box-item"
      effect="dark"
      :content="'下标：' + item"
    >
      <div class="flex items-center justify-center">
        <el-icon size="16">
          <Link />
        </el-icon>
        <span>元素{{ item }}</span>
      </div>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { Link } from '@element-plus/icons-vue'
const list = Array.from({ length: 5000 }, (_, i) => i)
</script>
<style lang="scss" scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

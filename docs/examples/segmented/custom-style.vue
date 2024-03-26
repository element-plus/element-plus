<template>
  <div class="custom-style">
    <el-segmented v-model="value" :options="options" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Mon')

const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>

<style lang="scss" scoped>
.custom-style .el-segmented {
  --el-segmented-item-selected-bg-color: var(--el-color-danger);
}
</style>

<template>
  <div>
    <el-switch v-model="value" />
    <hr class="my-4" />
    <el-pagination
      :hide-on-single-page="value"
      :total="5"
      layout="prev, pager, next"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>
<style scoped>
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>

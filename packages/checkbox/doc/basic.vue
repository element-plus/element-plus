<template>
  <div class="block">
    <el-checkbox v-model="checked">{{ checked }}</el-checkbox>
    <el-checkbox v-model="checked1" disabled>{{ checked1 }}</el-checkbox>
    <el-checkbox v-model="checked2" disabled>{{ checked2 }}</el-checkbox>
  </div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      checked: false,
      checked1: false,
      checked2: true,
    }
  },
})
</script>

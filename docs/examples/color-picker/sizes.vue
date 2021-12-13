<template>
  <div class="demo-color-sizes">
    <el-color-picker v-model="color" size="large" />
    <el-color-picker v-model="color" />
    <el-color-picker v-model="color" size="small" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color = ref('409EFF')

    return {
      color,
    }
  },
})
</script>

<style lang="scss">
.demo-color-sizes {
  .el-color-picker:not(:last-child) {
    margin-right: 16px;
  }
}
</style>

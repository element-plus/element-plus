<template>
  <div class="demo-color-sizes">
    <el-color-picker v-model="color" />
    <el-color-picker v-model="color" size="medium" />
    <el-color-picker v-model="color" size="small" />
    <el-color-picker v-model="color" size="mini" />
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

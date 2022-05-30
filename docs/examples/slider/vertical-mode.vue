<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" vertical height="200px" />
  </div>
</template>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>

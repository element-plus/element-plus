<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" show-input> </el-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

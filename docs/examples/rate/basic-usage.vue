<template>
  <div class="demo-rate-block">
    <span class="demonstration">Default</span>
    <el-rate v-model="value1"></el-rate>
  </div>
  <div class="demo-rate-block">
    <span class="demonstration">Color for different levels</span>
    <el-rate v-model="value2" :colors="colors"> </el-rate>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(null)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

<style scoped></style>

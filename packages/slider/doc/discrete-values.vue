<template>
  <div class="block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value1"
      :step="10"
    />
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops
    />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const values = reactive({
      value1: 0,
      value2: 0,
    })
    return {
      ...toRefs(values),
    }
  },
}
</script>
<style>
.demonstration {
  font-size: 14px;
  color: #8492A6;
  line-height: 44px;
}
</style>

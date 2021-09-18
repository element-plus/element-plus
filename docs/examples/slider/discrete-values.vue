<template>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider v-model="value1" :step="10"> </el-slider>
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider v-model="value2" :step="10" show-stops> </el-slider>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref(0)
    const value2 = ref(0)

    return {
      value1,
      value2,
    }
  },
})
</script>

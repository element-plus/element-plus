<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" range show-stops :max="10"> </el-slider>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value = ref([4, 8])

    return {
      value,
    }
  },
})
</script>

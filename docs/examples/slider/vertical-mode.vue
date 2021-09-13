<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" vertical height="200px"> </el-slider>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value = ref(0)

    return {
      value,
    }
  },
})
</script>

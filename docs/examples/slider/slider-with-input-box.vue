<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" show-input> </el-slider>
  </div>
</template>

<script lang="ts">
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

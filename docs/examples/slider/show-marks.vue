<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" range :marks="marks"> </el-slider>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value = ref([30, 60])
    const marks = reactive({
      0: '0°C',
      8: '8°C',
      37: '37°C',
      50: {
        style: {
          color: '#1989FA',
        },
        label: '50%',
      },
    })

    return {
      value,
      marks,
    }
  },
})
</script>

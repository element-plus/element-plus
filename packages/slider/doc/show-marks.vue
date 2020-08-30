<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks"
    />
  </div>
</template>

<script lang="ts">
import { h, ref } from 'vue'

export default {
  setup() {
    const value = ref([30, 60])
    const marks = {
      0: '0°C',
      8: '8°C',
      37: '37°C',
      50: {
        style: {
          color: '#1989FA',
        },
        label: h('strong', '50%'),
      },
    }
    return {
      value,
      marks,
    }
  },
}
</script>

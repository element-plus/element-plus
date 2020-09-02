<template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10"
    />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const value = ref([2, 5])
    return {
      value,
    }
  },
}
</script>

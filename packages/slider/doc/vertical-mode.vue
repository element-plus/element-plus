<template>
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px"
    />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const value = ref(0)
    return {
      value,
    }
  },
}
</script>

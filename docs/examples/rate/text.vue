<template>
  <el-rate
    v-model="value"
    :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
    show-text
  >
  </el-rate>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref(null),
    }
  },
})
</script>

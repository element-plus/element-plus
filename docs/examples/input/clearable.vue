<template>
  <el-input v-model="input" placeholder="Please input" clearable />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>

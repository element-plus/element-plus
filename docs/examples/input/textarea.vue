<template>
  <el-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      textarea: ref(''),
    }
  },
})
</script>

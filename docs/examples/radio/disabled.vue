<template>
  <el-radio v-model="radio" disabled label="disabled">Option A</el-radio>
  <el-radio v-model="radio" disabled label="selected and disabled"
    >Option B</el-radio
  >
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      radio: ref('selected and disabled'),
    }
  },
})
</script>

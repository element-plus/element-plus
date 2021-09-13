<template>
  <el-input
    v-model="textarea1"
    autosize
    type="textarea"
    placeholder="Please input"
  />
  <div style="margin: 20px 0"></div>
  <el-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="Please input"
  >
  </el-input>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      textarea1: ref(''),
      textarea2: ref(''),
    }
  },
})
</script>

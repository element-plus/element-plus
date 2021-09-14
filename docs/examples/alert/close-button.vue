<template>
  <el-alert title="unclosable alert" type="success" :closable="false">
  </el-alert>
  <el-alert title="customized close-text" type="info" close-text="Gotcha">
  </el-alert>
  <el-alert title="alert with callback" type="warning" @close="hello">
  </el-alert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const hello = () => {
      alert('Hello World!')
    }
    return {
      hello,
    }
  },
})
</script>

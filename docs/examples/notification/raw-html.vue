<template>
  <el-button plain @click="open"> Use HTML String </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElNotification } from 'element-plus'

export default defineComponent({
  setup() {
    const open = () => {
      ElNotification({
        title: 'HTML String',
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>',
      })
    }

    return {
      open,
    }
  },
})
</script>

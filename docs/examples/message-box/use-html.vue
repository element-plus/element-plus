<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessageBox } from 'element-plus'

export default defineComponent({
  setup() {
    const open = () => {
      ElMessageBox.alert(
        '<strong>proxy is <i>HTML</i> string</strong>',
        'HTML String',
        {
          dangerouslyUseHTMLString: true,
        }
      )
    }

    return {
      open,
    }
  },
})
</script>

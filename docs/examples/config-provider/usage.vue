<template>
  <div>
    <el-config-provider :locale="locale2">
      <el-color-picker :model-value="''" style="vertical-align: middle" />
    </el-config-provider>
    <el-button style="margin-left: 8px; vertical-align: middle" @click="toggle">
      Switch Lang
    </el-button>
  </div>
</template>

<script lang="ts">
// import { ConfigProvider } from 'element-plus'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const locale1 = ref({
      name: 'zh-cn',
      el: {
        colorpicker: {
          confirm: '确定',
          clear: '清空',
        },
      },
    })
    const locale2 = ref({
      name: 'en',
      el: {
        colorpicker: {
          confirm: 'Confirm',
          clear: 'Clear',
        },
      },
    })
    const toggle = () => {
      const temp = locale1.value
      locale1.value = locale2.value
      locale2.value = temp
    }

    return {
      locale1,
      locale2,
      toggle,
    }
  },
})
</script>

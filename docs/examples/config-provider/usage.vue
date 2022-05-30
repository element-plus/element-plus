<script lang="ts" setup>
import { ref } from 'vue'

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
</script>

<template>
  <div>
    <el-button m="b-2" @click="toggle"> Switch Lang </el-button>
    <br />
    <el-config-provider :locale="locale2">
      <el-color-picker :model-value="''" style="vertical-align: middle" />
    </el-config-provider>
  </div>
</template>

<template>
  <div>
    <el-config-provider :message="config">
      <el-button @click="open">OPEN</el-button>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

import { Coffee } from '@element-plus/icons-vue'

const config = reactive({
  max: 3,
  iconMap: {
    info: Coffee,
  },
})
const open = () => {
  ElMessage('You cannot order more than 3 cups of coffee.')
}
</script>

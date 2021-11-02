<template>
  <el-switch v-model="value1" :active-icon="active" :inactive-icon="inactive">
  </el-switch>
  <br />
  <el-switch
    v-model="value2"
    style="margin-left: 24px"
    inline-prompt
    :active-icon="active"
    :inactive-icon="inactive"
  >
  </el-switch>
</template>

<script lang="ts">
import { Check, Close } from '@element-plus/icons'
export default {
  data() {
    return {
      value1: true,
      value2: true,
      active: Check,
      inactive: Close,
    }
  },
}
</script>

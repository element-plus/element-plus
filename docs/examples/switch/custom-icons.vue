<template>
  <el-switch v-model="value" :active-icon="active" :inactive-icon="inactive">
  </el-switch>
</template>

<script lang="ts">
import { CircleCheckFilled, CircleCloseFilled } from '@element-plus/icons'
export default {
  data() {
    return {
      value: true,
      active: CircleCheckFilled,
      inactive: CircleCloseFilled,
    }
  },
}
</script>

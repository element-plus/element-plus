<template>
  <el-icon>
    <component :is="ValidateComponentsMap[validateState]" />
  </el-icon>
</template>

<script setup lang="ts">
import { ValidateComponentsMap } from '@element-plus/utils'

import type { FormItemContext } from '@element-plus/components/form'

defineProps<{
  validateState: Exclude<FormItemContext['validateState'], ''>
}>()
</script>

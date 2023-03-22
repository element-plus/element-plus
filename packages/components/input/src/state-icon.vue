<template>
  <el-icon>
    <component :is="ValidateComponentsMap[validateState]" />
  </el-icon>
</template>

<script setup lang="ts">
import { ValidateComponentsMap } from '@element-plus/utils'

import type { PropType } from 'vue'
import type { FormItemContext } from '@element-plus/components/form'

defineProps({
  validateState: {
    type: String as PropType<Exclude<FormItemContext['validateState'], ''>>,
    required: true,
  },
})
</script>

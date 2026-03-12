<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <picture-filled v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { PictureFilled } from '@element-plus/icons-vue'

import type { SkeletonItemProps } from './skeleton-item.ts'

defineOptions({
  name: 'GSkeletonItem',
})
withDefaults(defineProps<SkeletonItemProps>(), {
  variant: 'text',
})
const ns = useNamespace('skeleton')
</script>

<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <ImgPlaceholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import ImgPlaceholder from './image-placeholder.vue'
import { skeletonItemProps } from './skeleton-item'

defineOptions({
  name: 'ElSkeletonItem',
})
defineProps(skeletonItemProps)
const ns = useNamespace('skeleton')

defineExpose({
  ns,
})
</script>

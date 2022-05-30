<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { PictureFilled } from '@element-plus/icons-vue'
import { skeletonItemProps } from './skeleton-item'

defineProps(skeletonItemProps)
defineOptions({
  name: 'ElSkeletonItem',
})
const ns = useNamespace('skeleton')
</script>

<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <picture-filled v-if="variant === 'image'" />
  </div>
</template>

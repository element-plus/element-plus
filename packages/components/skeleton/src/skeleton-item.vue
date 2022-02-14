<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import ImgPlaceholder from './image-placeholder.vue'
import { skeletonItemProps } from './skeleton-item'

export default defineComponent({
  name: 'ElSkeletonItem',
  components: {
    ImgPlaceholder,
  },
  props: skeletonItemProps,
  setup() {
    const ns = useNamespace('skeleton')
    return {
      ns,
    }
  },
})
</script>

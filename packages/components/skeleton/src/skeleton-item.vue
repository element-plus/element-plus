<template>
  <div :class="[`${prefixClass}__item`, `${prefixClass}__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgPlaceholder from './image-placeholder.vue'
import { skeletonItemProps } from './skeleton-item'
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElSkeletonItem',
  components: {
    ImgPlaceholder,
  },
  props: skeletonItemProps,
  setup(props) {
    const prefixClass = usePrefixClass('skeleton')
    return {
      prefixClass,
    }
  }
})
</script>

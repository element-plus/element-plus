<template>
  <div :class="['el-skeleton__item', `el-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgPlaceholder from './image-placeholder.vue'
import { skeletonItemProps } from './skeleton-item'

export default defineComponent({
  name: 'ElSkeletonItem',
  components: {
    ImgPlaceholder,
  },
  props: skeletonItemProps,
})
</script>

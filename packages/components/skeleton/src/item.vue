<template>
  <div :class="['el-skeleton__item', `el-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgPlaceholder from './image-placeholder.vue'

import type { PropType } from 'vue'
import type { Variants } from './types'

export default defineComponent({
  name: 'ElSkeletonItem',
  components: {
    [ImgPlaceholder.name]: ImgPlaceholder,
  },
  props: {
    variant: {
      type: String as PropType<Variants>,
      default: 'text',
    },
  },
})
</script>

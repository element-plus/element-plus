<template>
  <div :class="['el-skeleton__item', `el-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgPlaceholder from './img-placeholder.vue'
import type { Variants } from './constants'
import type { PropType } from 'vue'

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

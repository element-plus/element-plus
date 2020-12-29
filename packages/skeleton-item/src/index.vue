<template>
  <div :class="['el-skeleton__item', `el-skeleton__${variant}`]">
    <el-picture v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Picture } from '@element-plus/icons'
import type { Variants } from './constants'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElSkeletonItem',
  components: {
    'el-picture': Picture,
  },
  props: {
    variant: {
      type: String as PropType<Variants>,
      default: 'text',
    },
  },
})
</script>

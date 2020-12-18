<template>
  <div :class="['el-skeleton__item', variant ? `el-skeleton__${variant}` : '']">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Variants } from './constants'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElSkeletonItem',
  props: {
    variant: {
      type: String as PropType<Variants>,
      default: 'text',
    }
  }
})

</script>
<template>
  <div :class="['el-divider', `el-divider--${direction}`]">
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="['el-divider__text', `is-${contentPosition}`]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { dividerProps } from './divider'

export default defineComponent({
  name: 'ElDivider',
  props: dividerProps,
})
</script>

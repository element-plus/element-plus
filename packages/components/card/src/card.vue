<template>
  <div :class="[ns.b(), ns.is(`${shadow}-shadow`)]">
    <div v-if="$slots.header || header" :class="ns.e('header')">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="ns.e('body')" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { cardProps } from './card'

export default defineComponent({
  name: 'ElCard',
  props: cardProps,
  setup() {
    const ns = useNamespace('card')

    return {
      ns,
    }
  },
})
</script>

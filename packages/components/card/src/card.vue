<template>
  <div
    :class="[
      prefixClass,
      shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow',
    ]"
  >
    <div v-if="$slots.header || header" :class="`${prefixClass}__header`">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="`${prefixClass}__body`" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import { cardProps } from './card'

export default defineComponent({
  name: 'ElCard',
  props: cardProps,
  setup() {
    const prefixClass = usePrefixClass('card')

    return {
      prefixClass,
    }
  },
})
</script>

<template>
  <div :class="[ns.b(), ns.is(`${shadow}-shadow`)]">
    <div v-if="$slots.header || header" :class="ns.e('header')">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="ns.e('body')" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { cardProps } from './card'

defineOptions({
  name: 'ElCard',
})

defineProps(cardProps)

const ns = useNamespace('card')
</script>

<template>
  <div
    class="el-card"
    :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'"
  >
    <div v-if="$slots.header || header" class="el-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="el-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { cardProps } from './card'

export default defineComponent({
  name: 'ElCard',
  props: cardProps,
})
</script>

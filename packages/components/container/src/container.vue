<template>
  <section :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot />
  </section>
</template>
<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { Component } from 'vue'

defineOptions({
  name: 'ElContainer',
})
const props = defineProps({
  direction: {
    type: String,
  },
})
const slots = useSlots()

const ns = useNamespace('container')

const isVertical = computed(() => {
  if (props.direction === 'vertical') return true
  if (props.direction === 'horizontal' || !slots || !slots.default) return false
  return slots.default().some((vNode) => {
    const tag = (vNode.type as Component).name
    return tag === 'ElHeader' || tag === 'ElFooter'
  })
})
</script>

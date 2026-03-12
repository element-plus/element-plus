<template>
  <section :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot />
  </section>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'

import type { Component, VNode } from 'vue'

interface ContainerProps {
  /**
   * @description layout direction for child elements
   */
  direction?: 'horizontal' | 'vertical'
}

defineOptions({
  name: 'GContainer',
})

const props = defineProps<ContainerProps>()
const slots = useSlots()

const ns = useNamespace('container')

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }
  if (slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return vNodes.some((vNode) => {
      const tag = (vNode.type as Component).name
      return tag === 'GHeader' || tag === 'GFooter'
    })
  } else {
    return false
  }
})
</script>

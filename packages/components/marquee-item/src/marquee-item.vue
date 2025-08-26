<template>
  <div ref="marqueeItemRef" class="el-marquee-item" @click="handleItemClick">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { marqueeItemEmits, marqueeItemProps } from './marquee-item'

const COMPONENT_NAME = 'ElMarqueeItem'
defineOptions({
  name: COMPONENT_NAME,
  inheritAttrs: false,
})

const props = defineProps(marqueeItemProps)
const emit = defineEmits(marqueeItemEmits)

const marqueeItemRef = ref<HTMLElement>()

const handleItemClick = () => {
  emit('click')
}

defineExpose({
  /** @description 项目引用 */
  marqueeItemRef,
  /** @description 项目标签 */
  label: props.label,
})
</script>

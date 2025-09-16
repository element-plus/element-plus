<template>
  <div
    ref="containerRef"
    :class="ns.b()"
    :style="{ gap: `${props.gap || 6}px` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, provide, ref, watch } from 'vue'
import { tagNavContextKey } from '@element-plus/components/tag-nav/src/constants'
import { useNamespace, useOrderedChildren } from '@element-plus/hooks'
import {
  tagNavEmits,
  tagNavProps,
} from '@element-plus/components/tag-nav/src/tag-nav'

import type { TagNavItemContext } from '@element-plus/components/tag-nav/src/constants'

const COMPONENT_NAME = 'ElTagNav'
defineOptions({
  name: COMPONENT_NAME,
})
const props = defineProps(tagNavProps)
const ns = useNamespace('tag-nav')

const {
  children: tagList,
  addChild: registerItem,
  removeChild: unregisterItem,
} = useOrderedChildren<TagNavItemContext>(getCurrentInstance()!, 'ElTagNavItem')

const containerRef = ref<HTMLElement | null>(null)
const currentItem = ref<string>('')
const dragPlaceholderInd = ref<number | null>(null)
const draggedItemName = ref<string | null>(null)
const draggedInd = ref<number | null>(null)

const emit = defineEmits(tagNavEmits)

/* Watchers */
watch(
  () => [...tagList.value],
  () => {
    emit(
      'orderUpdated',
      tagList.value.map((item) => item.tagName)
    )
  }
)

watch(
  () => props.modelValue,
  () => (currentItem.value = props.modelValue || ''),
  { immediate: true }
)

provide(tagNavContextKey, {
  registerItem,
  unregisterItem,
  currentItem,
  dragPlaceholderInd,
  draggedInd,
  draggedItemName,
  containerRef,
  tagListRef: tagList,
  props,
})

defineExpose({
  /**
   * @description activate tag nav item name
   */
  currentItem,
})
</script>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  nextTick,
  provide,
  reactive,
  toRef,
  watch,
} from 'vue'
import { useNamespace, useOrderedChildren } from '@element-plus/hooks'
import { useContainer, useResize, useSize } from './hooks'
import { splitterEmits, splitterProps } from './splitter'
import { splitterRootContextKey } from './type'

import type { PanelItemState } from './type'

const ns = useNamespace('splitter')

defineOptions({
  name: 'ElSplitter',
})

const emits = defineEmits(splitterEmits)

const props = defineProps(splitterProps)
const layout = toRef(props, 'layout')
const lazy = toRef(props, 'lazy')

const { containerEl, containerSize } = useContainer(layout)

const {
  removeChild: unregisterPanel,
  children: panels,
  addChild: registerPanel,
  ChildrenSorter: PanelsSorter,
} = useOrderedChildren<PanelItemState>(getCurrentInstance()!, 'ElSplitterPanel')

watch(panels, () => {
  panels.value.forEach((instance: PanelItemState, index: number) => {
    instance.setIndex(index)
  })
})

const { percentSizes, pxSizes } = useSize(panels, containerSize)

const {
  lazyOffset,
  movingIndex,
  onMoveStart,
  onMoving,
  onMoveEnd,
  onCollapse,
} = useResize(panels, containerSize, pxSizes, lazy)

const splitterStyles = computed(() => {
  return {
    [ns.cssVarBlockName('bar-offset')]: lazy.value
      ? `${lazyOffset.value}px`
      : undefined,
  }
})

const onResizeStart = (index: number) => {
  onMoveStart(index)
  emits('resizeStart', index, pxSizes.value)
}

const onResize = (index: number, offset: number) => {
  onMoving(index, offset)

  if (!lazy.value) {
    emits('resize', index, pxSizes.value)
  }
}

const onResizeEnd = async (index: number) => {
  onMoveEnd()
  await nextTick()
  emits('resizeEnd', index, pxSizes.value)
}

const onCollapsible = (index: number, type: 'start' | 'end') => {
  onCollapse(index, type)
  emits('collapse', index, type, pxSizes.value)
}

provide(
  splitterRootContextKey,
  reactive({
    panels,
    percentSizes,
    pxSizes,
    layout,
    lazy,
    movingIndex,
    containerSize,
    onMoveStart: onResizeStart,
    onMoving: onResize,
    onMoveEnd: onResizeEnd,
    onCollapse: onCollapsible,
    registerPanel,
    unregisterPanel,
  })
)
</script>

<template>
  <div
    ref="containerEl"
    :class="[ns.b(), ns.e(layout)]"
    :style="splitterStyles"
  >
    <slot />
    <panels-sorter />
    <!-- Prevent iframe touch events from breaking -->
    <div v-if="movingIndex" :class="[ns.e('mask'), ns.e(`mask-${layout}`)]" />
  </div>
</template>

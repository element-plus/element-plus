<script setup lang="ts">
import { getCurrentInstance, provide, reactive, toRef, watch } from 'vue'
import { useNamespace, useOrderedChildren } from '@element-plus/hooks'
import { useContainer, useResize, useSize } from './hooks'
import { splitterProps } from './splitter'
import { type PanelItemState, splitterRootContextKey } from './type'

const ns = useNamespace('splitter')

defineOptions({
  name: 'ElSplitter',
})

const emits = defineEmits<{
  (e: 'resizeStart', index: number, sizes: number[]): void
  (e: 'resize', index: number, sizes: number[]): void
  (e: 'resizeEnd', index: number, sizes: number[]): void
  (e: 'collapse', index: number, type: 'start' | 'end', sizes: number[]): void
}>()

const props = defineProps(splitterProps)

const { containerEl, containerSize } = useContainer(toRef(props, 'layout'))

const {
  removeChild: unregisterPanel,
  children: panels,
  addChild: sortPanel,
} = useOrderedChildren<PanelItemState>(getCurrentInstance()!, 'ElSplitterPanel')

watch(panels, () => {
  panels.value.forEach((instance: PanelItemState, index: number) => {
    instance.setIndex(index)
  })
})

const { percentSizes, pxSizes } = useSize(panels, containerSize)

const { onMoveStart, onMoving, onMoveEnd, onCollapse, movingIndex } = useResize(
  panels,
  containerSize,
  pxSizes
)

const onResizeStart = (index: number) => {
  onMoveStart(index)
  emits('resizeStart', index, pxSizes.value)
}

const onResize = (index: number, offset: number) => {
  onMoving(index, offset)
  emits('resize', index, pxSizes.value)
}

const onResizeEnd = (index: number) => {
  onMoveEnd()
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
    layout: props.layout,
    movingIndex,
    containerSize,
    onMoveStart: onResizeStart,
    onMoving: onResize,
    onMoveEnd: onResizeEnd,
    onCollapse: onCollapsible,
    registerPanel: (panel: PanelItemState) => {
      panels.value.push(panel)
    },
    sortPanel,
    unregisterPanel,
  })
)
</script>

<template>
  <div ref="containerEl" :class="[ns.b(), ns.e(layout)]">
    <slot />
    <!-- Prevent iframe touch events from breaking -->
    <div v-if="movingIndex" :class="[ns.e('mask'), ns.e(`mask-${layout}`)]" />
  </div>
</template>

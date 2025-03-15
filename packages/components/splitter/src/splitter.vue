<script setup lang="ts">
import { provide, reactive, toRef } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { panelContextKey } from './const'
import { useContainer, usePanel, useResize, useSize } from './hooks'
import { splitterProps } from './splitter'

const ns = useNamespace('splitter')

defineOptions({
  name: 'ElSplitter',
})

const emits = defineEmits(['resizeStart', 'resize', 'resizeEnd'])

const props = defineProps(splitterProps)

const { containerEl, containerSize } = useContainer(toRef(props, 'layout'))

const { panelsMap, panels } = usePanel(containerEl)

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

provide(
  panelContextKey,
  reactive({
    panelsMap,
    panels,
    percentSizes,
    pxSizes,
    layout: props.layout,
    movingIndex,
    containerSize,
    onMoveStart: onResizeStart,
    onMoving: onResize,
    onMoveEnd: onResizeEnd,
    onCollapse,
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

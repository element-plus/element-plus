<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { addPanelKey, panelContextKey, removePanelKey } from './const'
import { getCollapsible, isCollapsible } from './hooks/usePanel'
import SplitBar from './split-bar.vue'
import { splitterPanelProps } from './split-panel'
import { getPct, getPx, isPct, isPx } from './hooks'

const ns = useNamespace('splitter-panel')

defineOptions({
  name: 'ElSplitterPanel',
})

const props = defineProps(splitterPanelProps)

const emits = defineEmits(['update:size'])

const addPanel = inject(addPanelKey)!
const removePanel = inject(removePanelKey)!
const panelContext = inject(panelContextKey)!

const panelEl = ref<HTMLDivElement>()
const uid = getCurrentInstance()!.uid

const panel = computed(() => panelContext.panelsMap[uid])

const panelSize = computed(() => {
  if (!panel.value) return 0
  return panelContext.pxSizes[panel.value.index] ?? 0
})

const containerSize = computed(() => panelContext.containerSize)

const nextSize = computed(() => {
  if (!panel.value) return 0
  return panelContext.pxSizes[panel.value.index + 1] ?? 0
})

const nextPanel = computed(() => {
  if (panel.value) {
    return panelContext.panels[panel.value.index + 1]
  }
  return null
})

const isResizable = computed(() => {
  if (!nextPanel.value) return false
  return (
    props.resizable &&
    nextPanel.value?.resizable &&
    // 如果等于0说明折叠了=》判断是否设置最小值 设置了就不许拖拽了
    // If it is 0, it means it is collapsed => check if the minimum value is set
    (panelSize.value !== 0 || !props.min) &&
    (nextSize.value !== 0 || !nextPanel.value.min)
  )
})

// The last panel doesn't need a drag bar
const isShowBar = computed(() => {
  if (!panel.value) return false
  return panel.value?.index !== panelContext.panels.length - 1
})

const startCollapsible = computed(() =>
  isCollapsible(panel.value, panelSize.value, nextPanel.value, nextSize.value)
)

const endCollapsible = computed(() =>
  isCollapsible(nextPanel.value, nextSize.value, panel.value, panelSize.value)
)

function sizeToPx(str: string | number | undefined) {
  if (isPct(str)) {
    return getPct(str) * containerSize.value || 0
  } else if (isPx(str)) {
    return getPx(str)
  }
  return str ?? 0
}

// 双向绑定size
// Two-way binding for size
let isSizeUpdating = false
watch(
  () => props.size,
  () => {
    if (panel.value) {
      const size = sizeToPx(props.size)
      const maxSize = sizeToPx(props.max)
      const minSize = sizeToPx(props.min)

      // 确保在最大最小值范围内
      // Ensure it is within the maximum and minimum value range
      const finalSize = Math.min(Math.max(size, minSize || 0), maxSize || size)

      if (finalSize !== size) {
        isSizeUpdating = true
        emits('update:size', finalSize)
      }

      panel.value.size = finalSize
      nextTick(() => (isSizeUpdating = false))
    }
  }
)

watch(
  () => panel.value?.size,
  (val) => {
    if (!isSizeUpdating && val !== props.size) {
      emits('update:size', val)
    }
  }
)

watch(
  () => props.resizable,
  (val) => {
    if (panel.value) {
      panel.value.resizable = val
    }
  }
)

onMounted(() => {
  addPanel?.({
    el: panelEl.value!,
    uid,
    index: 0,
    ...props,
    collapsible: getCollapsible(props.collapsible),
  })
})

onUnmounted(() => removePanel?.(uid))
</script>

<template>
  <div ref="panelEl" :class="[ns.b()]" :style="{ flexBasis: `${panelSize}px` }">
    <slot />
  </div>
  <SplitBar
    v-if="isShowBar"
    :index="panel?.index"
    :layout="panelContext.layout"
    :resizable="isResizable"
    :start-collapsible="startCollapsible"
    :end-collapsible="endCollapsible"
    @move-start="panelContext.onMoveStart"
    @moving="panelContext.onMoving"
    @move-end="panelContext.onMoveEnd"
    @collapse="panelContext.onCollapse"
  >
    <template #start-collapsible>
      <slot name="start-collapsible" />
    </template>
    <template #end-collapsible>
      <slot name="end-collapsible" />
    </template>
  </SplitBar>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { throwError } from '@element-plus/utils'
import { getCollapsible, isCollapsible } from './hooks/usePanel'
import SplitBar from './split-bar.vue'
import { splitterPanelProps } from './split-panel'
import { getPct, getPx, isPct, isPx } from './hooks'
import { splitterRootContextKey } from './type'

const ns = useNamespace('splitter-panel')

const COMPONENT_NAME = 'ElSplitterPanel'
defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(splitterPanelProps)

const emits = defineEmits<{
  (e: 'update:size', value: number): void
}>()
const splitterContext = inject(splitterRootContextKey)
if (!splitterContext)
  throwError(
    COMPONENT_NAME,
    'usage: <el-splitter><el-splitter-panel /></el-splitter/>'
  )

const { panels, layout, containerSize, pxSizes } = toRefs(splitterContext)

const {
  registerPanel,
  sortPanel,
  unregisterPanel,
  onCollapse,
  onMoveEnd,
  onMoveStart,
  onMoving,
} = splitterContext

const panelEl = ref<HTMLDivElement>()
const uid = getCurrentInstance()!.uid

const index = ref(0)
const panel = computed(() => panels.value[index.value])

const setIndex = (val: number) => {
  index.value = val
}

const panelSize = computed(() => {
  if (!panel.value) return 0
  return pxSizes.value[index.value] ?? 0
})

const nextSize = computed(() => {
  if (!panel.value) return 0
  return pxSizes.value[index.value + 1] ?? 0
})

const nextPanel = computed(() => {
  if (panel.value) {
    return panels.value[index.value + 1]
  }
  return null
})

const isResizable = computed(() => {
  if (!nextPanel.value) return false
  return (
    props.resizable &&
    nextPanel.value?.resizable &&
    // If it is 0, it means it is collapsed => check if the minimum value is set
    (panelSize.value !== 0 || !props.min) &&
    (nextSize.value !== 0 || !nextPanel.value.min)
  )
})

// The last panel doesn't need a drag bar
const isShowBar = computed(() => {
  if (!panel.value) return false
  return index.value !== panels.value.length - 1
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

// Two-way binding for size
let isSizeUpdating = false
watch(
  () => props.size,
  () => {
    if (panel.value) {
      const size = sizeToPx(props.size)
      const maxSize = sizeToPx(props.max)
      const minSize = sizeToPx(props.min)

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
      emits('update:size', val as number)
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

const _panel = reactive({
  el: panelEl.value!,
  uid,
  setIndex,
  ...props,
  collapsible: getCollapsible(props.collapsible),
})

registerPanel(_panel)
onMounted(() => {
  sortPanel(_panel)
})

onUnmounted(() => unregisterPanel?.(uid))
</script>

<template>
  <div
    ref="panelEl"
    :class="[ns.b()]"
    :style="{ flexBasis: `${panelSize}px` }"
    v-bind="$attrs"
  >
    <slot />
  </div>
  <SplitBar
    v-if="isShowBar"
    :index="index"
    :layout="layout"
    :resizable="isResizable"
    :start-collapsible="startCollapsible"
    :end-collapsible="endCollapsible"
    @move-start="onMoveStart"
    @moving="onMoving"
    @move-end="onMoveEnd"
    @collapse="onCollapse"
  >
    <template #start-collapsible>
      <slot name="start-collapsible" />
    </template>
    <template #end-collapsible>
      <slot name="end-collapsible" />
    </template>
  </SplitBar>
</template>

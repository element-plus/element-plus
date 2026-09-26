<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { throwError } from '@element-plus/utils'
import { getCollapsible, isCollapsible } from './hooks/usePanel'
import SplitBar from './split-bar.vue'
import { splitterPanelEmits } from './split-panel'
import { getPct, getPx, isFixedSize, isPct, isPx, isZeroSize } from './hooks'
import { splitterRootContextKey } from './type'

import type { SplitterPanelProps } from './split-panel'

const ns = useNamespace('splitter-panel')

const COMPONENT_NAME = 'ElSplitterPanel'
defineOptions({
  name: COMPONENT_NAME,
})

const props = withDefaults(defineProps<SplitterPanelProps>(), {
  resizable: true,
})

const emits = defineEmits(splitterPanelEmits)
const splitterContext = inject(splitterRootContextKey)
if (!splitterContext)
  throwError(
    COMPONENT_NAME,
    'usage: <el-splitter><el-splitter-panel /></el-splitter/>'
  )

const { panels, layout, lazy, containerSize, pxSizes } = toRefs(splitterContext)

const {
  registerPanel,
  unregisterPanel,
  onCollapse,
  onMoveEnd,
  onMoveStart,
  onMoving,
} = splitterContext

// A "0px" panel has no width to hold on to - `min` is what it expands to, so
// it is left unpinned like the other zero-size declarations. Anything else is
// pinned to its width *after* `min`/`max`, so the pin can't smuggle a value
// past the limits the size watcher enforces.
const pinnedPxSize = (size: string | number | undefined) => {
  if (!isFixedSize(size) || isZeroSize(size)) return undefined
  return clampToLimits(getPx(size as string))
}

const clampToLimits = (px: number) => {
  const maxSize = sizeToPx(props.max)
  const minSize = sizeToPx(props.min)
  return Math.min(Math.max(px, Number(minSize) || 0), Number(maxSize) || px)
}

const panelEl = ref<HTMLDivElement>()
const instance = getCurrentInstance()!
const uid = instance.uid

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

// `v-model:size` writes the internal pixel snapshots emitted below straight
// back into `props.size`, which would make an authored "50%" look like an
// authored `500`. Track what was actually declared by ignoring the values we
// emitted ourselves, so the panel's size mode survives a collapse cycle.
// Only a write-back within the same tick counts as that echo - an emit the
// parent debounced or ignored must not shadow a real `size` change later on.
// A separate flag rather than just comparing against `lastEmittedSize`: at
// rest that value is `undefined`, so a parent genuinely clearing `size` would
// otherwise look like an echo of an emit that never happened.
let hasPendingEcho = false
let lastEmittedSize: number | undefined
const declaredSize = ref<string | number | undefined | null>(props.size)

const rememberEmittedSize = (val: number) => {
  hasPendingEcho = true
  lastEmittedSize = val
  nextTick(() => {
    hasPendingEcho = false
    lastEmittedSize = undefined
  })
}

// Two-way binding for size
let isSizeUpdating = false
watch(
  () => props.size,
  () => {
    if (hasPendingEcho && props.size === lastEmittedSize) {
      hasPendingEcho = false
      lastEmittedSize = undefined
    } else {
      declaredSize.value = props.size
      if (panel.value) {
        panel.value.fixedPxSize = pinnedPxSize(props.size)
        if (!isZeroSize(props.size)) {
          panel.value.isCollapsed = false
        }
      }
    }

    if (!isSizeUpdating && panel.value) {
      if (!containerSize.value) {
        panel.value.size = props.size
        return
      }

      const size = sizeToPx(props.size)
      const maxSize = sizeToPx(props.max)
      const minSize = sizeToPx(props.min)

      // Ensure it is within the maximum and minimum value range
      const finalSize = Math.min(Math.max(size, minSize || 0), maxSize || size)

      if (finalSize !== size) {
        rememberEmittedSize(finalSize)
        emits('update:size', finalSize)
      }

      panel.value.size = finalSize
    }
  }
)

watch(
  () => panel.value?.size,
  (val) => {
    if (val !== props.size) {
      isSizeUpdating = true
      rememberEmittedSize(val as number)
      emits('update:size', val as number)
      nextTick(() => (isSizeUpdating = false))
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
  uid,
  getVnode: () => instance.vnode,
  setIndex,
  ...props,
  collapsible: computed(() => getCollapsible(props.collapsible)),
  // Tied to the declared size (not the internal `size` below, which useResize
  // overwrites with a live raw px number while dragging/collapsing) so a
  // panel's declared size mode survives those internal mutations.
  isFixedSize: computed(() => isFixedSize(declaredSize.value)),
  // Seeded from the declared "Npx" width and kept up to date by drags (see
  // useResize) - collapsing a neighbour must not redefine what this panel is
  // pinned to, but the user dragging it deliberately must.
  fixedPxSize: pinnedPxSize(props.size),
  isZeroSize: computed(() => isZeroSize(declaredSize.value)),
})

registerPanel(_panel)

onBeforeUnmount(() => unregisterPanel(_panel))

defineExpose({
  /** @description splitter-panel html element */
  splitterPanelRef: panelEl,
})
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
    :lazy="lazy"
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

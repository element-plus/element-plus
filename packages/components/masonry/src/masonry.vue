<template>
  <div ref="masonryRef" :class="ns.b()" :style="{ height: `${height}px` }">
    <div
      v-for="(item, index) in items"
      :key="getKey(item)"
      ref="itemRefs"
      :class="ns.e('item')"
      :style="{
        width: `${itemWidth}px`,
        left: `${positions[index]?.left ?? 0}px`,
        top: `${positions[index]?.top ?? 0}px`,
      }"
    >
      <slot :item="item" :index="index" />
    </div>
  </div>
</template>

<script lang="ts" setup generic="T = any">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  watch,
} from 'vue'
import {
  breakpointsElement,
  useBreakpoints,
  useElementSize,
  useResizeObserver,
} from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'

import type { VNode } from 'vue'
import type { MasonryProps, MasonryResponsiveValue } from './masonry'

defineOptions({ name: 'ElMasonry' })

const props = withDefaults(defineProps<MasonryProps<T>>(), {
  items: () => [],
  columns: 3,
  gutter: 0,
})

defineSlots<{
  default?(props: { item: T; index: number }): VNode[]
}>()

const ns = useNamespace('masonry')
const masonryRef = ref<HTMLDivElement>()
const itemRefs = ref<HTMLElement[]>([])
const { width } = useElementSize(masonryRef)
const matchedBreakpoints = useBreakpoints(breakpointsElement, {
  ssrWidth: 0,
}).current()

const resolveResponsiveValue = (
  value: MasonryResponsiveValue,
  fallback = 0
) => {
  if (typeof value === 'number') return value

  const matches = matchedBreakpoints.value
  // Layout's xs breakpoint only matches below sm.
  const breakpoint = [...matches]
    .reverse()
    .find(
      (key) =>
        (key !== 'xs' || matches.length === 1) && value[key] !== undefined
    )
  return (breakpoint ? value[breakpoint] : undefined) ?? fallback
}
const columns = computed(() => {
  const value = props.columns
  return Math.max(
    1,
    Math.floor(
      typeof value === 'number'
        ? value
        : resolveResponsiveValue(value, value.xs ?? 1)
    )
  )
})
const gutter = computed(() => resolveResponsiveValue(props.gutter))
const itemWidth = computed(() =>
  Math.max(
    0,
    (width.value - gutter.value * (columns.value - 1)) / columns.value
  )
)
const height = ref(0)
const positions = shallowRef<{ left: number; top: number }[]>([])
const itemHeights = new WeakMap<Element, number>()
let frame = 0

const getKey = (item: T) =>
  typeof props.itemKey === 'function'
    ? props.itemKey(item)
    : (item[props.itemKey] as string | number)

const layout = () => {
  if (!masonryRef.value) return

  const columnHeights = Array.from({ length: columns.value }, () => 0)
  // Read children in DOM order; template ref arrays do not guarantee item order.
  positions.value = Array.from(masonryRef.value.children).map((element) => {
    const column = columnHeights.indexOf(Math.min(...columnHeights))
    const top = columnHeights[column]
    columnHeights[column] +=
      (itemHeights.get(element) ?? (element as HTMLElement).offsetHeight) +
      gutter.value
    return { left: column * (itemWidth.value + gutter.value), top }
  })
  height.value = Math.max(0, Math.max(...columnHeights) - gutter.value)
}

const scheduleLayout = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(layout)
}

useResizeObserver(
  itemRefs,
  (entries) => {
    for (const entry of entries) {
      const borderBoxSize = entry.borderBoxSize as
        ResizeObserverSize[] | ResizeObserverSize | undefined
      const borderBox = Array.isArray(borderBoxSize)
        ? borderBoxSize[0]
        : borderBoxSize
      let itemHeight = borderBox?.blockSize
      if (itemHeight === undefined) {
        const style = getComputedStyle(entry.target)
        itemHeight = [
          style.paddingTop,
          style.paddingBottom,
          style.borderTopWidth,
          style.borderBottomWidth,
        ].reduce(
          (height, value) => height + (Number.parseFloat(value) || 0),
          entry.contentRect.height
        )
      }
      itemHeights.set(entry.target, itemHeight)
    }
    scheduleLayout()
  },
  { box: 'border-box' }
)
watch([width, columns, gutter, () => props.items.map(getKey)], scheduleLayout, {
  flush: 'post',
})
onMounted(scheduleLayout)
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

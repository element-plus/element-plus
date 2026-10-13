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
import { useElementSize, useResizeObserver } from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'

import type { VNode } from 'vue'
import type { MasonryProps } from './masonry'

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
const columns = computed(() => Math.max(1, Math.floor(props.columns)))
const itemWidth = computed(() =>
  Math.max(
    0,
    (width.value - props.gutter * (columns.value - 1)) / columns.value
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
      props.gutter
    return { left: column * (itemWidth.value + props.gutter), top }
  })
  height.value = Math.max(0, Math.max(...columnHeights) - props.gutter)
}

const scheduleLayout = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(layout)
}

useResizeObserver(
  itemRefs,
  (entries) => {
    for (const entry of entries) {
      itemHeights.set(
        entry.target,
        entry.borderBoxSize?.[0]?.blockSize ??
          (entry.target as HTMLElement).offsetHeight
      )
    }
    scheduleLayout()
  },
  { box: 'border-box' }
)
watch(
  [width, columns, () => props.gutter, () => props.items.map(getKey)],
  scheduleLayout,
  { flush: 'post' }
)
onMounted(scheduleLayout)
onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

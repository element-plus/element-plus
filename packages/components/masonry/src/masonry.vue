<template>
  <div :class="ns.b()">
    <div
      ref="contentRef"
      :class="ns.e('content')"
      :style="{ height: `${height}px` }"
    >
      <div
        v-for="(item, index) in items"
        :key="getKey(item, index)"
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
import {
  cAF,
  isArray,
  isFunction,
  isNumber,
  isUndefined,
  rAF,
} from '@element-plus/utils'

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
const contentRef = ref<HTMLDivElement>()
const itemRefs = ref<HTMLElement[]>([])
const { width } = useElementSize(contentRef)
const matchedBreakpoints = useBreakpoints(breakpointsElement, {
  ssrWidth: 0,
}).current()

const resolveResponsiveValue = (
  value: MasonryResponsiveValue<number | [number, number]>,
  fallback = 0
) => {
  if (isNumber(value) || isArray(value)) return value

  const breakpoint = [...matchedBreakpoints.value]
    .reverse()
    .find((key) => !isUndefined(value[key]))
  return breakpoint ? value[breakpoint]! : fallback
}
const columns = computed(() =>
  Math.max(1, Math.floor(resolveResponsiveValue(props.columns, 1) as number))
)
const gutter = computed<[number, number]>(() => {
  const value = resolveResponsiveValue(props.gutter, 0)
  return isArray(value) ? [value[0], value[1]] : [value, value]
})
const itemWidth = computed(() =>
  Math.max(
    0,
    (width.value - gutter.value[0] * (columns.value - 1)) / columns.value
  )
)
const height = ref(0)
const positions = shallowRef<{ left: number; top: number }[]>([])
const itemHeights = new WeakMap<Element, number>()
let rAFId = 0

const getKey = (item: T, index: number) => {
  const key = isFunction(props.itemKey)
    ? props.itemKey(item)
    : props.itemKey
      ? (item?.[props.itemKey] as PropertyKey)
      : index
  return key ?? index
}

const layout = () => {
  if (!contentRef.value) return

  const [horizontalGutter, verticalGutter] = gutter.value
  const columnHeights = Array.from({ length: columns.value }, () => 0)
  // Read children in DOM order; template ref arrays do not guarantee item order.
  positions.value = Array.from(contentRef.value.children).map((element) => {
    const column = columnHeights.indexOf(Math.min(...columnHeights))
    const top = columnHeights[column]
    columnHeights[column] +=
      (itemHeights.get(element) ?? (element as HTMLElement).offsetHeight) +
      verticalGutter
    return { left: column * (itemWidth.value + horizontalGutter), top }
  })
  height.value = Math.max(0, Math.max(...columnHeights) - verticalGutter)
}

const scheduleLayout = () => {
  cAF(rAFId)
  rAFId = rAF(layout)
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
onBeforeUnmount(() => cAF(rAFId))
</script>

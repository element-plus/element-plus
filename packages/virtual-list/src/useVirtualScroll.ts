import { $ } from '@element-plus/utils/util'
import { ref, computed } from 'vue'

export type Direction = 'h' | 'v'

export interface ElVirtualScrollProps<T> {
  windowSize: number
  direction: 'h' | 'v' // h stands for horizontal, v stands for virtical, defaults to vertical
  data: Array<T>
  rowHeight: number
  cache: number
}

export default function useVirtualScroll<T>(props: ElVirtualScrollProps<T>) {
  const scrollTop = ref(0)

  const startNode = computed(() => {
    return (
      Math.max(0, Math.floor($(scrollTop) / props.rowHeight) - props.cache)
    )
  })

  const viewportStyle = computed(() => {
    return {
      height: `${props.windowSize}px`,
    }
  })

  const contentStyle = computed(() => {
    // make this dynamic
    return {
      height: `${props.data.length * props.rowHeight}px`,
    }
  })

  const itemContainerStyle = computed(() => {
    const offsetY = $(startNode) * props.rowHeight
    return {
      transform: `translateY(${offsetY}px)`,
    }
  })

  const onScroll = (e: Event) => {
    requestAnimationFrame(() => {
      scrollTop.value = (e.target as HTMLElement).scrollTop
    })
  }

  const itemStyle = computed(() => {
    return {
      height: `${props.rowHeight}px`,
    }
  })

  const window = computed(() => {
    const size =  Math.min(
      props.data.length - $(startNode),
      Math.ceil(
        props.windowSize / props.rowHeight + 2 * props.cache,
      ),
    )
    return props.data.slice($(startNode), $(startNode) + size)
  })

  return {
    contentStyle,
    itemContainerStyle,
    itemStyle,
    startNode,
    viewportStyle,
    window,
    onScroll,
  }
}

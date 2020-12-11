import { $ } from '@element-plus/utils/util'
import { ref, computed, watch } from 'vue'

export type Direction = 'h' | 'v'

export interface ElVirtualScrollProps<T> {
  windowSize: number
  direction: Direction // h stands for horizontal, v stands for vertical, defaults to vertical
  data: Array<T>
  itemSize: number
  poolSize: number
}

export default function useVirtualScroll<T>(props: ElVirtualScrollProps<T>) {
  const offset = ref(0)

  const cache = ref(Math.floor(props.poolSize / 3))

  // the reason of not using computed here is that, keys are accessed frequently
  // in order to avoid unnecessary overhead, we decided to use watch the `direction`
  // because direction won't gets changed very frequently.
  const isVerticalInit = props.direction === 'v'
  const isVertical = ref(isVerticalInit)
  const sizeKey = ref(`client${isVerticalInit? 'Height' : 'Width'}`)
  const scrollKey = ref(`scroll${isVerticalInit? 'Top' : 'Left'}`)
  const translateKey = ref(`${isVerticalInit? 'Y' : 'X'}`)
  const styleKey = ref(`${isVerticalInit ? 'height' : 'width'}`)

  const renderingItems = computed(() => props.poolSize + 2 * $(cache))

  // offset sets the value of
  const startNode = computed(() => {
    return Math.max(0, Math.floor($(offset) / props.itemSize) - $(cache))
  })

  const viewportStyle = computed(() => {
    return {
      [$(styleKey)]: `${props.windowSize}px`,
    }
  })

  const contentStyle = computed(() => {
    // make this dynamic
    return {
      [$(styleKey)]: `${props.data.length * props.itemSize}px`,
    }
  })

  const itemContainerStyle = computed(() => {
    const _offset = $(startNode) * props.itemSize
    return {
      transform: `translate${$(translateKey)}(${_offset}px)`,
    }
  })

  const itemStyle = computed(() => {
    return {
      [$(styleKey)]: `${props.itemSize}px`,
    }
  })

  let animationHandle = null

  const onScroll = (e: Event) => {
    if (animationHandle) {
      cancelAnimationFrame(animationHandle)
    }
    animationHandle = requestAnimationFrame(() => {
      offset.value = (e.target as HTMLElement)[$(scrollKey)]
    })
  }

  const window = computed(() => {
    const startNodeVal = $(startNode)
    const size = Math.min(
      props.data.length - startNodeVal,
      $(renderingItems),
    )
    return props.data.slice(startNodeVal, startNodeVal + size + 1)
  })

  watch(
    () => props.direction,
    dir => {
      const _isVertical = dir === 'v'
      isVertical.value = _isVertical
      sizeKey.value = `client${_isVertical ? 'Height' : 'Width'}`
      scrollKey.value = `scroll${_isVertical ? 'Top' : 'Left'}`
      translateKey.value = `${_isVertical ? 'Y' : 'X'}`
      styleKey.value = `${_isVertical ? 'height' : 'width'}`
    },
  )

  watch(() => props.poolSize, val => {
    cache.value = Math.floor(val / 3)
  })

  return {
    contentStyle,
    itemContainerStyle,
    itemStyle,
    viewportStyle,
    startNode,
    renderingItems,
    window,
    onScroll,
  }
}

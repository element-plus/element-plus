import { ref, computed, watch } from 'vue'
import isServer from '@element-plus/utils/isServer'
import { $ } from '@element-plus/utils/util'
import throwError from '@element-plus/utils/error'

export type Direction = 'h' | 'v'
export type Alignment = 'head' | 'center' | 'tail'
export interface ElVirtualScrollProps<T> {
  windowSize: number
  direction: Direction // h stands for horizontal, v stands for vertical, defaults to vertical
  data: Array<T>
  itemSize: number
  poolSize: number
}

export default function useVirtualScroll<T>(props: ElVirtualScrollProps<T>) {
  const viewportRef = ref<HTMLElement>()
  const offset = ref(0)
  const cache = ref(0)

  // the reason of not using computed here is that, keys are accessed frequently
  // in order to avoid unnecessary overhead, we decided to use watch the `direction`
  // because direction won't gets changed very frequently.
  const isVertical = ref(true)
  const sizeKey = ref('')
  const scrollKey = ref('')
  const translateKey = ref()
  const styleKey = ref('')

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
    {
      immediate: true,
    },
  )

  watch(
    () => props.poolSize,
    val => {
      cache.value = Math.floor(val / 3)
    },
    {
      immediate: true,
    },
  )

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
    const size = Math.min(props.data.length - startNodeVal, $(renderingItems))
    return props.data.slice(startNodeVal, startNodeVal + size)
  })

  const scrollTo = (idx: number, alignment: Alignment = 'head') => {
    if (isServer) return
    if (idx < 0 || idx > props.data.length) {
      throwError('ElVirtualList]', 'Out of list range')
    }
    let _offset: number
    switch (alignment) {
      case 'head': {
        _offset = idx * props.itemSize
        break
      }
      case 'center': {
        _offset =
          (idx -
            Math.floor(Math.floor(props.windowSize / props.itemSize) / 2)) *
          props.itemSize
        break
      }
      case 'tail': {
        _offset =
          (idx - Math.floor(props.windowSize / props.itemSize) + 1) * props.itemSize
        break
      }
      default: {
        throwError('[ElVirtualList]', 'Unsupported alignment')
      }
    }
    requestAnimationFrame(() => {
      offset.value = _offset
      viewportRef.value[$(scrollKey)] = _offset
    })
  }

  return {
    viewportRef,
    contentStyle,
    itemContainerStyle,
    itemStyle,
    viewportStyle,
    startNode,
    renderingItems,
    window,
    onScroll,
    scrollTo,
  }
}

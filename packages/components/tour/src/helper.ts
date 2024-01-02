import {
  camelize,
  computed,
  isVNode,
  onBeforeUnmount,
  onMounted,
  ref,
  unref,
  watch,
  watchEffect,
} from 'vue'
import {
  arrow,
  autoUpdate,
  computePosition,
  detectOverflow,
  flip,
  offset as offsetMiddelware,
  shift,
} from '@floating-ui/dom'
import { hasOwn, isArray, isClient, keysOf } from '@element-plus/utils'

import type {
  CSSProperties,
  Component,
  ComputedRef,
  InjectionKey,
  Ref,
  SetupContext,
  VNode,
} from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { PosInfo, TourGap, TourMask } from './types'
import type {
  ComputePositionReturn,
  Middleware,
  Placement,
  Strategy,
  VirtualElement,
} from '@floating-ui/dom'

export const useTarget = (
  target: Ref<HTMLElement | null | undefined>,
  open: Ref<boolean>,
  gap: Ref<TourGap>,
  mergedMask: Ref<TourMask>,
  scrollIntoViewOptions: Ref<boolean | ScrollIntoViewOptions>
) => {
  const posInfo: Ref<PosInfo | null> = ref(null)

  const updatePosInfo = () => {
    if (!target.value || !open.value) {
      posInfo.value = null
      return
    }
    if (!isInViewPort(target.value) && open.value) {
      target.value.scrollIntoView(scrollIntoViewOptions.value)
    }
    const { left, top, width, height } = target.value.getBoundingClientRect()
    posInfo.value = {
      left,
      top,
      width,
      height,
      radius: 0,
    }
  }

  onMounted(() => {
    watch(
      [open, target],
      () => {
        updatePosInfo()
      },
      {
        immediate: true,
      }
    )
    window.addEventListener('resize', updatePosInfo)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updatePosInfo)
  })

  const getGapOffset = (index: number) =>
    (isArray(gap.value.offset) ? gap.value.offset[index] : gap.value.offset) ??
    6

  const mergedPosInfo = computed(() => {
    if (!posInfo.value) return posInfo.value

    const gapOffsetX = getGapOffset(0)
    const gapOffsetY = getGapOffset(1)
    const gapRadius = gap.value?.radius || 2

    return {
      left: posInfo.value.left - gapOffsetX,
      top: posInfo.value.top - gapOffsetY,
      width: posInfo.value.width + gapOffsetX * 2,
      height: posInfo.value.height + gapOffsetY * 2,
      radius: gapRadius,
    }
  })

  const triggerTarget = computed(() => {
    if (!mergedMask.value || !target.value || !window.DOMRect) {
      return target.value || undefined
    }

    return {
      getBoundingClientRect() {
        return window.DOMRect.fromRect({
          width: mergedPosInfo.value?.width || 0,
          height: mergedPosInfo.value?.height || 0,
          x: mergedPosInfo.value?.left || 0,
          y: mergedPosInfo.value?.top || 0,
        })
      },
    }
  })

  return {
    mergedPosInfo,
    triggerTarget,
  }
}

export interface TourContext {
  current: Ref<number>
  total: ComputedRef<number>
  showClose: Ref<boolean>
  closeIcon: Ref<string | Component>
  mergedType: Ref<'default' | 'primary' | undefined>
  ns: UseNamespaceReturn
  slots: SetupContext['slots']
  updateModelValue(modelValue: boolean): void
  onClose(): void
  onFinish(): void
  onChange(): void
}

export const tourKey: InjectionKey<TourContext> = Symbol('ElTour')

function isInViewPort(element: HTMLElement) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  const { top, right, bottom, left } = element.getBoundingClientRect()

  return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight
}

const isSameProps = (a: Record<string, any>, b: Record<string, any>) => {
  if (Object.keys(a).length !== Object.keys(b).length) return false
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false
    }
  }
  return true
}

export function isSameSteps(a: any[], b: any[]) {
  if (a.length !== b.length) return false
  for (const [index] of a.entries()) {
    if (isSameProps(a[index], b[index])) {
      return false
    }
  }
  return true
}

export const getNormalizedProps = (node: VNode, booleanKeys: string[]) => {
  if (!isVNode(node)) {
    return {}
  }

  const raw = node.props || {}
  const type = (node.type as any)?.props || {}
  const props: Record<string, any> = {}
  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], 'default')) {
      props[key] = type[key].default
    }
  })

  Object.keys(raw).forEach((key) => {
    const cameKey = camelize(key)
    props[cameKey] = raw[key]
    if (booleanKeys.includes(cameKey) && props[cameKey] === '') {
      props[cameKey] = true
    }
  })

  return props
}

export const useFloating = (
  referenceRef: Ref<HTMLElement | VirtualElement | null>,
  contentRef: Ref<HTMLElement | null>,
  arrowRef: Ref<HTMLElement | null>,
  placement: Ref<Placement | undefined>,
  strategy: Ref<Strategy>,
  offset: Ref<number>,
  zIndex: Ref<number>,
  showArrow: Ref<boolean>
) => {
  const x = ref<number>()
  const y = ref<number>()
  const middlewareData = ref<ComputePositionReturn['middlewareData']>({})

  const states = {
    x,
    y,
    placement,
    strategy,
    middlewareData,
  } as const

  const middleware = computed(() => {
    const _middleware: Middleware[] = [
      offsetMiddelware(unref(offset)),
      flip(),
      shift(),
      overflowMiddleware(),
    ]

    if (unref(showArrow) && unref(arrowRef)) {
      _middleware.push(
        arrow({
          element: unref(arrowRef)!,
        })
      )
    }
    return _middleware
  })

  const update = async () => {
    if (!isClient) return

    const referenceEl = unref(referenceRef)
    const contentEl = unref(contentRef)
    if (!referenceEl || !contentEl) return

    const data = await computePosition(referenceEl, contentEl, {
      placement: unref(placement),
      strategy: unref(strategy),
      middleware: unref(middleware),
    })

    keysOf(states).forEach((key) => {
      states[key].value = data[key]
    })
  }

  const contentStyle = computed<CSSProperties>(() => {
    if (!unref(referenceRef)) {
      return {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        maxWidth: '100vw',
        zIndex: unref(zIndex),
      }
    }

    const { overflow } = unref(middlewareData)

    return {
      position: unref(strategy),
      zIndex: unref(zIndex),
      top: unref(y) != null ? `${unref(y)}px` : '',
      left: unref(x) != null ? `${unref(x)}px` : '',
      maxWidth: overflow?.maxWidth ? `${overflow?.maxWidth}px` : '',
    }
  })

  const arrowStyle = computed<CSSProperties>(() => {
    if (!unref(showArrow)) return {}

    const { arrow } = unref(middlewareData)
    return {
      left: arrow?.x != null ? `${arrow?.x}px` : '',
      top: arrow?.y != null ? `${arrow?.y}px` : '',
    }
  })

  let cleanup: any
  onMounted(() => {
    cleanup = autoUpdate(unref(referenceRef)!, unref(contentRef)!, update)

    watchEffect(() => {
      update()
    })
  })

  onBeforeUnmount(() => {
    cleanup && cleanup()
  })

  return {
    update,
    contentStyle,
    arrowStyle,
  }
}

const overflowMiddleware = (): Middleware => {
  return {
    name: 'overflow',
    async fn(state) {
      const overflow = await detectOverflow(state)
      let overWidth = 0
      if (overflow.left > 0) overWidth = overflow.left
      if (overflow.right > 0) overWidth = overflow.right
      const floatingWidth = state.rects.floating.width
      return {
        data: {
          maxWidth: floatingWidth - overWidth,
        },
      }
    },
  }
}

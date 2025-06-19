import {
  computed,
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
import {
  isArray,
  isClient,
  isFunction,
  isString,
  keysOf,
} from '@element-plus/utils'

import type {
  CSSProperties,
  Component,
  InjectionKey,
  Ref,
  SetupContext,
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
import type { TourStepProps } from './step'

export const useTarget = (
  target: Ref<
    string | HTMLElement | (() => HTMLElement | null) | null | undefined
  >,
  open: Ref<boolean>,
  gap: Ref<TourGap>,
  mergedMask: Ref<TourMask>,
  scrollIntoViewOptions: Ref<boolean | ScrollIntoViewOptions>
) => {
  const posInfo: Ref<PosInfo | null> = ref(null)

  const getTargetEl = () => {
    let targetEl: HTMLElement | null | undefined
    if (isString(target.value)) {
      targetEl = document.querySelector<HTMLElement>(target.value)
    } else if (isFunction(target.value)) {
      targetEl = target.value()
    } else {
      targetEl = target.value
    }
    return targetEl
  }

  const updatePosInfo = () => {
    const targetEl = getTargetEl()
    if (!targetEl || !open.value) {
      posInfo.value = null
      return
    }
    if (!isInViewPort(targetEl)) {
      targetEl.scrollIntoView(scrollIntoViewOptions.value)
    }
    const { left, top, width, height } = targetEl.getBoundingClientRect()
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
    const targetEl = getTargetEl()
    if (!mergedMask.value || !targetEl || !window.DOMRect) {
      return targetEl || undefined
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
  currentStep: Ref<TourStepProps | undefined>
  current: Ref<number>
  total: Ref<number>
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
    const referenceEl = unref(referenceRef)
    const contentEl = unref(contentRef)
    if (referenceEl && contentEl) {
      cleanup = autoUpdate(referenceEl, contentEl, update)
    }

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

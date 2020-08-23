import { ref, watchEffect, onMounted, onUnmounted, Ref, computed } from 'vue'
import { Instance, createPopper, Placement, PositioningStrategy } from '@popperjs/core'

export interface PopperArrow {
  element: HTMLElement
  offset: number
}

export interface PopperOptions {
  appendToBody: boolean
  boundariesPadding: number
  placement: Placement
  offset: number | [number, number]
  arrow: PopperArrow
  fallbackPlacements: string[]
}

export function usePopper(reference: Ref<HTMLElement>, defaultOptions?: Partial<PopperOptions>) {
  const instance = ref<Instance>(null)
  const popperRef = ref<HTMLElement>(null)
  const { appendToBody = true, ...opts } = defaultOptions
  const options = ref(opts)

  const popperOptions = computed(() => {
    return {
      placement: options.value.placement,
      strategy: 'fixed' as PositioningStrategy,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: options.value.offset,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            padding: options.value.boundariesPadding,
            altBoundary: true,
            tether: false,
          },
        },
        {
          name: 'arrow',
          options: {
            element: options.value.arrow.element,
            padding: options.value.arrow.offset,
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: options.value.fallbackPlacements || ['top', 'right'],
          },
        },
      ],
    }
  })

  const create = () => {
    instance.value = createPopper(reference.value, popperRef.value, {
      ...popperOptions.value,
      onFirstUpdate: () => {
        instance.value.forceUpdate()
      },
    })
  }

  const destroy = () => {
    if (instance.value) {
      instance.value.destroy()
      instance.value = null
    }

    if (popperRef.value && appendToBody) {
      document.body.removeChild(popperRef.value)
    }
  }

  onMounted(() => {
    watchEffect(() => {
      if (reference.value) {
        create()
      }
    })

    if (popperRef.value && appendToBody) {
      document.body.appendChild(popperRef.value)
    }
  })

  onUnmounted(() => {
    destroy()
  })

  return {
    instance,
    popperRef,
    options,
  }
}

import { ref, watchEffect, onMounted, onUnmounted, Ref, computed, watch } from 'vue'
import { Instance, createPopper, Placement, PositioningStrategy } from '@popperjs/core'

export interface PopperArrow {
  element: HTMLElement
  offset: number
}

export interface PopperOptions {
  modelValue: boolean
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
  const visible = ref(false)
  const { appendToBody = true, modelValue = true, ...opts } = defaultOptions
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

  const show = () => (visible.value = true)

  const hide = () => (visible.value = false)

  const create = () => {
    if (instance.value) instance.value.destroy()

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
      popperRef.value = null
    }

    if (popperRef.value && appendToBody) {
      document.body.removeChild(popperRef.value)
    }
  }

  const update = () => {
    if (instance.value) {
      instance.value.update()
    } else {
      create()
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
    visible,
    instance,
    popperRef,
    options,
    update,
    destroy,
    show,
    hide,
  }
}

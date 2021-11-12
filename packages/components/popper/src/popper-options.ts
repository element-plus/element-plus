import { computed, getCurrentInstance, unref } from 'vue'

import type { Ref } from 'vue'
import type { Options } from '@popperjs/core'
import type { UsePopperProps } from './popper'

export const usePopperOptions = (arrowRef: Ref<HTMLElement | undefined>) => {
  const vm = getCurrentInstance()!
  const props = vm.props as UsePopperProps

  return computed<Options>(() => {
    const arrowElement = unref(arrowRef)

    const {
      arrowOffset,
      gpuAcceleration,
      offset,
      placement,
      popperOptions,
      strategy,
    } = props
    return {
      placement,
      strategy,
      ...popperOptions,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, offset ?? 12],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            padding: {
              top: 2,
              bottom: 2,
              left: 5,
              right: 5,
            },
          },
        },
        {
          name: 'flip',
          options: {
            padding: 5,
            fallbackPlacements: [],
          },
        },
        {
          name: 'computeStyles',
          options: {
            gpuAcceleration,
            adaptive: gpuAcceleration,
          },
        },
        ...[
          arrowElement
            ? ({
                name: 'arrow',
                options: {
                  element: arrowElement,
                  padding: arrowOffset ?? 5,
                },
              } as any)
            : undefined,
        ],
        ...(popperOptions?.modifiers ?? []),
      ],
    }
  })
}

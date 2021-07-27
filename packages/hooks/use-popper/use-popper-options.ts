
import type { PropType } from 'vue'
import type { Options } from '@popperjs/core'

export const DEFAULT_FALLBACK_PLACEMENTS = []

export const defaultModifiers = [
  {
    name: 'offset',
    options: {
      offset: [0, 12],
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
      gpuAcceleration: true,
      adaptive: true,
    },
  },
]

export const defaultPopperOptions = {
  type: Object as PropType<Options>,
  default: () => {
    return {
      fallbackPlacements: DEFAULT_FALLBACK_PLACEMENTS,
      strategy: 'fixed',
      modifiers: defaultModifiers,
    }
  },
}

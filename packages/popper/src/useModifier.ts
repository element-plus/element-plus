import { isArray } from '@vue/shared'

interface IBuildModifierOptions {
  arrowOffset: number
  arrowRef: HTMLElement
  boundariesPadding: number
  cutoff: boolean
  offset: [number, number] | number
  showArrow: boolean
  fallbackOptions: Record<string, unknown>
}

export default (options: IBuildModifierOptions) => {
  const offset = isArray(options.offset) ? options.offset.slice(0, 2) : [0, options.offset]
  const modifiers = [
    {
      name: 'offset',
      options: {
        offset,
      },
    },
    {
      name: 'preventOverflow',
      options: {
        padding: options.boundariesPadding,
        altBoundary: true,
        tether: options.cutoff,
      },
    },
    {
      name: 'arrow',
      options: {
        element: options.arrowRef,
        padding: options.arrowOffset,
      },
    },
    {
      name: 'flip',
      options: options.fallbackOptions,
    },
  ]

  return modifiers
}

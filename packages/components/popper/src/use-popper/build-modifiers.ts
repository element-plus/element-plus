import type { StrictModifiers, Placement } from '@popperjs/core'

interface ModifierProps {
  offset?: number
  arrow?: HTMLElement
  arrowOffset?: number
  gpuAcceleration?: boolean
  fallbackPlacements?: Array<Placement>
}

export default function buildModifier(
  props: ModifierProps,
  externalModifiers: StrictModifiers[] = []
) {
  const { arrow, arrowOffset, offset, gpuAcceleration, fallbackPlacements } =
    props

  const modifiers: Array<StrictModifiers> = [
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
        fallbackPlacements: fallbackPlacements ?? [],
      },
    },
    {
      name: 'computeStyles',
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration,
      },
    },
    // tippyModifier,
  ]

  if (arrow) {
    modifiers.push({
      name: 'arrow',
      options: {
        element: arrow,
        // the arrow size is an equailateral triangle with 10px side length, the 3rd side length ~ 14.1px
        // adding a offset to the ceil of 4.1 should be 5 this resolves the problem of arrow overflowing out of popper.
        padding: arrowOffset ?? 5,
      },
    })
  }

  modifiers.push(...externalModifiers)
  return modifiers
}

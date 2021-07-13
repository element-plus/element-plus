import { computed, getCurrentInstance } from 'vue'

import type { Ref } from 'vue'
import type { Options, Placement, StrictModifiers } from '@popperjs/core'

interface IUsePopperProps {
  popperOptions: Options
  arrowOffset: number
  offset: number
  placement: Placement
  gpuAcceleration: boolean
  fallbackPlacements: Array<Placement>
}

export const usePopperOptions = (arrowRef: Ref<HTMLElement>) => {
  const vm = getCurrentInstance()

  const props = vm.props as unknown as IUsePopperProps

  return computed(() => {
    return {
      placement: props.placement,
      ...props.popperOptions,
      // Avoiding overriding modifiers.
      modifiers: buildModifiers({
        arrow: arrowRef.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
        gpuAcceleration: props.gpuAcceleration,
        fallbackPlacements: props.fallbackPlacements,
      }, props.popperOptions?.modifiers),
    }
  })
}

interface ModifierProps {
  offset?: number
  arrow?: HTMLElement
  arrowOffset?: number
  gpuAcceleration?: boolean
  fallbackPlacements?: Array<Placement>
}

function buildModifiers(props: ModifierProps, externalModifiers: StrictModifiers[] = []) {

  const {
    arrow,
    arrowOffset,
    offset,
    gpuAcceleration,
    fallbackPlacements,
  } = props

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
        padding: arrowOffset ?? 5,
      },
    })
  }

  modifiers.push(...(externalModifiers))
  return modifiers
}

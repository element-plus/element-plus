import { computed } from 'vue'
import buildModifiers from './build-modifiers'

import type { Ref } from 'vue'
import type { Options, Placement } from '@popperjs/core'
import type { RefElement } from '.'

interface IUsePopperProps {
  popperOptions: Partial<Options>
  arrowOffset: number
  offset: number
  placement: Placement
  gpuAcceleration: boolean
  fallbackPlacements: Array<Placement>
}

interface IUsePopperState {
  arrow: Ref<RefElement>
}

export default function usePopperOptions(
  props: IUsePopperProps,
  state: IUsePopperState
) {
  return computed(() => ({
    placement: props.placement,
    ...props.popperOptions,
    // Avoiding overriding modifiers.
    modifiers: buildModifiers(
      {
        arrow: state.arrow.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
        gpuAcceleration: props.gpuAcceleration,
        fallbackPlacements: props.fallbackPlacements,
      },
      props.popperOptions?.modifiers
    ),
  }))
}

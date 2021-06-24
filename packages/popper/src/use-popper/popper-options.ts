import { computed } from 'vue'
import buildModifiers from './build-modifiers'

import type { Ref } from 'vue'
import type { IPopperOptions } from '../../../hooks/use-teleport/props'
interface IUsePopperState {
  arrow: Ref<HTMLElement>
}

export default function usePopperOptions(props: IPopperOptions, state: IUsePopperState) {
  return computed(() => {
    return {
      placement: props.placement,
      ...props.popperOptions,
      // Avoiding overriding modifiers.
      modifiers: buildModifiers({
        arrow: state.arrow.value,
        arrowOffset: props.arrowOffset,
        offset: props.offset,
        gpuAcceleration: props.gpuAcceleration,
        fallbackPlacements: props.fallbackPlacements,
      }, props.popperOptions?.modifiers),
    }
  })
}

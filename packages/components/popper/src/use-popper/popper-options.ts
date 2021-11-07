import { computed } from 'vue'
import buildModifiers from './build-modifiers'

import type { PopperProps, RefElement } from './popper'
import type { Ref } from 'vue'

interface IUsePopperState {
  arrow: Ref<RefElement>
}

export default function usePopperOptions(
  props: PopperProps,
  state: IUsePopperState
) {
  return computed(() => {
    return {
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
    }
  })
}

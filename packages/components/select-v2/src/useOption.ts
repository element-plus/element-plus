import type { OptionV2Props } from './token'
import type { OptionV2EmitFn } from './defaults'

export function useOption(
  props: OptionV2Props,
  { emit }: { emit: OptionV2EmitFn }
) {
  return {
    hoverItem: () => {
      if (!props.disabled) {
        emit('hover', props.index)
      }
    },
    selectOptionClick: () => {
      if (!props.disabled) {
        emit('select', props.item, props.index)
      }
    },
  }
}

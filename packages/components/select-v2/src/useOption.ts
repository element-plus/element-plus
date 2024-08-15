// @ts-nocheck
import type { IOptionV2Props } from './token'

export function useOption(props: IOptionV2Props, { emit }) {
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

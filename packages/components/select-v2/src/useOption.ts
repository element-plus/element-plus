import type { IOptionProps } from './token'

export function useOption(props: IOptionProps, { emit }) {
  return {
    hoverItem: () => {
      emit('hover', props.index)
    },
    selectOptionClick: () => {
      if (!props.disabled) {
        emit('select', props.item, props.index)
      }
    },
  }
}

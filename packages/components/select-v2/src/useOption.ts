import type { IOptionProps } from '@element-plus/tokens/select-v2'

export function useOption(props: IOptionProps, { emit }) {
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

import type { IOptionProps } from '@element-plus/tokens'

export function useOption(
  props: IOptionProps,
  emit: (event: string, ...args: any[]) => void
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

import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useDisabled } from '@element-plus/hooks'
import type { ButtonProps } from './button'

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString()
}

export function useButtonCustomStyle(props: ButtonProps) {
  const _disabled = useDisabled()

  // calculate hover & active color by custom color
  // only work when custom color
  return computed(() => {
    let styles: Record<string, string> = {}

    const buttonColor = props.color

    if (buttonColor) {
      const color = new TinyColor(buttonColor)
      const activeBgColor = props.dark
        ? color.tint(20).toString()
        : darken(color, 20)

      if (props.plain) {
        styles = {
          '--el-button-bg-color': props.dark
            ? darken(color, 90)
            : color.tint(90).toString(),
          '--el-button-text-color': buttonColor,
          '--el-button-border-color': props.dark
            ? darken(color, 50)
            : color.tint(50).toString(),
          '--el-button-hover-text-color': 'var(--el-color-white)',
          '--el-button-hover-bg-color': buttonColor,
          '--el-button-hover-border-color': buttonColor,
          '--el-button-active-bg-color': activeBgColor,
          '--el-button-active-text-color': 'var(--el-color-white)',
          '--el-button-active-border-color': activeBgColor,
        }

        if (_disabled.value) {
          styles['--el-button-disabled-bg-color'] = props.dark
            ? darken(color, 90)
            : color.tint(90).toString()
          styles['--el-button-disabled-text-color'] = props.dark
            ? darken(color, 50)
            : color.tint(50).toString()
          styles['--el-button-disabled-border-color'] = props.dark
            ? darken(color, 80)
            : color.tint(80).toString()
        }
      } else {
        const hoverBgColor = props.dark
          ? darken(color, 30)
          : color.tint(30).toString()
        const textColor = color.isDark()
          ? 'var(--el-color-white)'
          : 'var(--el-color-black)'
        styles = {
          '--el-button-bg-color': buttonColor,
          '--el-button-text-color': textColor,
          '--el-button-border-color': buttonColor,
          '--el-button-hover-bg-color': hoverBgColor,
          '--el-button-hover-text-color': textColor,
          '--el-button-hover-border-color': hoverBgColor,
          '--el-button-active-bg-color': activeBgColor,
          '--el-button-active-border-color': activeBgColor,
        }

        if (_disabled.value) {
          const disabledButtonColor = props.dark
            ? darken(color, 50)
            : color.tint(50).toString()
          styles['--el-button-disabled-bg-color'] = disabledButtonColor
          styles['--el-button-disabled-text-color'] = props.dark
            ? 'rgba(255, 255, 255, 0.5)'
            : 'var(--el-color-white)'
          styles['--el-button-disabled-border-color'] = disabledButtonColor
        }
      }
    }

    return styles
  })
}

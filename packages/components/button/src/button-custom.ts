import { type Ref, computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useDisabled, useNamespace } from '@element-plus/hooks'
import type { ButtonProps } from './button'

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString()
}

export function useButtonCustomStyle(
  props: ButtonProps,
  instance: Ref<Element>
) {
  const _disabled = useDisabled()
  const ns = useNamespace('button')
  // calculate hover & active color by custom color
  // only work when custom color
  return computed(() => {
    let styles: Record<string, string> = {}
    if (!props.color) return props.style
    const buttonColor = getButtonColor(
      props?.style || {},
      props.color as string,
      instance.value
    )
    const color = new TinyColor(buttonColor)
    const activeBgColor = props.dark
      ? color.tint(20).toString()
      : darken(color, 20)
    if (props.plain) {
      styles = ns.cssVarBlock({
        'bg-color': props.dark ? darken(color, 90) : color.tint(90).toString(),
        'text-color': buttonColor,
        'border-color': props.dark
          ? darken(color, 50)
          : color.tint(50).toString(),
        'hover-text-color': `var(${ns.cssVarName('color-white')})`,
        'hover-bg-color': buttonColor,
        'hover-border-color': buttonColor,
        'active-bg-color': activeBgColor,
        'active-text-color': `var(${ns.cssVarName('color-white')})`,
        'active-border-color': activeBgColor,
      })
      if (_disabled.value) {
        styles[ns.cssVarBlockName('disabled-bg-color')] = props.dark
          ? darken(color, 90)
          : color.tint(90).toString()
        styles[ns.cssVarBlockName('disabled-text-color')] = props.dark
          ? darken(color, 50)
          : color.tint(50).toString()
        styles[ns.cssVarBlockName('disabled-border-color')] = props.dark
          ? darken(color, 80)
          : color.tint(80).toString()
      }
    } else {
      const hoverBgColor = props.dark
        ? darken(color, 30)
        : color.tint(30).toString()
      const textColor = color.isDark()
        ? `var(${ns.cssVarName('color-white')})`
        : `var(${ns.cssVarName('color-black')})`
      styles = ns.cssVarBlock({
        'bg-color': buttonColor,
        'text-color': textColor,
        'border-color': buttonColor,
        'hover-bg-color': hoverBgColor,
        'hover-text-color': textColor,
        'hover-border-color': hoverBgColor,
        'active-bg-color': activeBgColor,
        'active-border-color': activeBgColor,
      })

      if (_disabled.value) {
        const disabledButtonColor = props.dark
          ? darken(color, 50)
          : color.tint(50).toString()
        styles[ns.cssVarBlockName('disabled-bg-color')] = disabledButtonColor
        styles[ns.cssVarBlockName('disabled-text-color')] = props.dark
          ? 'rgba(255, 255, 255, 0.5)'
          : `var(${ns.cssVarName('color-white')})`
        styles[ns.cssVarBlockName('disabled-border-color')] =
          disabledButtonColor
      }
    }

    return Object.assign(styles, props.style)
  })

  function getButtonColor(
    style: Record<string, string>,
    color: string,
    element: Element
  ) {
    const regInit = /var\(([\w-]+)?\s{0,},\s{0,}(\w{0,})\)/
    const reg = /var\(([\w-]+)\)/
    let baseStyle: string
    if (regInit.test(color)) {
      const [varcss, init] = color.replace(regInit, '$1 $2').split(' ')
      baseStyle = style[varcss] || init || color
      return element
        ? getComputedStyle(element).getPropertyValue(varcss) || baseStyle
        : baseStyle
    }
    const varcss = color.replace(reg, '$1')
    baseStyle = reg.test(color)
      ? style[color.replace(reg, '$1')] || color
      : color
    if (element) {
      const computedStyle = getComputedStyle(element).getPropertyValue(varcss)
      return computedStyle ? computedStyle : baseStyle
    }
    return baseStyle
  }
}

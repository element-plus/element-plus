import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useCssVar } from '@vueuse/core'
import { useNamespace } from '@element-plus/hooks'
import type { TagProps } from './tag'

const ns = useNamespace('tag')
const backNs = useNamespace('')
const toDark = (color: TinyColor, amount = 20) => {
  const bgCssVar = useCssVar(backNs.cssVarName('bg-color'))
  const bgColor = new TinyColor(bgCssVar.value)
  if (bgColor.isDark()) {
    return color.mix(bgColor, amount).toString()
  } else {
    return color.mix('#141414', amount).toString()
  }
}

export const useTagCustomColor = (props: TagProps) => {
  return computed(() => {
    const isDark = props.isDark

    let styles: Record<string, string> = {}
    const tagColor = props.color
    if (tagColor) {
      const color = new TinyColor(tagColor)
      if (props.effect === 'plain') {
        styles = ns.cssVarBlock({
          'text-color': tagColor,
          'border-color': (isDark
            ? toDark(color, 50)
            : color.tint(50)
          ).toString(),
          'hover-color': tagColor,
        })
      } else if (props.effect === 'dark') {
        styles = ns.cssVarBlock({
          'bg-color': color.toString(),
          'text-color': `var(${ns.cssVarName('color-white')})`,
          'border-color': color.toString(),
          'hover-color': (isDark
            ? toDark(color, 50)
            : color.tint(50)
          ).toString(),
        })
      } else {
        styles = ns.cssVarBlock({
          'bg-color': (isDark ? toDark(color, 90) : color.tint(90)).toString(),
          'text-color': tagColor,
          'border-color': (isDark
            ? toDark(color, 80)
            : color.tint(80)
          ).toString(),
          'hover-color': tagColor,
        })
      }
    }
    return styles
  })
}

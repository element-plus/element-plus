import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useNamespace } from '@element-plus/hooks'
import type { TagProps } from './tag'

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString()
}

export function useTagCustomStyle(props: TagProps) {
  const ns = useNamespace('tag')

  // If color is set, it's used as the background color
  // Otherwise, custom-tag-color is used to calculate color for dark, light, and plain themes.
  return computed(() => {
    let styles: Record<string, string> = {}

    const tagColor = props.customTagColor

    if (props.color) {
      styles = ns.cssVarBlock({
        'bg-color': props.color,
      })
    } else if (tagColor) {
      const color = new TinyColor(tagColor)

      if (props.effect === 'dark') {
        styles = ns.cssVarBlock({
          'bg-color': tagColor,
          'border-color': tagColor,
          'hover-color': color.tint(30).toString(),
        })
      } else if (props.effect === 'plain') {
        styles = ns.cssVarBlock({
          'bg-color': props.dark ? 'transparent' : '#ffffff',
          'text-color': tagColor,
          'border-color': props.dark
            ? darken(color, 50)
            : color.tint(50).toString(),
          'hover-color': tagColor,
        })
      } else {
        styles = ns.cssVarBlock({
          'bg-color': props.dark
            ? darken(color, 90)
            : color.tint(90).toString(),
          'text-color': tagColor,
          'border-color': props.dark
            ? darken(color, 80)
            : color.tint(80).toString(),
          'hover-color': tagColor,
        })
      }
    }

    return styles
  })
}

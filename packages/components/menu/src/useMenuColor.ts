import { computed } from 'vue'

import type { IMenuProps } from './menu.type'

export default function useMenuColor(props: IMenuProps) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor
    if (!color) {
      return ''
    } else {
      return mixColor(color)
    }
  })
  function calcColorChannels(c: string) {
    let rawColor = c.replace('#', '')
    if (/^[0-9a-fA-F]{3}$/.test(rawColor)) {
      const color = rawColor.split('')
      for (let i = 2; i >= 0; i--) {
        color.splice(i, 0, color[i])
      }
      rawColor = color.join('')
    }
    if (/^[0-9a-fA-F]{6}$/.test(rawColor)) {
      return {
        red: parseInt(rawColor.slice(0, 2), 16),
        green: parseInt(rawColor.slice(2, 4), 16),
        blue: parseInt(rawColor.slice(4, 6), 16),
      }
    } else {
      return {
        red: 255,
        green: 255,
        blue: 255,
      }
    }
  }
  function mixColor(color: string, percent = 0.2) {
    let { red, green, blue } = calcColorChannels(color)
    if (percent > 0) {
      // shade given color
      red *= 1 - percent
      green *= 1 - percent
      blue *= 1 - percent
    } else {
      // tint given color
      red += (255 - red) * percent
      green += (255 - green) * percent
      blue += (255 - blue) * percent
    }
    return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
  }
  return menuBarColor
}

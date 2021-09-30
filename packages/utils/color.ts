export function calcColorChannels(c: string) {
  let rawColor = c.replace('#', '')
  if (/^[0-9a-fA-F]{3}$/.test(rawColor)) {
    rawColor =
      rawColor[0].repeat(2) + rawColor[1].repeat(2) + rawColor[2].repeat(2)
  }
  if (/^[0-9a-fA-F]{6}$/.test(rawColor)) {
    return {
      red: parseInt(rawColor.slice(0, 2), 16),
      green: parseInt(rawColor.slice(2, 4), 16),
      blue: parseInt(rawColor.slice(4, 6), 16),
    }
  }
  return {
    red: 255,
    green: 255,
    blue: 255,
  }
}

export function mixColor(color: string, percent = 0.2) {
  let { red, green, blue } = calcColorChannels(color)
  if (percent > 0) {
    // shade given color
    red *= 1 - percent
    green *= 1 - percent
    blue *= 1 - percent
  } else {
    // tint given color
    const value = Math.abs(percent)
    red += (255 - red) * Math.abs(percent)
    green += (255 - green) * value
    blue += (255 - blue) * value
  }
  return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}

export function lighten(color: string, percent = 0.2) {
  return mixColor(color, -percent)
}

export function darken(color: string, percent = 0.2) {
  return mixColor(color, percent)
}

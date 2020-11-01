export const isValidWidthUnit = (val: string) =>
  ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit =>
    val.endsWith(unit),
  )

export const isValidComponentSize = (val: string) =>
  ['', 'large', 'medium', 'small', 'mini'].includes(val)

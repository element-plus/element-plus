export const isValidWidthUnit = (val: string) =>
  ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit =>
    val.endsWith(unit),
  )

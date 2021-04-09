import { isNumber } from './util'

export const isValidWidthUnit = (val: string | number): boolean =>{
  if(isNumber(val)){
    return true
  } else {
    return ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit =>
      (val as string).endsWith(unit),
    )
  }
}


export const isValidComponentSize = (val: string) =>
  ['', 'large', 'medium', 'small', 'mini'].includes(val)

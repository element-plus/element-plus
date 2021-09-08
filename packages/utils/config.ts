import type { ComponentSize } from './types'

export interface InstallOptions {
  size: ComponentSize
  zIndex: number
  locale?: any
}

let $ELEMENT = {} as InstallOptions

const setConfig = (option: InstallOptions): void => {
  $ELEMENT = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
  return $ELEMENT[key]
}

export { getConfig, setConfig }

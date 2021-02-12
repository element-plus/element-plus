import { IColorTextOptions } from '@element-plus/color-text/src/color-text.type'

export interface InstallOptions {
  size: ComponentSize
  zIndex: number
  locale?: any
  i18n?: (...args: any[]) => string
  colorTextOptions?: IColorTextOptions
}

let $ELEMENT = { } as InstallOptions

const setConfig = (option: InstallOptions): void => {
  $ELEMENT = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
  return $ELEMENT[key]
}

export {
  getConfig,
  setConfig,
}

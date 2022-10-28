import { config } from '@vue/test-utils'

export const stylePlugin = (wrapper: any) => {
  return {
    style: wrapper.element.style,
  }
}

export function installStylePlugin() {
  config.plugins.DOMWrapper.install(stylePlugin)
  config.plugins.VueWrapper.install(stylePlugin)
}

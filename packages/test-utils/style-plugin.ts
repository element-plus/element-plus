import { config } from '@vue/test-utils'

const stylePlugin = (wrapper: any) => {
  return {
    style: wrapper.element.style,
  }
}

export default function install() {
  config.plugins.DOMWrapper.install(stylePlugin)
  config.plugins.VueWrapper.install(stylePlugin)
}


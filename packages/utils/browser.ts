import { isClient } from '@vueuse/core'

export const isFirefox = (): boolean =>
  isClient && /firefox/i.test(window.navigator.userAgent)

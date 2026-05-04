import { isClient, isIOS } from '@vueuse/core'

export const isFirefox = (): boolean =>
  isClient && /firefox/i.test(window.navigator.userAgent)

export const isAndroid = (): boolean =>
  isClient && /android/i.test(window.navigator.userAgent)

export { isClient, isIOS }

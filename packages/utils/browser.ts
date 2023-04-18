import { isClient } from './types'

export const isFirefox = (): boolean =>
  isClient && /firefox/i.test(window.navigator.userAgent)

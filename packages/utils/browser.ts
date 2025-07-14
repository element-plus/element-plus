import { isClient, isIOS } from '@vueuse/core'

export const isFirefox = (): boolean =>
  isClient && /firefox/i.test(window.navigator.userAgent)

function isMobile() {
  return (
    isClient &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    )
  )
}

export { isClient, isIOS, isMobile }

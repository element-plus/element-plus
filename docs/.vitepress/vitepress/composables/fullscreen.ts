import { useToggle } from '@vueuse/core'
export const useFullScreen = () => {
  const [isFullScreen, toggleFullScreen] = useToggle()
  return {
    isFullScreen,
    toggleFullScreen,
  }
}

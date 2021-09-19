import { useToggle } from './toggle'
export const useFullScreen = () => {
  const [isFullScreen, toggleFullScreen] = useToggle()
  return {
    isFullScreen,
    toggleFullScreen,
  }
}

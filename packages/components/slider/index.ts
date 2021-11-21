import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Slider from './src/slider.vue'
import Marker from './src/marker.vue'
import SliderButton from './src/slider-button.vue'

export const ElSlider = withInstall(Slider, {
  Marker,
  SliderButton,
})
export default ElSlider

export const ElMarker = withNoopInstall(Marker)
export const ElSliderButton = withNoopInstall(SliderButton)

export * from './src/slider'
export * from './src/marker'
export * from './src/slider-button'

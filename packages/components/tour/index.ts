import { withInstall, withNoopInstall } from '@element-plus/utils'
import Tour from './src/tour.vue'
import TourStep from './src/step.vue'

export const ElTour = withInstall(Tour, {
  TourStep,
})
export const ElTourStep = withNoopInstall(TourStep)
export default ElTour

export * from './src/tour'
export * from './src/step'
export * from './src/content'
export type { TourMask, TourGap, TourBtnProps } from './src/types'

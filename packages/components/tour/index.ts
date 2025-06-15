import { withInstall, withNoopInstall } from '@element-plus/utils'
import Tour from './src/tour.vue'
import TourStep from './src/step.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElTour: SFCWithInstall<typeof Tour> & {
  TourStep: typeof TourStep
} = withInstall(Tour, {
  TourStep,
})
export const ElTourStep: SFCWithInstall<typeof TourStep> =
  withNoopInstall(TourStep)
export default ElTour

export * from './src/tour'
export * from './src/step'
export * from './src/content'
export type { TourMask, TourGap, TourBtnProps } from './src/types'

import type { Slots } from 'vue'
import type { TimelineProps } from './timeline'

export interface TimelineProvider {
  props: TimelineProps
  slots: Slots
}

export const TIMELINE_INJECTION_KEY = 'timeline'

import type { InjectionKey, Slots } from 'vue'
import type { TimelineProps } from './timeline'

export interface TimelineContext {
  props: TimelineProps
  slots: Slots
}

export const timelineInjectionKey: InjectionKey<TimelineContext> =
  Symbol('timeline')

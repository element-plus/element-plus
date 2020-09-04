
import type { Placement, PositioningStrategy, Instance as PopperInstance, Options } from '@popperjs/core'

export type Effect = 'dark' | 'light';
export type RefElement = Nullable<HTMLElement>
export type Offset = [number, number] | number
export type {
} from '@popperjs/core'

export { Placement, PositioningStrategy, PopperInstance, Options }

export type TriggerType = 'click' | 'hover' | 'focus' | 'contextMenu'

export type IPopperOptions = {
  arrowOffset: number
  boundariesPadding: number
  class: string
  closeDelay: number
  cutoff: boolean
  disabled: boolean
  enterable: boolean
  flip: boolean
  hideAfter: number
  manualMode: boolean
  offset: number
  placement: Placement
  popperOptions: Options
  showAfter: number
  showArrow: boolean
  strategy: PositioningStrategy
  tabIndex: string
  trigger: TriggerType[]
  value: boolean
}

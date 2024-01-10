import type { CSSProperties, VNode } from 'vue'
import type { Placement } from '@floating-ui/dom'

export type TourMask =
  | boolean
  | {
      style?: CSSProperties
      color?: string
    }

export interface TourGap {
  offset?: number | [number, number]
  radius?: number
}

export interface TourBtnProps {
  children: VNode | string
  onClick: () => void
  className?: string
  style?: CSSProperties
}

export interface PosInfo {
  left: number
  top: number
  height: number
  width: number
  radius: number
}

export interface UsedTourStepProps {
  target?: HTMLElement | null
  showArrow?: boolean
  placement?: Placement
  contentStyle?: CSSProperties
  mask?: TourMask
  type?: 'default' | 'primary'
  scrollIntoViewOptions?: boolean | ScrollIntoViewOptions
}

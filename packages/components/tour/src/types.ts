import type { CSSProperties, VNode } from 'vue'
import type { ButtonProps } from '@element-plus/components/button'

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

export type TourBtnProps = {
  children?: VNode | string
  onClick?: () => void
} & Partial<ButtonProps> &
  Record<string, any>

export interface PosInfo {
  left: number
  top: number
  height: number
  width: number
  radius: number
}

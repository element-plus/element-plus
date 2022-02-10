import type { ComputedRef, CSSProperties, Ref } from 'vue'
import type { Nullable } from '@element-plus/utils-v2'

export interface ISliderProps {
  modelValue: number | number[]
  min: number
  max: number
  step: number
  showInput: boolean
  showInputControls: boolean
  inputSize: string
  showStops: boolean
  showTooltip: boolean
  formatTooltip: (val: number) => number | string
  disabled: boolean
  range: boolean
  vertical: boolean
  height: string
  debounce: number
  label: string
  tooltipClass: string
  marks?: Record<number, any>
}

export interface ISliderInitData {
  firstValue: Nullable<number>
  secondValue: Nullable<number>
  oldValue: Nullable<number>
  dragging: boolean
  sliderSize: number
}

export interface ISliderProvider {
  disabled: ComputedRef<boolean>
  min: ComputedRef<number>
  max: ComputedRef<number>
  step: ComputedRef<number>
  showTooltip: ComputedRef<boolean>
  precision: ComputedRef<number>
  sliderSize: ComputedRef<number>
  formatTooltip: ComputedRef<(value: number) => number | string>
  emitChange: () => void
  resetSize: () => void
  updateDragging: (val: boolean) => void
}

export type Mark = {
  point: number
  position: number
  mark: { [s: string]: any }
}

export type Marks = ComputedRef<Mark[]>

export type Stops = {
  stops: ComputedRef<number[]>
  getStopStyle: (position: number) => CSSProperties
}

export type Slide = {
  slider: Ref<HTMLElement>
  firstButton: Ref<ISliderButton>
  secondButton: Ref<ISliderButton>
  sliderDisabled: ComputedRef<boolean>
  minValue: ComputedRef<number>
  maxValue: ComputedRef<number>
  runwayStyle: ComputedRef<CSSProperties>
  barStyle: ComputedRef<CSSProperties>
  resetSize: () => void
  setPosition: (percent: number) => void
  emitChange: () => void
  onSliderClick: (event: MouseEvent) => void
}

export type ButtonRefs = {
  [s in 'firstButton' | 'secondButton']: Ref<Nullable<ISliderButton>>
}

export interface ISliderButtonProps {
  modelValue: number
  vertical: boolean
  tooltipClass: string
}

export interface ISliderButtonInitData {
  hovering: boolean
  dragging: boolean
  isClick: boolean
  startX: number
  currentX: number
  startY: number
  currentY: number
  startPosition: number
  newPosition: number
  oldValue: number
}

export interface ISliderButton {
  tooltip: Ref<Nullable<HTMLElement>>
  showTooltip: Ref<boolean>
  wrapperStyle: ComputedRef<CSSProperties>
  formatValue: ComputedRef<number | string>
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  onButtonDown: (event: MouseEvent | TouchEvent) => void
  onLeftKeyDown: () => void
  onRightKeyDown: () => void
  setPosition: (newPosition: number) => void
}

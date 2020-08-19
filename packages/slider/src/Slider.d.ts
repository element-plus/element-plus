import { ComputedRef, Ref } from 'vue'
import { UnwrapRef } from '@vue/reactivity'

export interface ISliderProps {
  modelValue: number | number[]
  min: number
  max: number
  step: number
  value: number | number[]
  showInput: boolean
  showInputControls: boolean
  inputSize: string
  showStops: boolean
  showTooltip: boolean
  formatTooltip: (val:string) => string
  disabled: boolean
  range: boolean
  vertical: boolean
  height: string
  debounce: number
  label:string
  tooltipClass: string
  marks: Record<number, any>
}

export interface ISliderInitData {
  firstValue: UnwrapRef<Nullable<number>>
  secondValue: UnwrapRef<Nullable<number>>
  oldValue: UnwrapRef<Nullable<number>>
  dragging: UnwrapRef<boolean>
  sliderSize: UnwrapRef<number>
}

export interface ISliderProvider{
  readonly sliderDisabled: ComputedRef<boolean>
  readonly min: number
  readonly max: number
  readonly step: number
  readonly showTooltip: boolean
  readonly precision: ComputedRef<number>
  readonly sliderSize: ComputedRef<number>
  formatTooltip: (value:number) => number
  emitChange: () => void
  resetSize: () => void
  updateDragging: (val:boolean) => void
}

export type Mark = {
  point: number
  position: number
  mark: {[s:string]: any;}
}

export type Marks = {
  markList: ComputedRef<Mark[]>
}

export type Stops = {
  stops: ComputedRef<number[]>
  getStopStyle: (position: number) => { bottom?: string; left?: string;}
}

export type Slide = {
  slider:Ref<HTMLHtmlElement>
  button1:Ref<ISliderButton>
  button2:Ref<ISliderButton>
  sliderDisabled:ComputedRef<boolean>
  minValue:ComputedRef<number>
  maxValue:ComputedRef<number>
  runwayStyle:ComputedRef<Record<string, any>>
  barStyle:ComputedRef<Record<string, any>>
  resetSize:() => void
  setPosition:(percent: number) => void
  emitChange:() => void
  onSliderClick:(event:MouseEvent) => void
}

export interface ISliderButtonProps {
  modelValue: number
  vertical:boolean
  tooltipClass:string
}

export interface ISliderButtonInitData {
  hovering: UnwrapRef<boolean>
  dragging: UnwrapRef<boolean>
  isClick: UnwrapRef<boolean>
  startX: UnwrapRef<number>
  currentX: UnwrapRef<number>
  startY: UnwrapRef<number>
  currentY: UnwrapRef<number>
  startPosition: UnwrapRef<number>
  newPosition: UnwrapRef<Nullable<number>>
  oldValue: UnwrapRef<number>
}

export interface ISliderButton {
  readonly showTooltip: boolean
  wrapperStyle:ComputedRef<Record<string, any>>
  formatValue:ComputedRef<number>
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  onButtonDown: (event:MouseEvent|TouchEvent) => void
  onLeftKeyDown: () => void
  onRightKeyDown: () => void
  setPosition: (newPosition:number) => void
}

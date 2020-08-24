import { ComputedRef, Ref } from 'vue'

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
  formatTooltip: (val:number) => number|string
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
  firstValue: Nullable<number>
  secondValue: Nullable<number>
  oldValue: Nullable<number>
  dragging: boolean
  sliderSize: number
}

export interface ISliderProvider{
  disabled: ComputedRef<boolean>
  min: ComputedRef<number>
  max: ComputedRef<number>
  step: ComputedRef<number>
  showTooltip: ComputedRef<boolean>
  precision: ComputedRef<number>
  sliderSize: ComputedRef<number>
  formatTooltip: (value:number) => number|string
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
  hovering: boolean
  dragging: boolean
  isClick: boolean
  startX: number
  currentX: number
  startY: number
  currentY: number
  startPosition: number
  newPosition: Nullable<number>
  oldValue: number
}

export interface ISliderButton {
  tooltip: Ref<Nullable<HTMLHtmlElement>>
  tooltipVisible: Ref<boolean>
  showTooltip: Ref<boolean>
  wrapperStyle:ComputedRef<Record<string, any>>
  formatValue:ComputedRef<number|string>
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  onButtonDown: (event:MouseEvent|TouchEvent) => void
  onLeftKeyDown: () => void
  onRightKeyDown: () => void
  setPosition: (newPosition:number) => void
}

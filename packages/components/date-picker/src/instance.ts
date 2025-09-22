import type DatePicker from './date-picker'

export type DatePickerInstance = InstanceType<typeof DatePicker> & unknown
export type DatePickerExpose = {
  focus: () => void
  blur: () => void
  handleOpen: () => void
  handleClose: () => void
}

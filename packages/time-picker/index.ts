import TimePicker from './src/time-picker'
import CommonPicker from './src/common/picker.vue'
import TimePickPanel from './src/time-picker-com/panel-time-pick.vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
export * from './src/common/date-utils'
export * from './src/common/constant'
export * from './src/common/props'

const _TimePicker: SFCWithInstall<typeof TimePicker> = TimePicker as SFCWithInstall<typeof TimePicker>

_TimePicker.install = app => {
  app.component(_TimePicker.name, _TimePicker)
}

export { CommonPicker, TimePickPanel }
export default _TimePicker

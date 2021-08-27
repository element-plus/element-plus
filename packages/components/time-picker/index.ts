import TimePicker from './src/time-picker'
import CommonPicker from './src/common/picker.vue'
import TimePickPanel from './src/time-picker-com/panel-time-pick.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

export * from './src/common/date-utils'
export * from './src/common/constant'
export * from './src/common/props'

const _TimePicker = TimePicker as SFCWithInstall<typeof TimePicker>

_TimePicker.install = (app: App) => {
  app.component(_TimePicker.name, _TimePicker)
}

export { CommonPicker, TimePickPanel }
export default _TimePicker
export const ElTimePicker = _TimePicker

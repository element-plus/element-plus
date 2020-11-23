import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { h } from 'vue'
import { DEFAULT_FORMATS_TIME } from './common/constant'
import Picker from './common/picker.vue'
import TimePickPanel from './time-picker-com/panel-time-pick.vue'
import TimeRangePanel from './time-picker-com/panel-time-range.vue'

dayjs.extend(customParseFormat)

export default {
  name: 'ElTimePicker',
  install: null,
  props: {
    isRange: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const type = props.isRange ? 'timerange' : 'time'
    const panel = props.isRange ? TimeRangePanel : TimePickPanel
    return () => h(Picker, {
      format: DEFAULT_FORMATS_TIME,
      ...props,
      type,
    },
    {
      default: scopedProps => h(panel, scopedProps),
    })
  },
}

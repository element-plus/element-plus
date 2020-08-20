import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { h } from 'vue'
import Picker from './picker/picker.vue'
import TimePickPanel from './time-picker-com/panel-time-pick.vue'
import TimeRangePanel from './time-picker-com/panel-time-range.vue'
dayjs.extend(customParseFormat)
export default {
  name: 'ElTimePicker',
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
      props,
      type,
    },
    {
      default: (scopedProps) => h(panel, scopedProps),
    })
  },
}

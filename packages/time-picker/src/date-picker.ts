import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { h } from 'vue'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
import Picker from './picker/picker.vue'
dayjs.extend(customParseFormat)
export default {
  name: 'ElDatePicker',
  setup(props) {
    return () => h(Picker, {
      props,
    },
    {
      default: (scopedProps) => h(DatePickPanel, scopedProps),
    })
  },
}

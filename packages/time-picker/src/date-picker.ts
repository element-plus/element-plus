import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { h } from 'vue'
import { DEFAULT_FORMATS_DATE } from './common/constant'
import Picker from './common/picker.vue'
import DatePickPanel from './date-picker-com/panel-date-pick.vue'
dayjs.extend(customParseFormat)
export default {
  name: 'ElDatePicker',
  setup(props) {
    return () => h(Picker, {
      props,
      format: DEFAULT_FORMATS_DATE,
    },
    {
      default: scopedProps => h(DatePickPanel, scopedProps),
    })
  },
}

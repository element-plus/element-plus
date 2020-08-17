import { h } from 'vue'
import Picker from './picker/picker.vue'
import TimePickPanel from './panel/time-pick.vue'
export default {
  name: 'ElTimePicker',

  setup(props) {
    return () => h(Picker, {
      props,
    },
    {
      default: (scopedProps) => h(TimePickPanel, scopedProps),
    })
  },
}

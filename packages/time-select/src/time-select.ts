import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { h } from 'vue'
import { DEFAULT_FORMATS_TIME } from '@element-plus/time-picker/src/common/constant'
import Picker from '@element-plus/time-picker/src/common/picker.vue'
import Panel from './panel.vue'
dayjs.extend(customParseFormat)
export default {
  name: 'ElTimeSelect',
  props: {
    type: {
      type: String,
      default: 'time-select',
    },
  },
  setup(props) {
    return () => h(Picker, {
      format: DEFAULT_FORMATS_TIME,
      ...props,
      type: props.type,
    },
    {
      default: scopedProps => h(Panel, scopedProps),
    })
  },
}

import { defineComponent, h, ref, provide } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { DEFAULT_FORMATS_TIME } from './common/constant'
import Picker from './common/picker.vue'
import TimePickPanel from './time-picker-com/panel-time-pick.vue'
import TimeRangePanel from './time-picker-com/panel-time-range.vue'
import { timePickerDefaultProps } from './common/props'
dayjs.extend(customParseFormat)

export default defineComponent({
  name: 'ElTimePicker',
  install: null,
  props: {
    ...timePickerDefaultProps,
    isRange: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const commonPicker = ref(null)
    const type = props.isRange ? 'timerange' : 'time'
    const panel = props.isRange ? TimeRangePanel : TimePickPanel
    const refProps = {
      ...props,
      focus: () => {
        commonPicker.value?.handleFocus()
      },
      blur: () => {
        commonPicker.value?.handleBlur()
      },
    }

    provide('ElPopperOptions', props.popperOptions)
    ctx.expose(refProps)
    return () => {
      const format = props.format ?? DEFAULT_FORMATS_TIME
      return h(
        Picker,
        {
          ...props, // allow format to be overwrite
          format,
          type,
          ref: commonPicker,
          'onUpdate:modelValue': (value) =>
            ctx.emit('update:modelValue', value),
        },
        {
          default: (scopedProps) => h(panel, scopedProps),
        }
      )
    }
  },
})

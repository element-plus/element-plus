import { defineComponent, provide, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { DEFAULT_FORMATS_TIME } from './constants'
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
    /**
     * @description whether to pick a time range
     */
    isRange: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const commonPicker = ref<InstanceType<typeof Picker>>()
    const [type, Panel] = props.isRange
      ? ['timerange', TimeRangePanel]
      : ['time', TimePickPanel]

    const modelUpdater = (value: any) => ctx.emit('update:modelValue', value)
    provide('ElPopperOptions', props.popperOptions)
    ctx.expose({
      /**
       * @description focus the Input component
       */
      focus: () => {
        commonPicker.value?.focus()
      },
      /**
       * @description blur the Input component
       */
      blur: () => {
        commonPicker.value?.blur()
      },
      /**
       * @description open the TimePicker popper
       */
      handleOpen: () => {
        commonPicker.value?.handleOpen()
      },
      /**
       * @description close the TimePicker popper
       */
      handleClose: () => {
        commonPicker.value?.handleClose()
      },
    })

    return () => {
      const format = props.format ?? DEFAULT_FORMATS_TIME

      return (
        <Picker
          {...props}
          ref={commonPicker}
          type={type}
          format={format}
          onUpdate:modelValue={modelUpdater}
        >
          {{
            default: (props: any) => <Panel {...props} />,
          }}
        </Picker>
      )
    }
  },
})

import { defineComponent, provide, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { isBoolean, isUndefined } from '@element-plus/utils'
import { DEFAULT_FORMATS_TIME } from './constants'
import Picker from './common/picker.vue'
import TimePickPanel from './time-picker-com/panel-time-pick.vue'
import TimeRangePanel from './time-picker-com/panel-time-range.vue'
import { timePickerDefaultProps } from './common/props'
import type { DateModelType, SingleOrRange } from './common/props'
import type { Dayjs } from 'dayjs'

dayjs.extend(customParseFormat)

const timePickerEmits = {
  blur: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
  focus: (evt?: FocusEvent) => evt instanceof FocusEvent || evt === undefined,
  'visible-change': (visibility: boolean) => isBoolean(visibility),
  keydown: (evt: KeyboardEvent) => evt instanceof KeyboardEvent,
  [UPDATE_MODEL_EVENT]: (
    val:
      | string
      | number
      | Date
      | Dayjs
      | (string | number | Date | Dayjs)[]
      | null
      | undefined
  ) => val || true,
  [CHANGE_EVENT]: (val: SingleOrRange<DateModelType> | null) =>
    !isUndefined(val),
}

export type TimePickerEmits = typeof timePickerEmits

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
  emits: timePickerEmits,
  setup(props, ctx) {
    const commonPicker = ref<InstanceType<typeof Picker>>()
    const [type, Panel] = props.isRange
      ? ['timerange', TimeRangePanel]
      : ['time', TimePickPanel]

    // event handlers
    const modelUpdater = (value: any) => ctx.emit(UPDATE_MODEL_EVENT, value)
    const onFocus = (evt?: FocusEvent) => ctx.emit('focus', evt)
    const onBlur = (evt?: FocusEvent) => ctx.emit('blur', evt)
    const onChange = (val: SingleOrRange<DateModelType> | null) =>
      ctx.emit('change', val)
    const onKeydown = (key: KeyboardEvent) => ctx.emit('keydown', key)
    const onVisibleChange = (visibility: boolean) =>
      ctx.emit('visible-change', visibility)

    provide('ElPopperOptions', props.popperOptions)
    ctx.expose({
      /**
       * @description focus the Input component
       */
      focus: (e: FocusEvent | undefined) => {
        commonPicker.value?.handleFocusInput(e)
      },
      /**
       * @description blur the Input component
       */
      blur: (e: FocusEvent | undefined) => {
        commonPicker.value?.handleBlurInput(e)
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
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeydown={onKeydown}
          onVisible-change={onVisibleChange}
        >
          {{
            default: (props: any) => <Panel {...props} />,
          }}
        </Picker>
      )
    }
  },
})

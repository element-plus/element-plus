import { computed, defineComponent, provide, reactive, ref, toRef } from 'vue'
import {
  CommonPicker,
  DEFAULT_FORMATS_DATE,
  DEFAULT_FORMATS_DATEPICKER,
  PICKER_POPPER_OPTIONS_INJECTION_KEY,
} from '@element-plus/components/time-picker'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import {
  ElDatePickerPanel,
  ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY,
} from '@element-plus/components/date-picker-panel'
import { datePickerProps } from './props'

import type {
  DateModelType,
  SingleOrRange,
} from '@element-plus/components/time-picker'
import type { DatePickerExpose } from './instance'

export default defineComponent({
  name: 'ElDatePicker',
  install: null,
  props: datePickerProps,
  emits: [UPDATE_MODEL_EVENT],
  setup(props, { expose, emit, slots }) {
    const isDefaultFormat = computed(() => {
      return !props.format
    })
    provide(ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY, isDefaultFormat)
    provide(
      PICKER_POPPER_OPTIONS_INJECTION_KEY,
      reactive(toRef(props, 'popperOptions'))
    )

    const commonPicker = ref<InstanceType<typeof CommonPicker>>()
    const refProps: DatePickerExpose = {
      focus: () => {
        commonPicker.value?.focus()
      },
      blur: () => {
        commonPicker.value?.blur()
      },
      handleOpen: () => {
        commonPicker.value?.handleOpen()
      },
      handleClose: () => {
        commonPicker.value?.handleClose()
      },
    }

    expose(refProps)

    const onModelValueUpdated = (val: SingleOrRange<DateModelType> | null) => {
      emit(UPDATE_MODEL_EVENT, val)
    }

    return () => {
      // since props always have all defined keys on it, {format, ...props} will always overwrite format
      // pick props.format or provide default value here before spreading
      const format =
        props.format ??
        (DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE)

      return (
        <CommonPicker
          {...props}
          format={format}
          type={props.type}
          ref={commonPicker}
          onUpdate:modelValue={onModelValueUpdated}
        >
          {{
            default: (scopedProps: /**FIXME: remove any type */ any) => (
              <ElDatePickerPanel
                showConfirm={false}
                border={false}
                {...scopedProps}
              >
                {slots}
              </ElDatePickerPanel>
            ),
            'range-separator': slots['range-separator'],
          }}
        </CommonPicker>
      )
    }
  },
})

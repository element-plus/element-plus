import {
  computed,
  defineComponent,
  inject,
  provide,
  reactive,
  toRefs,
} from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import localeData from 'dayjs/plugin/localeData.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'
import weekYear from 'dayjs/plugin/weekYear.js'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import {
  DEFAULT_FORMATS_DATE,
  DEFAULT_FORMATS_DATEPICKER,
  PICKER_BASE_INJECTION_KEY,
  ROOT_COMMON_PICKER_INJECTION_KEY,
} from '@element-plus/components/time-picker'
import { useNamespace } from '@element-plus/hooks'
import { isUndefined } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { datePickerPanelProps } from './props/date-picker-panel'
import {
  ROOT_PICKER_INJECTION_KEY,
  ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY,
} from './constants'
import { getPanel } from './panel-utils'
import { useCommonPicker } from '../../time-picker/src/composables/use-common-picker'

dayjs.extend(localeData)
dayjs.extend(advancedFormat)
dayjs.extend(customParseFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(dayOfYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

export default defineComponent({
  name: 'ElDatePickerPanel',
  install: null,
  props: datePickerPanelProps,
  emits: [
    UPDATE_MODEL_EVENT,
    'calendar-change',
    'panel-change',
    'visible-change',
    'pick',
  ],
  setup(props, { slots, emit }) {
    const ns = useNamespace('picker-panel')
    const format = computed(
      () =>
        props.format ??
        (DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE)
    )

    const defaultFormatInjection = inject(
      ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY,
      undefined
    )
    if (isUndefined(defaultFormatInjection)) {
      const isDefaultFormat = computed(() => {
        return !props.format
      })
      provide(ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY, isDefaultFormat)
    }
    const pickerInjection = inject(PICKER_BASE_INJECTION_KEY, undefined)
    if (isUndefined(pickerInjection)) {
      const _props = reactive({
        ...toRefs(props),
        format,
      })
      provide(PICKER_BASE_INJECTION_KEY, {
        props: _props,
      })
    }

    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns,
    })
    const {
      parsedValue,
      onCalendarChange,
      onPanelChange,
      onSetPickerOption,
      onPick,
    } = inject(
      ROOT_COMMON_PICKER_INJECTION_KEY,
      () => useCommonPicker(props, emit),
      true
    )

    return () => {
      const Component = getPanel(props.type)
      return (
        <Component
          {...props}
          format={format.value}
          parsedValue={parsedValue.value}
          onSet-picker-option={onSetPickerOption}
          onCalendar-change={onCalendarChange}
          onPanel-change={onPanelChange}
          onPick={onPick}
        >
          {slots}
        </Component>
      )
    }
  },
})

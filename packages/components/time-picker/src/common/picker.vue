<template>
  <el-tooltip
    ref="refPopper"
    :visible="pickerVisible"
    effect="light"
    pure
    trigger="click"
    v-bind="$attrs"
    role="dialog"
    teleported
    :transition="`${nsDate.namespace.value}-zoom-in-top`"
    :popper-class="[`${nsDate.namespace.value}-picker__popper`, popperClass!]"
    :popper-style="popperStyle"
    :popper-options="elPopperOptions"
    :fallback-placements="fallbackPlacements"
    :gpu-acceleration="false"
    :placement="placement"
    :stop-popper-mouse-event="false"
    :hide-after="0"
    persistent
    @before-show="onBeforeShow"
    @show="onShow"
    @hide="onHide"
  >
    <template #default>
      <el-input
        v-if="!isRangeInput"
        :id="
          // https://github.com/vuejs/language-tools/issues/2104#issuecomment-3092541527
          id as string
        "
        ref="inputRef"
        container-role="combobox"
        :model-value="
          // https://github.com/vuejs/language-tools/issues/2104#issuecomment-3092541527
          displayValue as string
        "
        :name="
          // https://github.com/vuejs/language-tools/issues/2104#issuecomment-3092541527
          name as string
        "
        :size="pickerSize"
        :disabled="pickerDisabled"
        :placeholder="placeholder"
        :class="[
          nsDate.b('editor'),
          nsDate.bm('editor', type),
          nsDate.is('focus', pickerVisible),
          $attrs.class,
        ]"
        :style="$attrs.style"
        :readonly="
          !editable ||
          readonly ||
          isDatesPicker ||
          isMonthsPicker ||
          isYearsPicker ||
          type === 'week'
        "
        :aria-label="ariaLabel"
        :tabindex="tabindex"
        :validate-event="false"
        @input="onUserInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydownInput"
        @change="handleChange"
        @mousedown="onMouseDownInput"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart.passive="onTouchStartInput"
        @click.stop
      >
        <template #prefix>
          <el-icon
            v-if="triggerIcon"
            :class="nsInput.e('icon')"
            @mousedown.prevent="onMouseDownInput"
            @touchstart.passive="onTouchStartInput"
          >
            <component :is="triggerIcon" />
          </el-icon>
        </template>
        <template #suffix>
          <el-icon
            v-if="showClearBtn && clearIcon"
            :class="`${nsInput.e('icon')} clear-icon`"
            @mousedown.prevent="NOOP"
            @click="onClearIconClick"
          >
            <component :is="clearIcon" />
          </el-icon>
        </template>
      </el-input>
      <picker-range-trigger
        v-else
        :id="
          // https://github.com/vuejs/language-tools/issues/2104#issuecomment-3092541527
          id as string[]
        "
        ref="inputRef"
        :model-value="displayValue"
        :name="
          // https://github.com/vuejs/language-tools/issues/2104#issuecomment-3092541527
          name as string[]
        "
        :disabled="pickerDisabled"
        :readonly="!editable || readonly"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        :class="rangeInputKls"
        :style="$attrs.style"
        :aria-label="ariaLabel"
        :tabindex="tabindex"
        autocomplete="off"
        role="combobox"
        @click="onMouseDownInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @start-input="handleStartInput"
        @start-change="handleStartChange"
        @end-input="handleEndInput"
        @end-change="handleEndChange"
        @mousedown="onMouseDownInput"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart.passive="onTouchStartInput"
        @keydown="handleKeydownInput"
      >
        <template #prefix>
          <el-icon
            v-if="triggerIcon"
            :class="[nsInput.e('icon'), nsRange.e('icon')]"
          >
            <component :is="triggerIcon" />
          </el-icon>
        </template>
        <template #range-separator>
          <slot name="range-separator">
            <span :class="nsRange.b('separator')">{{ rangeSeparator }}</span>
          </slot>
        </template>
        <template #suffix>
          <el-icon
            v-if="clearIcon"
            :class="clearIconKls"
            @mousedown.prevent="NOOP"
            @click="onClearIconClick"
          >
            <component :is="clearIcon" />
          </el-icon>
        </template>
      </picker-range-trigger>
    </template>
    <template #content>
      <slot
        :visible="pickerVisible"
        :actual-visible="pickerActualVisible"
        :parsed-value="parsedValue"
        :format="format"
        :date-format="dateFormat"
        :time-format="timeFormat"
        :unlink-panels="unlinkPanels"
        :type="type"
        :default-value="defaultValue"
        :show-now="showNow"
        :show-confirm="showConfirm"
        :show-footer="showFooter"
        :show-week-number="showWeekNumber"
        @pick="onPick"
        @select-range="setSelectionRange"
        @set-picker-option="onSetPickerOption"
        @calendar-change="onCalendarChange"
        @panel-change="onPanelChange"
        @mousedown.stop
      />
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  provide,
  ref,
  unref,
  useAttrs,
  watch,
} from 'vue'
import { onClickOutside, unrefElement } from '@vueuse/core'
import {
  useEmptyValues,
  useFocusController,
  useNamespace,
} from '@element-plus/hooks'
import {
  useFormDisabled,
  useFormItem,
  useFormSize,
} from '@element-plus/components/form'
import ElInput from '@element-plus/components/input'
import ElIcon from '@element-plus/components/icon'
import ElTooltip from '@element-plus/components/tooltip'
import { NOOP, debugWarn, getEventCode, isArray } from '@element-plus/utils'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { Calendar, Clock } from '@element-plus/icons-vue'
import { dayOrDaysToDate, valueEquals } from '../utils'
import {
  PICKER_BASE_INJECTION_KEY,
  PICKER_POPPER_OPTIONS_INJECTION_KEY,
  ROOT_COMMON_PICKER_INJECTION_KEY,
} from '../constants'
import { useCommonPicker } from '../composables/use-common-picker'
import { timePickerDefaultProps } from './props'
import PickerRangeTrigger from './picker-range-trigger.vue'

import type { InputInstance } from '@element-plus/components/input'
import type { Dayjs } from 'dayjs'
import type { ComponentPublicInstance, Ref } from 'vue'
import type { Options } from '@popperjs/core'
import type { DayOrDays, TimePickerDefaultProps, UserInput } from './props'
import type { TooltipInstance } from '@element-plus/components/tooltip'

defineOptions({
  name: 'Picker',
})

const props = defineProps(timePickerDefaultProps)
const emit = defineEmits([
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  'focus',
  'blur',
  'clear',
  'calendar-change',
  'panel-change',
  'visible-change',
  'keydown',
])
const attrs = useAttrs()

const nsDate = useNamespace('date')
const nsInput = useNamespace('input')
const nsRange = useNamespace('range')

const { formItem } = useFormItem()
const elPopperOptions = inject(
  PICKER_POPPER_OPTIONS_INJECTION_KEY,
  {} as Options
)
const emptyValues = useEmptyValues(props, null)

const refPopper = ref<TooltipInstance>()
const inputRef = ref<InputInstance>()
const valueOnOpen = ref<TimePickerDefaultProps['modelValue'] | null>(null)
let hasJustTabExitedInput = false

const pickerDisabled = useFormDisabled()

const commonPicker = useCommonPicker(props, emit)
const {
  parsedValue,
  pickerActualVisible,
  userInput,
  pickerVisible,
  pickerOptions,
  valueIsEmpty,
  emitInput,
  onPick,
  //@ts-ignore
  onSetPickerOption,
  //@ts-ignore
  onCalendarChange,
  //@ts-ignore
  onPanelChange,
} = commonPicker

const { isFocused, handleFocus, handleBlur } = useFocusController(inputRef, {
  disabled: pickerDisabled,
  beforeFocus() {
    return props.readonly
  },
  afterFocus() {
    if (!props.automaticDropdown) return
    pickerVisible.value = true
  },
  beforeBlur(event) {
    return (
      !hasJustTabExitedInput && refPopper.value?.isFocusInsideContent(event)
    )
  },
  afterBlur() {
    handleChange()
    pickerVisible.value = false
    hasJustTabExitedInput = false
    props.validateEvent &&
      formItem?.validate('blur').catch((err) => debugWarn(err))
  },
})

const hovering = ref(false)

const rangeInputKls = computed(() => [
  nsDate.b('editor'),
  nsDate.bm('editor', props.type),
  nsInput.e('wrapper'),
  nsDate.is('disabled', pickerDisabled.value),
  nsDate.is('active', pickerVisible.value),
  nsRange.b('editor'),
  pickerSize ? nsRange.bm('editor', pickerSize.value) : '',
  attrs.class,
])

const clearIconKls = computed(() => [
  nsInput.e('icon'),
  nsRange.e('close-icon'),
  !showClearBtn.value ? nsRange.em('close-icon', 'hidden') : '',
])

watch(pickerVisible, (val) => {
  if (!val) {
    userInput.value = null
    nextTick(() => {
      emitChange(props.modelValue)
    })
  } else {
    nextTick(() => {
      if (val) {
        valueOnOpen.value = props.modelValue
      }
    })
  }
})
const emitChange = (
  val: TimePickerDefaultProps['modelValue'] | null,
  isClear?: boolean
) => {
  // determine user real change only
  if (isClear || !valueEquals(val, valueOnOpen.value)) {
    emit(CHANGE_EVENT, val)
    // Set the value of valueOnOpen when clearing to avoid triggering change events multiple times.
    isClear && (valueOnOpen.value = val)
    props.validateEvent &&
      formItem?.validate('change').catch((err) => debugWarn(err))
  }
}
const emitKeydown = (e: KeyboardEvent) => {
  emit('keydown', e)
}

const refInput = computed<HTMLInputElement[]>(() => {
  if (inputRef.value) {
    return Array.from<HTMLInputElement>(
      inputRef.value.$el.querySelectorAll('input')
    )
  }
  return []
})

// @ts-ignore
const setSelectionRange = (start: number, end: number, pos?: 'min' | 'max') => {
  const _inputs = refInput.value
  if (!_inputs.length) return
  if (!pos || pos === 'min') {
    _inputs[0].setSelectionRange(start, end)
    _inputs[0].focus()
  } else if (pos === 'max') {
    _inputs[1].setSelectionRange(start, end)
    _inputs[1].focus()
  }
}

const onBeforeShow = () => {
  pickerActualVisible.value = true
}

const onShow = () => {
  emit('visible-change', true)
}

const onHide = () => {
  pickerActualVisible.value = false
  pickerVisible.value = false
  emit('visible-change', false)
}

const handleOpen = () => {
  pickerVisible.value = true
}

const handleClose = () => {
  pickerVisible.value = false
}

const displayValue = computed<UserInput>(() => {
  const formattedValue = formatToString(parsedValue.value)
  if (isArray(userInput.value)) {
    return [
      userInput.value[0] || (formattedValue && formattedValue[0]) || '',
      userInput.value[1] || (formattedValue && formattedValue[1]) || '',
    ]
  } else if (userInput.value !== null) {
    return userInput.value
  }
  if (!isTimePicker.value && valueIsEmpty.value) return ''
  if (!pickerVisible.value && valueIsEmpty.value) return ''
  if (formattedValue) {
    return isDatesPicker.value || isMonthsPicker.value || isYearsPicker.value
      ? (formattedValue as Array<string>).join(', ')
      : formattedValue
  }
  return ''
})

const isTimeLikePicker = computed(() => props.type.includes('time'))

const isTimePicker = computed(() => props.type.startsWith('time'))

const isDatesPicker = computed(() => props.type === 'dates')

const isMonthsPicker = computed(() => props.type === 'months')

const isYearsPicker = computed(() => props.type === 'years')

const triggerIcon = computed(
  () => props.prefixIcon || (isTimeLikePicker.value ? Clock : Calendar)
)

const showClearBtn = computed(
  () =>
    props.clearable &&
    !pickerDisabled.value &&
    !props.readonly &&
    !valueIsEmpty.value &&
    (hovering.value || isFocused.value)
)

const onClearIconClick = (event: MouseEvent) => {
  if (props.readonly || pickerDisabled.value) return
  if (showClearBtn.value) {
    event.stopPropagation()
    // When the handleClear Function was provided, emit null will be executed inside it
    // There is no need for us to execute emit null twice. #14752
    if (pickerOptions.value.handleClear) {
      pickerOptions.value.handleClear()
    } else {
      emitInput(emptyValues.valueOnClear.value)
    }
    emitChange(emptyValues.valueOnClear.value, true)
    onHide()
  }
  emit('clear')
}

const onMouseDownInput = async (event: MouseEvent) => {
  if (props.readonly || pickerDisabled.value) return
  if (
    (event.target as HTMLElement)?.tagName !== 'INPUT' ||
    isFocused.value ||
    !props.automaticDropdown
  ) {
    pickerVisible.value = true
  }
}
const onMouseEnter = () => {
  if (props.readonly || pickerDisabled.value) return
  if (!valueIsEmpty.value && props.clearable) {
    hovering.value = true
  }
}
const onMouseLeave = () => {
  hovering.value = false
}

const onTouchStartInput = (event: TouchEvent) => {
  if (props.readonly || pickerDisabled.value) return
  if (
    (event.touches[0].target as HTMLElement)?.tagName !== 'INPUT' ||
    isFocused.value ||
    !props.automaticDropdown
  ) {
    pickerVisible.value = true
  }
}

const isRangeInput = computed(() => {
  return props.type.includes('range')
})

const pickerSize = useFormSize()

const popperEl = computed(() => unref(refPopper)?.popperRef?.contentRef)

const stophandle = onClickOutside(
  inputRef as Ref<ComponentPublicInstance>,
  (e: PointerEvent) => {
    const unrefedPopperEl = unref(popperEl)
    const inputEl = unrefElement(inputRef as Ref<ComponentPublicInstance>)
    if (
      (unrefedPopperEl &&
        (e.target === unrefedPopperEl ||
          e.composedPath().includes(unrefedPopperEl))) ||
      e.target === inputEl ||
      (inputEl && e.composedPath().includes(inputEl))
    )
      return
    pickerVisible.value = false
  }
)

onBeforeUnmount(() => {
  stophandle?.()
})

const handleChange = () => {
  if (userInput.value) {
    const value = parseUserInputToDayjs(displayValue.value)
    if (value) {
      if (isValidValue(value)) {
        emitInput(dayOrDaysToDate(value))
      }
      userInput.value = null
    }
  }
  if (userInput.value === '') {
    emitInput(emptyValues.valueOnClear.value)
    emitChange(emptyValues.valueOnClear.value, true)
    userInput.value = null
  }
}

const parseUserInputToDayjs = (value: UserInput) => {
  if (!value) return null
  return pickerOptions.value.parseUserInput!(value)
}

const formatToString = (value: DayOrDays) => {
  if (!value) return null
  const res = isArray(value)
    ? value.map((_) => _.format(props.format))
    : value.format(props.format)
  return res as UserInput
}

const isValidValue = (value: DayOrDays) => {
  return pickerOptions.value.isValidValue!(value)
}

const handleKeydownInput = async (event: Event | KeyboardEvent) => {
  if (props.readonly || pickerDisabled.value) return

  const code = getEventCode(event as KeyboardEvent)
  emitKeydown(event as KeyboardEvent)
  if (code === EVENT_CODE.esc) {
    if (pickerVisible.value === true) {
      pickerVisible.value = false
      event.preventDefault()
      event.stopPropagation()
    }
    return
  }

  if (code === EVENT_CODE.down) {
    if (pickerOptions.value.handleFocusPicker) {
      event.preventDefault()
      event.stopPropagation()
    }
    if (pickerVisible.value === false) {
      pickerVisible.value = true
      await nextTick()
    }
    if (pickerOptions.value.handleFocusPicker) {
      pickerOptions.value.handleFocusPicker()
      return
    }
  }

  if (code === EVENT_CODE.tab) {
    hasJustTabExitedInput = true
    return
  }

  if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
    if (!pickerVisible.value) {
      pickerVisible.value = true
    } else if (
      userInput.value === null ||
      userInput.value === '' ||
      isValidValue(parseUserInputToDayjs(displayValue.value) as DayOrDays)
    ) {
      handleChange()
      pickerVisible.value = false
    }
    event.preventDefault()
    event.stopPropagation()
    return
  }

  // if user is typing, do not let picker handle key input
  if (userInput.value) {
    event.stopPropagation()
    return
  }
  if (pickerOptions.value.handleKeydownInput) {
    pickerOptions.value.handleKeydownInput(event as KeyboardEvent)
  }
}
const onUserInput = (e: string) => {
  userInput.value = e
  // Temporary fix when the picker is dismissed and the input box
  // is focused, just mimic the behavior of antdesign.
  if (!pickerVisible.value) {
    pickerVisible.value = true
  }
}

const handleStartInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (userInput.value) {
    userInput.value = [target.value, userInput.value[1]]
  } else {
    userInput.value = [target.value, null]
  }
}

const handleEndInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (userInput.value) {
    userInput.value = [userInput.value[0], target.value]
  } else {
    userInput.value = [null, target.value]
  }
}

const handleStartChange = () => {
  const values = userInput.value as string[]
  const value = parseUserInputToDayjs(values && values[0]) as Dayjs
  const parsedVal = unref(parsedValue) as [Dayjs, Dayjs]
  if (value && value.isValid()) {
    userInput.value = [
      formatToString(value) as string,
      displayValue.value?.[1] || null,
    ]
    const newValue = [value, parsedVal && (parsedVal[1] || null)] as DayOrDays
    if (isValidValue(newValue)) {
      emitInput(dayOrDaysToDate(newValue))
      userInput.value = null
    }
  }
}

const handleEndChange = () => {
  const values = unref(userInput) as string[]
  const value = parseUserInputToDayjs(values && values[1]) as Dayjs
  const parsedVal = unref(parsedValue) as [Dayjs, Dayjs]
  if (value && value.isValid()) {
    userInput.value = [
      unref(displayValue)?.[0] || null,
      formatToString(value) as string,
    ]
    const newValue = [parsedVal && parsedVal[0], value] as DayOrDays
    if (isValidValue(newValue)) {
      emitInput(dayOrDaysToDate(newValue))
      userInput.value = null
    }
  }
}

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

provide(PICKER_BASE_INJECTION_KEY, {
  props,
  emptyValues,
})
provide(ROOT_COMMON_PICKER_INJECTION_KEY, commonPicker)

defineExpose({
  /**
   * @description focus input box.
   */
  focus,
  /**
   * @description blur input box.
   */
  blur,
  /**
   * @description opens picker
   */
  handleOpen,
  /**
   * @description closes picker
   */
  handleClose,
  /**
   * @description pick item manually
   */
  onPick,
})
</script>

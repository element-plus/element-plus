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
    :popper-class="[`${nsDate.namespace.value}-picker__popper`, popperClass]"
    :popper-options="elPopperOptions"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :gpu-acceleration="false"
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
        :id="(id as string | undefined)"
        ref="inputRef"
        container-role="combobox"
        :model-value="(displayValue as string)"
        :name="name"
        :size="pickerSize"
        :disabled="pickerDisabled"
        :placeholder="placeholder"
        :class="[nsDate.b('editor'), nsDate.bm('editor', type), $attrs.class]"
        :style="$attrs.style"
        :readonly="!editable || readonly || isDatesPicker || type === 'week'"
        :label="label"
        :tabindex="tabindex"
        :validate-event="false"
        @input="onUserInput"
        @focus="handleFocusInput"
        @blur="handleBlurInput"
        @keydown="
          //
          handleKeydownInput as any
        "
        @change="handleChange"
        @mousedown="onMouseDownInput"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStartInput"
        @click.stop
      >
        <template #prefix>
          <el-icon
            v-if="triggerIcon"
            :class="nsInput.e('icon')"
            @mousedown.prevent="onMouseDownInput"
            @touchstart="onTouchStartInput"
          >
            <component :is="triggerIcon" />
          </el-icon>
        </template>
        <template #suffix>
          <el-icon
            v-if="showClose && clearIcon"
            :class="`${nsInput.e('icon')} clear-icon`"
            @click.stop="onClearIconClick"
          >
            <component :is="clearIcon" />
          </el-icon>
        </template>
      </el-input>
      <div
        v-else
        ref="inputRef"
        :class="[
          nsDate.b('editor'),
          nsDate.bm('editor', type),
          nsInput.e('wrapper'),
          nsDate.is('disabled', pickerDisabled),
          nsDate.is('active', pickerVisible),
          nsRange.b('editor'),
          pickerSize ? nsRange.bm('editor', pickerSize) : '',
          $attrs.class,
        ]"
        :style="($attrs.style as any)"
        @click="handleFocusInput"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStartInput"
        @keydown="handleKeydownInput"
      >
        <el-icon
          v-if="triggerIcon"
          :class="[nsInput.e('icon'), nsRange.e('icon')]"
          @mousedown.prevent="onMouseDownInput"
          @touchstart="onTouchStartInput"
        >
          <component :is="triggerIcon" />
        </el-icon>
        <input
          :id="id && id[0]"
          autocomplete="off"
          :name="name && name[0]"
          :placeholder="startPlaceholder"
          :value="displayValue && displayValue[0]"
          :disabled="pickerDisabled"
          :readonly="!editable || readonly"
          :class="nsRange.b('input')"
          @mousedown="onMouseDownInput"
          @input="handleStartInput"
          @change="handleStartChange"
          @focus="handleFocusInput"
          @blur="handleBlurInput"
        />
        <slot name="range-separator">
          <span :class="nsRange.b('separator')">{{ rangeSeparator }}</span>
        </slot>
        <input
          :id="id && id[1]"
          autocomplete="off"
          :name="name && name[1]"
          :placeholder="endPlaceholder"
          :value="displayValue && displayValue[1]"
          :disabled="pickerDisabled"
          :readonly="!editable || readonly"
          :class="nsRange.b('input')"
          @mousedown="onMouseDownInput"
          @focus="handleFocusInput"
          @blur="handleBlurInput"
          @input="handleEndInput"
          @change="handleEndChange"
        />
        <el-icon
          v-if="clearIcon"
          :class="[
            nsInput.e('icon'),
            nsRange.e('close-icon'),
            {
              [nsRange.e('close-icon--hidden')]: !showClose,
            },
          ]"
          @click="onClearIconClick"
        >
          <component :is="clearIcon" />
        </el-icon>
      </div>
    </template>
    <template #content>
      <slot
        :visible="pickerVisible"
        :actual-visible="pickerActualVisible"
        :parsed-value="parsedValue"
        :format="format"
        :unlink-panels="unlinkPanels"
        :type="type"
        :default-value="defaultValue"
        @pick="onPick"
        @select-range="setSelectionRange"
        @set-picker-option="onSetPickerOption"
        @calendar-change="onCalendarChange"
        @panel-change="onPanelChange"
        @keydown="onKeydownPopperContent"
        @mousedown.stop
      />
    </template>
  </el-tooltip>
</template>
<script lang="ts" setup>
import { computed, inject, nextTick, provide, ref, unref, watch } from 'vue'
import { isEqual } from 'lodash-unified'
import { onClickOutside } from '@vueuse/core'
import {
  useFormItem,
  useLocale,
  useNamespace,
  useSize,
} from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import ElIcon from '@element-plus/components/icon'
import ElTooltip from '@element-plus/components/tooltip'
import { debugWarn, isArray } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { Calendar, Clock } from '@element-plus/icons-vue'
import { formatter, parseDate, valueEquals } from '../utils'
import { timePickerDefaultProps } from './props'

import type { Dayjs } from 'dayjs'
import type { ComponentPublicInstance } from 'vue'
import type { Options } from '@popperjs/core'
import type {
  DateModelType,
  DateOrDates,
  DayOrDays,
  PickerOptions,
  SingleOrRange,
  TimePickerDefaultProps,
  UserInput,
} from './props'
import type { TooltipInstance } from '@element-plus/components/tooltip'

// Date object and string

defineOptions({
  name: 'Picker',
})

const props = defineProps(timePickerDefaultProps)
const emit = defineEmits([
  'update:modelValue',
  'change',
  'focus',
  'blur',
  'calendar-change',
  'panel-change',
  'visible-change',
  'keydown',
])

const { lang } = useLocale()

const nsDate = useNamespace('date')
const nsInput = useNamespace('input')
const nsRange = useNamespace('range')

const { form, formItem } = useFormItem()
const elPopperOptions = inject('ElPopperOptions', {} as Options)

const refPopper = ref<TooltipInstance>()
const inputRef = ref<HTMLElement | ComponentPublicInstance>()
const pickerVisible = ref(false)
const pickerActualVisible = ref(false)
const valueOnOpen = ref<TimePickerDefaultProps['modelValue'] | null>(null)

let hasJustTabExitedInput = false
let ignoreFocusEvent = false

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
    emit('change', val)
    props.validateEvent &&
      formItem?.validate('change').catch((err) => debugWarn(err))
  }
}
const emitInput = (input: SingleOrRange<DateModelType | Dayjs> | null) => {
  if (!valueEquals(props.modelValue, input)) {
    let formatted
    if (isArray(input)) {
      formatted = input.map((item) =>
        formatter(item, props.valueFormat, lang.value)
      )
    } else if (input) {
      formatted = formatter(input, props.valueFormat, lang.value)
    }
    emit('update:modelValue', input ? formatted : input, lang.value)
  }
}
const emitKeydown = (e: KeyboardEvent) => {
  emit('keydown', e)
}

const refInput = computed<HTMLInputElement[]>(() => {
  if (inputRef.value) {
    const _r = isRangeInput.value
      ? inputRef.value
      : (inputRef.value as any as ComponentPublicInstance).$el
    return Array.from<HTMLInputElement>(_r.querySelectorAll('input'))
  }
  return []
})

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
const focusOnInputBox = () => {
  focus(true, true)
  nextTick(() => {
    ignoreFocusEvent = false
  })
}

const onPick = (date: any = '', visible = false) => {
  if (!visible) {
    ignoreFocusEvent = true
  }
  pickerVisible.value = visible
  let result
  if (isArray(date)) {
    result = date.map((_) => _.toDate())
  } else {
    // clear btn emit null
    result = date ? date.toDate() : date
  }
  userInput.value = null
  emitInput(result)
}

const onBeforeShow = () => {
  pickerActualVisible.value = true
}

const onShow = () => {
  emit('visible-change', true)
}

const onKeydownPopperContent = (event: KeyboardEvent) => {
  if ((event as KeyboardEvent)?.key === EVENT_CODE.esc) {
    focus(true, true)
  }
}

const onHide = () => {
  pickerActualVisible.value = false
  pickerVisible.value = false
  ignoreFocusEvent = false
  emit('visible-change', false)
}

const handleOpen = () => {
  pickerVisible.value = true
}

const handleClose = () => {
  pickerVisible.value = false
}

const focus = (focusStartInput = true, isIgnoreFocusEvent = false) => {
  ignoreFocusEvent = isIgnoreFocusEvent
  const [leftInput, rightInput] = unref(refInput)
  let input = leftInput
  if (!focusStartInput && isRangeInput.value) {
    input = rightInput
  }
  if (input) {
    input.focus()
  }
}

const handleFocusInput = (e?: FocusEvent) => {
  if (
    props.readonly ||
    pickerDisabled.value ||
    pickerVisible.value ||
    ignoreFocusEvent
  ) {
    return
  }
  pickerVisible.value = true
  emit('focus', e)
}

let currentHandleBlurDeferCallback:
  | (() => Promise<void> | undefined)
  | undefined = undefined

// Check if document.activeElement is inside popper or any input before popper close
const handleBlurInput = (e?: FocusEvent) => {
  const handleBlurDefer = async () => {
    setTimeout(() => {
      if (currentHandleBlurDeferCallback === handleBlurDefer) {
        if (
          !(
            refPopper.value?.isFocusInsideContent() && !hasJustTabExitedInput
          ) &&
          refInput.value.filter((input) => {
            return input.contains(document.activeElement)
          }).length === 0
        ) {
          handleChange()
          pickerVisible.value = false
          emit('blur', e)
          props.validateEvent &&
            formItem?.validate('blur').catch((err) => debugWarn(err))
        }
        hasJustTabExitedInput = false
      }
    }, 0)
  }
  currentHandleBlurDeferCallback = handleBlurDefer
  handleBlurDefer()
}

const pickerDisabled = computed(() => {
  return props.disabled || form?.disabled
})

const parsedValue = computed(() => {
  let dayOrDays: DayOrDays
  if (valueIsEmpty.value) {
    if (pickerOptions.value.getDefaultValue) {
      dayOrDays = pickerOptions.value.getDefaultValue()
    }
  } else {
    if (isArray(props.modelValue)) {
      dayOrDays = props.modelValue.map((d) =>
        parseDate(d, props.valueFormat, lang.value)
      ) as [Dayjs, Dayjs]
    } else {
      dayOrDays = parseDate(props.modelValue, props.valueFormat, lang.value)!
    }
  }

  if (pickerOptions.value.getRangeAvailableTime) {
    const availableResult = pickerOptions.value.getRangeAvailableTime(
      dayOrDays!
    )
    if (!isEqual(availableResult, dayOrDays!)) {
      dayOrDays = availableResult
      emitInput(
        (isArray(dayOrDays)
          ? dayOrDays.map((_) => _.toDate())
          : dayOrDays.toDate()) as SingleOrRange<Date>
      )
    }
  }
  if (isArray(dayOrDays!) && dayOrDays.some((day) => !day)) {
    dayOrDays = [] as unknown as DayOrDays
  }
  return dayOrDays!
})

const displayValue = computed<UserInput>(() => {
  if (!pickerOptions.value.panelReady) return ''
  const formattedValue = formatDayjsToString(parsedValue.value)
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
    return isDatesPicker.value
      ? (formattedValue as Array<string>).join(', ')
      : formattedValue
  }
  return ''
})

const isTimeLikePicker = computed(() => props.type.includes('time'))

const isTimePicker = computed(() => props.type.startsWith('time'))

const isDatesPicker = computed(() => props.type === 'dates')

const triggerIcon = computed(
  () => props.prefixIcon || (isTimeLikePicker.value ? Clock : Calendar)
)

const showClose = ref(false)

const onClearIconClick = (event: MouseEvent) => {
  if (props.readonly || pickerDisabled.value) return
  if (showClose.value) {
    event.stopPropagation()
    focusOnInputBox()
    emitInput(null)
    emitChange(null, true)
    showClose.value = false
    pickerVisible.value = false
    pickerOptions.value.handleClear && pickerOptions.value.handleClear()
  }
}

const valueIsEmpty = computed(() => {
  const { modelValue } = props
  return (
    !modelValue || (isArray(modelValue) && !modelValue.filter(Boolean).length)
  )
})

const onMouseDownInput = async (event: MouseEvent) => {
  if (props.readonly || pickerDisabled.value) return
  if (
    (event.target as HTMLElement)?.tagName !== 'INPUT' ||
    refInput.value.includes(document.activeElement as HTMLInputElement)
  ) {
    pickerVisible.value = true
  }
}
const onMouseEnter = () => {
  if (props.readonly || pickerDisabled.value) return
  if (!valueIsEmpty.value && props.clearable) {
    showClose.value = true
  }
}
const onMouseLeave = () => {
  showClose.value = false
}
const onTouchStartInput = (event: TouchEvent) => {
  if (props.readonly || pickerDisabled.value) return
  if (
    (event.touches[0].target as HTMLElement)?.tagName !== 'INPUT' ||
    refInput.value.includes(document.activeElement as HTMLInputElement)
  ) {
    pickerVisible.value = true
  }
}
const isRangeInput = computed(() => {
  return props.type.includes('range')
})

const pickerSize = useSize()

const popperEl = computed(() => unref(refPopper)?.popperRef?.contentRef)
const actualInputRef = computed(() => {
  if (unref(isRangeInput)) {
    return unref(inputRef)
  }

  return (unref(inputRef) as ComponentPublicInstance)?.$el
})

onClickOutside(actualInputRef, (e: PointerEvent) => {
  const unrefedPopperEl = unref(popperEl)
  const inputEl = unref(actualInputRef)
  if (
    (unrefedPopperEl &&
      (e.target === unrefedPopperEl ||
        e.composedPath().includes(unrefedPopperEl))) ||
    e.target === inputEl ||
    e.composedPath().includes(inputEl)
  )
    return
  pickerVisible.value = false
})

const userInput = ref<UserInput>(null)

const handleChange = () => {
  if (userInput.value) {
    const value = parseUserInputToDayjs(displayValue.value)
    if (value) {
      if (isValidValue(value)) {
        emitInput(
          (isArray(value)
            ? value.map((_) => _.toDate())
            : value.toDate()) as DateOrDates
        )
        userInput.value = null
      }
    }
  }
  if (userInput.value === '') {
    emitInput(null)
    emitChange(null)
    userInput.value = null
  }
}

const parseUserInputToDayjs = (value: UserInput) => {
  if (!value) return null
  return pickerOptions.value.parseUserInput!(value)
}

const formatDayjsToString = (value: DayOrDays) => {
  if (!value) return null
  return pickerOptions.value.formatToString!(value)
}

const isValidValue = (value: DayOrDays) => {
  return pickerOptions.value.isValidValue!(value)
}

const handleKeydownInput = async (event: KeyboardEvent) => {
  if (props.readonly || pickerDisabled.value) return

  const { code } = event
  emitKeydown(event)
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
    if (
      userInput.value === null ||
      userInput.value === '' ||
      isValidValue(parseUserInputToDayjs(displayValue.value) as DayOrDays)
    ) {
      handleChange()
      pickerVisible.value = false
    }
    event.stopPropagation()
    return
  }

  // if user is typing, do not let picker handle key input
  if (userInput.value) {
    event.stopPropagation()
    return
  }
  if (pickerOptions.value.handleKeydownInput) {
    pickerOptions.value.handleKeydownInput(event)
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
      formatDayjsToString(value) as string,
      displayValue.value?.[1] || null,
    ]
    const newValue = [value, parsedVal && (parsedVal[1] || null)] as DayOrDays
    if (isValidValue(newValue)) {
      emitInput(newValue)
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
      formatDayjsToString(value) as string,
    ]
    const newValue = [parsedVal && parsedVal[0], value] as DayOrDays
    if (isValidValue(newValue)) {
      emitInput(newValue)
      userInput.value = null
    }
  }
}

const pickerOptions = ref<Partial<PickerOptions>>({})
const onSetPickerOption = <T extends keyof PickerOptions>(
  e: [T, PickerOptions[T]]
) => {
  pickerOptions.value[e[0]] = e[1]
  pickerOptions.value.panelReady = true
}

const onCalendarChange = (e: [Date, false | Date]) => {
  emit('calendar-change', e)
}

const onPanelChange = (
  value: [Dayjs, Dayjs],
  mode: 'month' | 'year',
  view: unknown
) => {
  emit('panel-change', value, mode, view)
}

provide('EP_PICKER_BASE', {
  props,
})

defineExpose({
  /**
   * @description focus input box.
   */
  focus,
  /**
   * @description emit focus event
   */
  handleFocusInput,
  /**
   * @description emit blur event
   */
  handleBlurInput,
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

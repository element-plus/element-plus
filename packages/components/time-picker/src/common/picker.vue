<template>
  <el-tooltip
    ref="refPopper"
    v-model:visible="pickerVisible"
    effect="light"
    pure
    trigger="click"
    v-bind="$attrs"
    append-to-body
    transition="el-zoom-in-top"
    :popper-class="`el-picker__popper ${popperClass}`"
    :popper-options="elPopperOptions"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :gpu-acceleration="false"
    :stop-popper-mouse-event="false"
    :hide-after="0"
    persistent
    @show="pickerActualVisible = true"
    @hide="pickerActualVisible = false"
  >
    <template #default>
      <el-input
        v-if="!isRangeInput"
        :id="id"
        ref="inputRef"
        :model-value="displayValue"
        :name="name"
        :size="pickerSize"
        :disabled="pickerDisabled"
        :placeholder="placeholder"
        class="el-date-editor"
        :class="['el-date-editor--' + type, $attrs.class || undefined]"
        :style="$attrs.style || undefined"
        :readonly="!editable || readonly || isDatesPicker || type === 'week'"
        @input="onUserInput"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @change="handleChange"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @click.stop
      >
        <template #prefix>
          <el-icon
            v-if="triggerIcon"
            class="el-input__icon"
            @click="handleFocus"
          >
            <component :is="triggerIcon"></component>
          </el-icon>
        </template>
        <template #suffix>
          <el-icon
            v-if="showClose && clearIcon"
            class="el-input__icon clear-icon"
            @click="onClearIconClick"
          >
            <component :is="clearIcon" />
          </el-icon>
        </template>
      </el-input>
      <div
        v-else
        ref="inputRef"
        class="el-date-editor el-range-editor el-input__inner"
        :class="[
          'el-date-editor--' + type,
          pickerSize ? `el-range-editor--${pickerSize}` : '',
          pickerDisabled ? 'is-disabled' : '',
          pickerVisible ? 'is-active' : '',
          $attrs.class || undefined,
        ]"
        :style="$attrs.style || undefined"
        @click="handleFocus"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @keydown="handleKeydown"
      >
        <el-icon
          v-if="triggerIcon"
          class="el-input__icon el-range__icon"
          @click="handleFocus"
        >
          <component :is="triggerIcon"></component>
        </el-icon>
        <input
          :id="id && id[0]"
          autocomplete="off"
          :name="name && name[0]"
          :placeholder="startPlaceholder"
          :value="displayValue && displayValue[0]"
          :disabled="pickerDisabled"
          :readonly="!editable || readonly"
          class="el-range-input"
          @input="handleStartInput"
          @change="handleStartChange"
          @focus="handleFocus"
        />
        <slot name="range-separator">
          <span class="el-range-separator">{{ rangeSeparator }}</span>
        </slot>
        <input
          :id="id && id[1]"
          autocomplete="off"
          :name="name && name[1]"
          :placeholder="endPlaceholder"
          :value="displayValue && displayValue[1]"
          :disabled="pickerDisabled"
          :readonly="!editable || readonly"
          class="el-range-input"
          @focus="handleFocus"
          @input="handleEndInput"
          @change="handleEndChange"
        />
        <el-icon
          v-if="clearIcon"
          class="el-input__icon el-range__close-icon"
          :class="{
            'el-range__close-icon--hidden': !showClose,
          }"
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
        @mousedown.stop
      ></slot>
    </template>
  </el-tooltip>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  nextTick,
  inject,
  watch,
  provide,
  unref,
} from 'vue'
import dayjs from 'dayjs'
import { isEqual } from 'lodash-unified'
import { onClickOutside } from '@vueuse/core'
import { useLocale, useSize } from '@element-plus/hooks'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import ElInput from '@element-plus/components/input'
import ElIcon from '@element-plus/components/icon'
import ElTooltip from '@element-plus/components/tooltip'
import { EVENT_CODE, isEmpty } from '@element-plus/utils-v2'
import { Clock, Calendar } from '@element-plus/icons-vue'
import { timePickerDefaultProps } from './props'

import type { Dayjs } from 'dayjs'
import type { ComponentPublicInstance } from 'vue'
import type { ElFormContext, ElFormItemContext } from '@element-plus/tokens'
import type { Options } from '@popperjs/core'

interface PickerOptions {
  isValidValue: (date: Dayjs) => boolean
  handleKeydown: (event: KeyboardEvent) => void
  parseUserInput: (value: Dayjs) => dayjs.Dayjs
  formatToString: (value: Dayjs) => string | string[]
  getRangeAvailableTime: (date: Dayjs) => dayjs.Dayjs
  getDefaultValue: () => Dayjs
  panelReady: boolean
  handleClear: () => void
}

// Date object and string
const dateEquals = function (a: Date | any, b: Date | any) {
  const aIsDate = a instanceof Date
  const bIsDate = b instanceof Date
  if (aIsDate && bIsDate) {
    return a.getTime() === b.getTime()
  }
  if (!aIsDate && !bIsDate) {
    return a === b
  }
  return false
}

const valueEquals = function (a: Array<Date> | any, b: Array<Date> | any) {
  const aIsArray = a instanceof Array
  const bIsArray = b instanceof Array
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false
    }
    return (a as Array<Date>).every((item, index) => dateEquals(item, b[index]))
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b)
  }
  return false
}

const parser = function (
  date: Date | string,
  format: string,
  lang: string
): Dayjs {
  const day =
    isEmpty(format) || format === 'x'
      ? dayjs(date).locale(lang)
      : dayjs(date, format).locale(lang)
  return day.isValid() ? day : undefined
}

const formatter = function (date: number | Date, format: string, lang: string) {
  if (isEmpty(format)) return date
  if (format === 'x') return +date
  return dayjs(date).locale(lang).format(format)
}

export default defineComponent({
  name: 'Picker',
  components: {
    ElInput,
    ElTooltip,
    ElIcon,
  },
  props: timePickerDefaultProps,
  emits: [
    'update:modelValue',
    'change',
    'focus',
    'blur',
    'calendar-change',
    'panel-change',
  ],
  setup(props, ctx) {
    const { lang } = useLocale()

    const elForm = inject(elFormKey, {} as ElFormContext)
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
    const elPopperOptions = inject('ElPopperOptions', {} as Options)

    const refPopper = ref<InstanceType<typeof ElTooltip>>()
    const inputRef = ref<HTMLElement | ComponentPublicInstance>()
    const pickerVisible = ref(false)
    const pickerActualVisible = ref(false)
    const valueOnOpen = ref(null)

    watch(pickerVisible, (val) => {
      if (!val) {
        userInput.value = null
        nextTick(() => {
          emitChange(props.modelValue)
        })
        ctx.emit('blur')
        blurInput()
        props.validateEvent && elFormItem.validate?.('blur')
      } else {
        valueOnOpen.value = props.modelValue
      }
    })
    const emitChange = (val, isClear?: boolean) => {
      // determine user real change only
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        ctx.emit('change', val)
        props.validateEvent && elFormItem.validate?.('change')
      }
    }
    const emitInput = (val) => {
      if (!valueEquals(props.modelValue, val)) {
        let formatValue
        if (Array.isArray(val)) {
          formatValue = val.map((_) =>
            formatter(_, props.valueFormat, lang.value)
          )
        } else if (val) {
          formatValue = formatter(val, props.valueFormat, lang.value)
        }
        ctx.emit('update:modelValue', val ? formatValue : val, lang.value)
      }
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
    const refStartInput = computed(() => {
      return refInput?.value[0]
    })
    const refEndInput = computed(() => {
      return refInput?.value[1]
    })
    const setSelectionRange = (start, end, pos) => {
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
    const onPick = (date: any = '', visible = false) => {
      pickerVisible.value = visible
      let result
      if (Array.isArray(date)) {
        result = date.map((_) => _.toDate())
      } else {
        // clear btn emit null
        result = date ? date.toDate() : date
      }
      userInput.value = null
      emitInput(result)
    }

    const focus = (focusStartInput = true) => {
      let input = refStartInput.value
      if (!focusStartInput && isRangeInput.value) {
        input = refEndInput.value
      }
      if (input) {
        input.focus()
      }
    }

    const handleFocus = (e) => {
      if (props.readonly || pickerDisabled.value || pickerVisible.value) return
      pickerVisible.value = true
      ctx.emit('focus', e)
    }

    const handleBlur = () => {
      refPopper.value?.onClose()
      blurInput()
    }

    const pickerDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    const parsedValue = computed(() => {
      let result
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          result = pickerOptions.value.getDefaultValue()
        }
      } else {
        if (Array.isArray(props.modelValue)) {
          result = props.modelValue.map((_) =>
            parser(_, props.valueFormat, lang.value)
          )
        } else {
          result = parser(props.modelValue, props.valueFormat, lang.value)
        }
      }

      if (pickerOptions.value.getRangeAvailableTime) {
        const availableResult =
          pickerOptions.value.getRangeAvailableTime(result)
        if (!isEqual(availableResult, result)) {
          result = availableResult
          emitInput(
            Array.isArray(result)
              ? result.map((_) => _.toDate())
              : result.toDate()
          )
        }
      }
      if (Array.isArray(result) && result.some((_) => !_)) {
        result = []
      }
      return result
    })

    const displayValue = computed(() => {
      if (!pickerOptions.value.panelReady) return
      const formattedValue = formatDayjsToString(parsedValue.value)
      if (Array.isArray(userInput.value)) {
        return [
          userInput.value[0] || (formattedValue && formattedValue[0]) || '',
          userInput.value[1] || (formattedValue && formattedValue[1]) || '',
        ]
      } else if (userInput.value !== null) {
        return userInput.value
      }
      if (!isTimePicker.value && valueIsEmpty.value) return
      if (!pickerVisible.value && valueIsEmpty.value) return
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

    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value) return
      if (showClose.value) {
        event.stopPropagation()
        emitInput(null)
        emitChange(null, true)
        showClose.value = false
        pickerVisible.value = false
        pickerOptions.value.handleClear && pickerOptions.value.handleClear()
      }
    }
    const valueIsEmpty = computed(() => {
      return (
        !props.modelValue ||
        (Array.isArray(props.modelValue) && !props.modelValue.length)
      )
    })
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value) return
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true
      }
    }
    const onMouseLeave = () => {
      showClose.value = false
    }
    const isRangeInput = computed(() => {
      return props.type.indexOf('range') > -1
    })

    const pickerSize = useSize()

    const popperPaneRef = computed(() => {
      return refPopper.value?.popperRef?.contentRef
    })

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

    const userInput = ref(null)

    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value)
        if (value) {
          if (isValidValue(value)) {
            emitInput(
              Array.isArray(value)
                ? value.map((_) => _.toDate())
                : value.toDate()
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

    const blurInput = () => {
      refInput.value.forEach((input) => input.blur())
    }

    const parseUserInputToDayjs = (value) => {
      if (!value) return null
      return pickerOptions.value.parseUserInput(value)
    }

    const formatDayjsToString = (value) => {
      if (!value) return null
      return pickerOptions.value.formatToString(value)
    }

    const isValidValue = (value) => {
      return pickerOptions.value.isValidValue(value)
    }

    const handleKeydown = (event) => {
      const code = event.code

      if (code === EVENT_CODE.esc) {
        pickerVisible.value = false
        event.stopPropagation()
        return
      }

      if (code === EVENT_CODE.tab) {
        if (!isRangeInput.value) {
          handleChange()
          pickerVisible.value = false
          event.stopPropagation()
        } else {
          // user may change focus between two input
          setTimeout(() => {
            if (refInput.value.indexOf(document.activeElement) === -1) {
              pickerVisible.value = false
              blurInput()
            }
          }, 0)
        }
        return
      }

      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (
          userInput.value === null ||
          userInput.value === '' ||
          isValidValue(parseUserInputToDayjs(displayValue.value))
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

      if (pickerOptions.value.handleKeydown) {
        pickerOptions.value.handleKeydown(event)
      }
    }
    const onUserInput = (e) => {
      userInput.value = e
    }

    const handleStartInput = (event) => {
      if (userInput.value) {
        userInput.value = [event.target.value, userInput.value[1]]
      } else {
        userInput.value = [event.target.value, null]
      }
    }

    const handleEndInput = (event) => {
      if (userInput.value) {
        userInput.value = [userInput.value[0], event.target.value]
      } else {
        userInput.value = [null, event.target.value]
      }
    }

    const handleStartChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[0])
      if (value && value.isValid()) {
        userInput.value = [formatDayjsToString(value), displayValue.value[1]]
        const newValue = [value, parsedValue.value && parsedValue.value[1]]
        if (isValidValue(newValue)) {
          emitInput(newValue)
          userInput.value = null
        }
      }
    }

    const handleEndChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[1])
      if (value && value.isValid()) {
        userInput.value = [displayValue.value[0], formatDayjsToString(value)]
        const newValue = [parsedValue.value && parsedValue.value[0], value]
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

    const onCalendarChange = (e) => {
      ctx.emit('calendar-change', e)
    }

    const onPanelChange = (value, mode, view) => {
      ctx.emit('panel-change', value, mode, view)
    }

    provide('EP_PICKER_BASE', {
      props,
    })

    return {
      // injected popper options
      elPopperOptions,

      isDatesPicker,
      handleEndChange,
      handleStartChange,
      handleStartInput,
      handleEndInput,
      onUserInput,
      handleChange,
      handleKeydown,
      popperPaneRef,
      onClickOutside,
      pickerSize,
      isRangeInput,
      onMouseLeave,
      onMouseEnter,
      onClearIconClick,
      showClose,
      triggerIcon,
      onPick,
      handleFocus,
      handleBlur,
      pickerVisible,
      pickerActualVisible,
      displayValue,
      parsedValue,
      setSelectionRange,
      refPopper,
      inputRef,
      pickerDisabled,
      onSetPickerOption,
      onCalendarChange,
      onPanelChange,
      focus,
    }
  },
})
</script>

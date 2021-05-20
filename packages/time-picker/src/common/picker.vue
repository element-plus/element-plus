<template>
  <el-popper
    ref="refPopper"
    v-model:visible="pickerVisible"
    manual-mode
    effect="light"
    pure
    trigger="click"
    v-bind="$attrs"
    :popper-class="`el-picker__popper ${popperClass}`"
    :popper-options="elPopperOptions"
    transition="el-zoom-in-top"
    :gpu-acceleration="false"
    :stop-popper-mouse-event="false"
    append-to-body
    @before-enter="pickerActualVisible = true"
    @after-leave="pickerActualVisible = false"
  >
    <template #trigger>
      <el-input
        v-if="!isRangeInput"
        v-clickoutside:[popperPaneRef]="onClickOutside"
        :model-value="displayValue"
        :name="name"
        :size="pickerSize"
        :disabled="pickerDisabled"
        :placeholder="placeholder"
        class="el-date-editor"
        :class="'el-date-editor--' + type"
        :readonly="!editable || readonly || isDatesPicker || type === 'week'"
        @input="onUserInput"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @change="handleChange"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <template #prefix>
          <i
            class="el-input__icon"
            :class="triggerClass"
            @click="handleFocus"
          >
          </i>
        </template>
        <template #suffix>
          <i
            class="el-input__icon"
            :class="[showClose ? '' + clearIcon : '']"
            @click="onClearIconClick"
          >
          </i>
        </template>
      </el-input>
      <div
        v-else
        v-clickoutside:[popperPaneRef]="onClickOutside"
        class="el-date-editor el-range-editor el-input__inner"
        :class="[
          'el-date-editor--' + type,
          pickerSize ? `el-range-editor--${ pickerSize }` : '',
          pickerDisabled ? 'is-disabled' : '',
          pickerVisible ? 'is-active' : ''
        ]"
        @click="handleFocus"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        @keydown="handleKeydown"
      >
        <i :class="['el-input__icon', 'el-range__icon', triggerClass]"></i>
        <input
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
        >
        <slot name="range-separator">
          <span class="el-range-separator">{{ rangeSeparator }}</span>
        </slot>
        <input
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
        >
        <i
          :class="[showClose ? '' + clearIcon : '']"
          class="el-input__icon el-range__close-icon"
          @click="onClearIconClick"
        >
        </i>
      </div>
    </template>
    <template #default>
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
        @mousedown.stop
      ></slot>
    </template>
  </el-popper>
</template>
<script lang='ts'>
import {
  defineComponent,
  ref,
  computed,
  nextTick,
  inject,
  watch,
  provide,
} from 'vue'
import dayjs from 'dayjs'
import { ClickOutside } from '@element-plus/directives'
import ElInput from '@element-plus/input'
import ElPopper from '@element-plus/popper'
import { EVENT_CODE } from '@element-plus/utils/aria'
import { useGlobalConfig } from '@element-plus/utils/util'
import { elFormKey, elFormItemKey } from '@element-plus/form'
import { defaultProps } from './props'
import type { ElFormContext, ElFormItemContext } from '@element-plus/form'
import type { Options } from '@popperjs/core'

interface PickerOptions {
  isValidValue: any
  handleKeydown: any
  parseUserInput: any
  formatToString: any
  getRangeAvaliableTime: any
  getDefaultValue: any
  panelReady: boolean
  handleClear: any
}

// Date object and string
const dateEquals = function(a, b) {
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

const valueEquals = function(a, b) {
  const aIsArray = a instanceof Array
  const bIsArray = b instanceof Array
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false
    }
    return a.every((item, index) => dateEquals(item, b[index]))
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b)
  }
  return false
}

export default defineComponent({
  name: 'Picker',
  components: {
    ElInput,
    ElPopper,
  },
  directives: { clickoutside: ClickOutside },
  props: defaultProps,
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, ctx) {
    const ELEMENT = useGlobalConfig()

    const elForm = inject(elFormKey, {} as ElFormContext)
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
    const elPopperOptions = inject('ElPopperOptions', {} as Options)

    const refPopper = ref(null)
    const pickerVisible = ref(false)
    const pickerActualVisible = ref(false)
    const valueOnOpen = ref(null)

    watch(pickerVisible, val => {
      if (!val) {
        userInput.value = null
        nextTick(() => {
          emitChange(props.modelValue)
        })
        ctx.emit('blur')
        blurInput()
        props.validateEvent && elFormItem.formItemMitt?.emit('el.form.blur')
      } else {
        valueOnOpen.value = props.modelValue
      }
    })
    const emitChange = (val, isClear?: boolean) => {
      // determine user real change only
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        ctx.emit('change', val)
        props.validateEvent && elFormItem.formItemMitt?.emit('el.form.change', val)
      }
    }
    const emitInput = val => {
      if (!valueEquals(props.modelValue, val)) {
        ctx.emit('update:modelValue', val)
      }
    }
    const refInput = computed(() => {
      if (refPopper.value.triggerRef) {
        const _r = isRangeInput.value ? refPopper.value.triggerRef : refPopper.value.triggerRef.$el
        return [].slice.call(_r.querySelectorAll('input'))
      }
      return []
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
        result = date.map(_ => _.toDate())
      } else {
        // clear btn emit null
        result = date ? date.toDate() : date
      }
      userInput.value = null
      emitInput(result)
    }
    const handleFocus = e => {
      if (props.readonly || pickerDisabled.value) return
      pickerVisible.value = true
      ctx.emit('focus', e)
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
          result = props.modelValue.map(_=>dayjs(_))
        } else {
          result = dayjs(props.modelValue as Date)
        }
      }

      if (pickerOptions.value.getRangeAvaliableTime) {
        result = pickerOptions.value.getRangeAvaliableTime(result)
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

    const isTimeLikePicker = computed(() => {
      return props.type.indexOf('time') !== -1
    })

    const isTimePicker = computed(() => {
      return props.type.indexOf('time') === 0
    })

    const isDatesPicker = computed(() => {
      return props.type === 'dates'
    })

    const triggerClass = computed(() => {
      return props.prefixIcon || (isTimeLikePicker.value ? 'el-icon-time' : 'el-icon-date')
    })
    const showClose = ref(false)
    const onClearIconClick = event => {
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
      return !props.modelValue || (Array.isArray(props.modelValue) && !props.modelValue.length)
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

    const pickerSize = computed(() => {
      return props.size || elFormItem.size || ELEMENT.size
    })

    const popperPaneRef = computed(() => {
      return refPopper.value?.popperRef
    })

    const onClickOutside = () => {
      if (!pickerVisible.value) return
      pickerVisible.value = false
    }

    const userInput = ref(null)

    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value)
        if (value) {
          if (isValidValue(value)) {
            emitInput(Array.isArray(value) ? value.map(_=> _.toDate()) : value.toDate())
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
      refInput.value.forEach(input => input.blur())
    }

    const parseUserInputToDayjs = value => {
      if (!value) return null
      return pickerOptions.value.parseUserInput(value)
    }

    const formatDayjsToString = value => {
      if (!value) return null
      return pickerOptions.value.formatToString(value)
    }

    const isValidValue = value => {
      return pickerOptions.value.isValidValue(value)
    }

    const handleKeydown = event => {
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

      if (code === EVENT_CODE.enter) {
        if (userInput.value === '' || isValidValue(parseUserInputToDayjs(displayValue.value))) {
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
    const onUserInput = e => {
      userInput.value = e
    }

    const handleStartInput = event => {
      if (userInput.value) {
        userInput.value = [event.target.value, userInput.value[1]]
      } else {
        userInput.value = [event.target.value, null]
      }
    }

    const handleEndInput = event => {
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

    const pickerOptions = ref({} as PickerOptions)
    const onSetPickerOption = e => {
      pickerOptions.value[e[0]] = e[1]
      pickerOptions.value.panelReady = true
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
      triggerClass,
      onPick,
      handleFocus,
      pickerVisible,
      pickerActualVisible,
      displayValue,
      parsedValue,
      setSelectionRange,
      refPopper,
      pickerDisabled,
      onSetPickerOption,
    }
  },
})
</script>

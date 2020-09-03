<template>
  <!-- todo popper props align left  -->
  <!-- todo popper custom popper-class  -->
  <el-popper
    effect="light"
    manual-mode
    :value="pickerVisible"
    pure
  >
    <template #trigger>
      <el-input
        v-if="!isRangeInput"
        ref="refContainer"
        v-clickoutside="onClickOutside"
        :model-value="displayValue"
        :name="name"
        :size="pickerSize"
        :disabled="pickerDisabled"
        :placeholder="placeholder"
        class="el-date-editor"
        :class="'el-date-editor--' + type"
        :readonly="!editable || readonly || type === 'dates' || type === 'week'"
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
        ref="refContainer"
        v-clickoutside="onClickOutside"
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
        :parsed-value="parsedValue"
        :format="format"
        :type="type"
        :default-value="defaultValue"
        v-bind="$attrs"
        @pick="onPick"
        @select-range="setSelectionRange"
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
  inject,
  PropType,
  watch,
  provide,
} from 'vue'
import dayjs from 'dayjs'
import { ClickOutside } from '@element-plus/directives'
import ElInput from '../../input/input.vue'
import { formatDate } from '../time-picker-com/time-picker-utils'
import { Popper as ElPopper } from '@element-plus/popper'
import { eventKeys } from '@element-plus/utils/aria'
import mitt from 'mitt'
// todo element
const ELEMENT = {
  size: '',
}
interface PickerOptions {
  isValidValue: any
}
export default defineComponent({
  name: 'Picker',
  components: {
    ElInput,
    ElPopper,
  },
  directives: { clickoutside: ClickOutside },
  props: {
    name: {
      type: [Array, String],
      default: '',
    },
    format: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
    },
    editable: {
      type: Boolean,
      default: true,
    },
    prefixIcon:{
      type: String,
      default: '',
    },
    size:{
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Date, Array] as PropType<string | number | Array<Date | string>>,
      default: '',
    },
    rangeSeparator: {
      type: String,
      default: '-',
    },
    pickerOptions: {}, // todo top level config
    startPlaceholder: String,
    endPlaceholder: String,
    defaultValue: {
      type: [Date, Array],
      default: new Date(),
    },
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, ctx) {
    const oldValue = ref(props.modelValue)
    const refContainer = ref(null)
    const pickerVisible = ref(false)
    watch(pickerVisible, val => {
      if (!val) {
        userInput.value = null
        ctx.emit('blur')
        blurInput()
      }
    })
    const emitInput = val => {
      ctx.emit('update:modelValue', val)
      // const formatted = formatToValue(val)
      // if (!valueEquals(this.value, formatted)) {
      //   ctx.emit('input', formatted)
      // }
    }
    const refInput = computed(() => {
      if (refContainer.value) {
        const _r = isRangeInput.value ? refContainer.value : refContainer.value.$el
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
    const onPick = (date = '', visible = false, useOldValue = false) => {
      // userInput = null
      pickerVisible.value = visible
      const result = useOldValue ? oldValue : date
      emitInput(result)
      emitChange(result)
    }
    const handleFocus = e => {
      if (props.readonly || pickerDisabled.value) return
      pickerVisible.value = true
      ctx.emit('focus', e)
    }
    const elForm = inject('elForm', {} as any)
    const pickerDisabled = computed(() =>{
      return props.disabled || elForm.disabled
    })
    const parsedValue = computed(() => {
      if (!props.modelValue) {
        if (isRangeInput.value) {
          if (Array.isArray(props.defaultValue)) return props.defaultValue
          return [
            props.defaultValue,
            dayjs(props.defaultValue).add(60,'m').toDate(),
          ]
        } else {
          return props.defaultValue
        }
      }
      // todo modelValue is string with format
      return props.modelValue
    })

    const displayValue = computed(() => {
      if (!pickerVisible.value && !props.modelValue) return
      const formattedValue = formatAsFormatAndType(parsedValue.value, props.format, props.type)
      if (Array.isArray(userInput.value)) {
        return [
          userInput.value[0] || (formattedValue && formattedValue[0]) || '',
          userInput.value[1] || (formattedValue && formattedValue[1]) || '',
        ]
      }
      if (userInput.value !== null) {
        return userInput.value
      }
      if (Array.isArray(parsedValue.value)) {
        return parsedValue.value.map(_ => dayjs(_).format(props.format))
      }
      return dayjs(parsedValue.value).format(props.format)
    })
    const triggerClass = computed(() => {
      return props.prefixIcon || (props.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date')
    })
    const showClose = ref(false)
    const emitChange = val => {
      // determine user real change only
      // if (!valueEquals(val, this.valueOnOpen)) {
      ctx.emit('change', val)
    }
    const onClearIconClick = event =>{
      if (props.readonly || pickerDisabled.value) return
      if (showClose.value) {
        event.stopPropagation()
        emitInput(null)
        emitChange(null)
        showClose.value = false
      }
    }
    const valueIsEmpty = computed(() => {
      return !props.modelValue
    })
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value) return
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true
      }
    }
    const onMouseLeave = e => {
      if (e.relatedTarget && e.relatedTarget.className.includes('icon')) {
        // if not el-icon
        return
      }
      showClose.value = false
    }
    const isRangeInput = computed(() => {
      return props.type.indexOf('range') > -1
    })
    const elFormItem = inject('elFormItem', {} as any)

    // computed
    const elFormItemSize = computed(() => {
      return elFormItem.elFormItemSize
    })
    const pickerSize = computed(() => {
      return props.size || elFormItemSize.value || (ELEMENT || {}).size
    })
    const onClickOutside = () => {
      if (!pickerVisible.value) return
      pickerVisible.value = false
    }

    const userInput =ref(null)

    const handleChange = () => {
      if (userInput.value) {
        const value = parseString(displayValue.value)
        if (value) {
          if (isValidValue(value)) {
            emitInput(value)
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

    const DATE_PARSER = function(text, format) {
      if (format === 'timestamp') return new Date(Number(text))
      return dayjs(text, format).toDate()
    }

    const RANGE_PARSER = function(array, format) {
      if (array.length === 2) {
        const range1 = array[0]
        const range2 = array[1]

        return [DATE_PARSER(range1, format), DATE_PARSER(range2, format)]
      }
      return []
    }

    const parseAsFormatAndType = (value, customFormat, type) => {
      if (!value) return null
      const parser = type === 'timerange' ? RANGE_PARSER : DATE_PARSER
      const format = customFormat
      return parser(value, format)
    }

    const parseString = value => {
      const type = Array.isArray(value) ? props.type : props.type.replace('range', '')
      return parseAsFormatAndType(value, props.format, type)
    }

    const DATE_FORMATTER = function(value, format) {
      if (format === 'timestamp') return value.getTime()
      return formatDate(value, format)
    }

    const RANGE_FORMATTER = function(value, format) {
      if (Array.isArray(value) && value.length === 2) {
        const start = value[0]
        const end = value[1]

        if (start && end) {
          return [DATE_FORMATTER(start, format), DATE_FORMATTER(end, format)]
        }
      }
      return ''
    }

    const formatAsFormatAndType = (value, customFormat, type) => {
      if (!value) return null
      const formatter = RANGE_FORMATTER
      const format = customFormat
      return formatter(value, format)
    }

    const formatToString = value => {
      const type = Array.isArray(value) ? props.type : props.type.replace('range', '')
      return formatAsFormatAndType(value, props.format, type)
    }

    const isValidValue = value => {
      return pickerOptions.isValidValue(value)
    }

    const handleKeydown = event => {
      const keyCode = event.keyCode

      if (keyCode === eventKeys.esc) {
        pickerVisible.value = false
        event.stopPropagation()
        return
      }

      if (keyCode === eventKeys.tab) {
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
              event.stopPropagation()
            }
          }, 0)
        }
        return
      }

      if (keyCode === eventKeys.enter) {
        if (userInput.value === '' || isValidValue(parseString(displayValue.value))) {
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

    }
    const onUserInput = e => {
      userInput.value = e.target.value
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
      const value = parseString(userInput.value && userInput.value[0])
      if (value) {
        userInput.value = [formatToString(value), displayValue.value[1]]
        const newValue = [value, parsedValue.value && parsedValue.value[1]]
        if (isValidValue(newValue)) {
          emitInput(newValue)
          userInput.value = null
        }
      }
    }

    const handleEndChange = () => {
      const value = parseString(userInput.value && userInput.value[1])
      if (value) {
        userInput.value = [displayValue.value[0], formatToString(value)]
        const newValue = [parsedValue.value && parsedValue.value[0], value]
        if (isValidValue(newValue)) {
          emitInput(newValue)
          userInput.value = null
        }
      }
    }

    const pickerOptions = {} as PickerOptions
    const pickerHub = mitt()
    pickerHub.on('isValidValue', e => {
      pickerOptions.isValidValue = e
    })
    provide('EP_PICKER_BASE', pickerHub)
    return {
      handleEndChange,
      handleStartChange,
      handleStartInput,
      handleEndInput,
      onUserInput,
      handleChange,
      handleKeydown,
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
      displayValue,
      parsedValue,
      setSelectionRange,
      refContainer,
      pickerDisabled,
    }
  },
})
</script>

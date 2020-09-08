<template>
  <!-- todo popper props align left  -->
  <!-- todo popper custom popper-class  -->
  <!-- todo bug handleKeydown event twice  -->
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
import ElInput from '@element-plus/input/src/index.vue'
import { Popper as ElPopper } from '@element-plus/popper'
import { eventKeys } from '@element-plus/utils/aria'
import mitt from 'mitt'
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

// todo element
const ELEMENT = {
  size: '',
}
interface PickerOptions {
  isValidValue: any
  handleKeydown: any
  parseUserInput: any
  formatToString: any
  getRangeAvaliableTime: any
  panelReady: boolean
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
      type: [Date, Array, String] as PropType<string | Date | Date[]>,
      default: '',
    },
    rangeSeparator: {
      type: String,
      default: '-',
    },
    startPlaceholder: String,
    endPlaceholder: String,
    defaultValue: {
      type: [Date, Array] as PropType<Date | Date[]>,
      default: new Date(),
    },
    isRange: {
      type: Boolean,
      default: false,
    },
    enabledHours: {
      type: Function,
      default: null,
    },
    enabledMinutes: {
      type: Function,
      default: null,
    },
    enabledSeconds: {
      type: Function,
      default: null,
    },
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, ctx) {
    const oldValue = ref(props.modelValue)
    const refContainer = ref(null)
    const pickerVisible = ref(false)
    const valueOnOpen = ref(null)
    watch(pickerVisible, val => {
      if (!val) {
        userInput.value = null
        ctx.emit('blur')
        blurInput()
      } else {
        valueOnOpen.value = props.modelValue
      }
    })
    const emitChange = val => {
      // determine user real change only
      if (!valueEquals(val, valueOnOpen.value)) {
        ctx.emit('change', val)
      }
    }
    const emitInput = val => {
      if (!valueEquals(props.modelValue, val)) {
        ctx.emit('update:modelValue', val)
      }
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
    const onPick = (date: any = '', visible = false, useOldValue = false) => {
      pickerVisible.value = visible
      let result
      if (useOldValue) {
        result = oldValue.value
      } else {
        if (Array.isArray(date)) {
          result = date.map(_ => _.toDate())
        } else {
          result = date.toDate()
        }
      }
      userInput.value = null
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
      let result
      if (isRangeInput.value) {
        if (!props.modelValue) {
          if (Array.isArray(props.defaultValue)) {
            result = (props.defaultValue as Array<Date>).map(_=> dayjs(_))
          } else {
            result = [
              dayjs(props.defaultValue as Date),
              dayjs(props.defaultValue as Date).add(60,'m'),
            ]
          }
        } else {
          result = (props.modelValue as Array<Date>).map(_=> dayjs(_))
        }
      } else {
        if (!props.modelValue) {
          result = dayjs(props.defaultValue as Date)
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
      if (!pickerVisible.value && !props.modelValue) return
      const formattedValue = formatDayjsToString(parsedValue.value)
      if (Array.isArray(userInput.value)) {
        return [
          userInput.value[0] || (formattedValue && formattedValue[0]) || '',
          userInput.value[1] || (formattedValue && formattedValue[1]) || '',
        ]
      } else if (userInput.value !== null) {
        return userInput.value
      }
      if (formattedValue) {
        return props.type === 'dates'
          ? (formattedValue as Array<string>).join(', ')
          : formattedValue
      }
      return ''
    })
    const triggerClass = computed(() => {
      return props.prefixIcon || (props.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date')
    })
    const showClose = ref(false)
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
        // if not el-icon then close
        return
      }
      showClose.value = false
    }
    const isRangeInput = computed(() => {
      return props.type.indexOf('range') > -1
    })
    const elFormItem = inject('elFormItem', {} as any)

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
        const value = parseUserInputToDayjs(displayValue.value)
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

    const parseUserInputToDayjs = value => {
      return pickerOptions.value.parseUserInput(value)
    }

    const formatDayjsToString = value => {
      return pickerOptions.value.formatToString(value)
    }

    const isValidValue = value => {
      return pickerOptions.value.isValidValue(value)
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
      const value = parseUserInputToDayjs(userInput.value && userInput.value[0])
      if (value) {
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
      if (value) {
        userInput.value = [displayValue.value[0], formatDayjsToString(value)]
        const newValue = [parsedValue.value && parsedValue.value[0], value]
        if (isValidValue(newValue)) {
          emitInput(newValue)
          userInput.value = null
        }
      }
    }

    const pickerOptions = ref({} as PickerOptions)
    const pickerHub = mitt()
    pickerHub.on('SetPickerOption', e => {
      pickerOptions.value[e[0]] = e[1]
      pickerOptions.value.panelReady = true
    })
    provide('EP_PICKER_BASE', {
      hub: pickerHub,
      props,
    })
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

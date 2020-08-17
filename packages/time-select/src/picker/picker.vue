<template>
  <div>
    <el-input
      ref="refInput"
      class="el-date-editor el-date-editor--time-select"
      :readonly="!editable || readonly"
      :disabled="pickerDisabled"
      :placeholder="placeholder"
      :model-value="displayValue"
      @focus="handleFocus"
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
    <slot
      :visible="pickerVisible"
      :parsed-value="parsedValue"
      :picker-options="pickerOptions"
      @pick="onPick"
      @select-range="setSelectionRange"
    ></slot>
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  ref,
  computed,
  inject,
} from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'Picker',
  props: {
    editable: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close',
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
      type: [String, Date],
      default: '',
    },
    pickerOptions: {}, // todo top level config
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const refInput = ref(null)
    const pickerVisible = ref(false)
    const emitInput = (val) => {
      ctx.emit('update:modelValue', val)
      // const formatted = formatToValue(val)
      // if (!valueEquals(this.value, formatted)) {
      //   ctx.emit('input', formatted)
      // }
    }
    const setSelectionRange = (start, end, pos) => {
      const _input = refInput.value.$el.querySelector('input')
      _input.setSelectionRange(start, end)
      _input.focus()
      // if (this.refInput.length === 0) return
      // if (!pos || pos === 'min') {
      //   this.refInput[0].setSelectionRange(start, end)
      //   this.refInput[0].focus()
      // } else if (pos === 'max') {
      //   this.refInput[1].setSelectionRange(start, end)
      //   this.refInput[1].focus()
      // }
    }
    const onPick = (date = '', visible = false) => {
      // userInput = null
      pickerVisible.value = visible
      emitInput(date)
    }
    const handleFocus = () => {
      pickerVisible.value = true
    }
    const elForm = inject('elForm', {} as any)
    const pickerDisabled = computed(() =>{
      return props.disabled || elForm.disabled
    })
    const parsedValue = computed(() => {
      if (!props.modelValue) return props.modelValue // component value is not set
      return props.modelValue
    })

    const displayValue = computed(() => {
      return dayjs(props.modelValue).format('HH:mm:ss')
    })
    const triggerClass = computed(() => {
      return props.prefixIcon || 'el-icon-time'
    })
    const showClose = ref(false)
    const emitChange = (val) => {
      // determine user real change only
      // if (!valueEquals(val, this.valueOnOpen)) {
      ctx.emit('change', val)
    }
    const onClearIconClick = (event) =>{
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
    const onMouseLeave = () => {
      showClose.value = false
    }
    return {
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
      refInput,
      pickerDisabled,
    }
  },
})
</script>

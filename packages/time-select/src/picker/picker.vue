<template>
  <div>
    <!-- todo remove this div after using popper -->
    <!-- todo no popper time range middle .el-time-panel__content::before zindex error-->
    <el-input
      v-if="!isRangeInput"
      ref="refContainer"
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
    <div
      v-else
      ref="refContainer"
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
    >
      <i :class="['el-input__icon', 'el-range__icon', triggerClass]"></i>
      <input
        autocomplete="off"
        :placeholder="startPlaceholder"
        :value="displayValue && displayValue[0]"
        :disabled="pickerDisabled"
        v-bind="firstInputId"
        :readonly="!editable || readonly"
        :name="name && name[0]"
        class="el-range-input"
        @focus="handleFocus"
      >
      <slot name="range-separator">
        <span class="el-range-separator">{{ rangeSeparator }}</span>
      </slot>
      <input
        autocomplete="off"
        :placeholder="endPlaceholder"
        :value="displayValue && displayValue[1]"
        :disabled="pickerDisabled"
        v-bind="secondInputId"
        :readonly="!editable || readonly"
        :name="name && name[1]"
        class="el-range-input"
        @focus="handleFocus"
      >
      <i
        :class="[showClose ? '' + clearIcon : '']"
        class="el-input__icon el-range__close-icon"
        @click="onClearIconClick"
      >
      </i>
    </div>
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
    type: {
      type: String,
      default: '',
    },
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
    rangeSeparator: {
      type: String,
      default: '-',
    },
    pickerOptions: {}, // todo top level config
    startPlaceholder: String,
    endPlaceholder: String,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, ctx) {
    const refContainer = ref(null)
    const pickerVisible = ref(false)
    const emitInput = (val) => {
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
      //todo if no modelValue but has defaultValue
      return props.modelValue
    })

    const displayValue = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return props.modelValue.map(_ => dayjs(_).format('HH:mm:ss'))
      }
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
    const isRangeInput = computed(() => {
      return props.type.indexOf('range') > -1
    })
    return {
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

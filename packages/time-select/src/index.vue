<template>
  <div>
    <el-input
      ref="refInput"
      class="el-date-editor el-date-editor--time-select"
      :placeholder="placeholder"
      :model-value="displayValue"
      @focus="handleFocus"
    >
      <template #prefix>
        <i
          class="el-input__icon el-icon-time"
          :class="triggerClass"
          @click="handleFocus"
        >
        </i>
      </template>
    </el-input>
    <TimePick
      :visible="pickerVisible"
      :parsed-value="parsedValue"
      :picker-options="pickerOptions"
      @pick="onPick"
      @select-range="setSelectionRange"
    />
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  ref,
  computed,
} from 'vue'
import dayjs from 'dayjs'
import TimePick from './time-pick.vue'

export default defineComponent({
  name: 'ElTimePicker',
  components: {
    TimePick,
  },
  props: {
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

    const parsedValue = computed(() => {
      if (!props.modelValue) return props.modelValue // component value is not set
      return props.modelValue
    })

    const displayValue = computed(() => {
      return dayjs(props.modelValue).format('HH:mm:ss')
    })
    return {
      triggerClass: [],
      onPick,
      handleFocus,
      pickerVisible,
      displayValue,
      parsedValue,
      setSelectionRange,
      refInput,
    }
  },
})
</script>

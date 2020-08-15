<template>
  <div>
    <el-input
      class="el-date-editor el-date-editor--time-select"
      :placeholder="placeholder"
      :value="displayValue"
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
      :visible="true"
    />
  </div>
</template>
<script lang='ts'>
import {
  defineComponent,
  ref,
  computed,
} from 'vue'
import TimePick from './time-pick.vue'
import TimeSpinner from './time-spinner.vue'

export default defineComponent({
  name: 'ElTimePicker',
  components: {
    TimePick,
    TimeSpinner,
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
  },
  setup(props, ctx) {
    const pickerVisible = ref(false)
    const emitInput = (val) => {
      ctx.emit('update:modelValue', val)
      // const formatted = formatToValue(val)
      // if (!valueEquals(this.value, formatted)) {
      //   ctx.emit('input', formatted)
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
      return props.modelValue
    })
    return {
      triggerClass: [],
      onPick,
      handleFocus,
      pickerVisible,
      displayValue,
    }
  },
})
</script>

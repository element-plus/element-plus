<template>
  <div
    ref="sliderWrapper"
    class="el-slider"
    :class="{ 'is-vertical': vertical, 'el-slider--with-input': showInput }"
    role="slider"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-orientation="vertical ? 'vertical': 'horizontal'"
    :aria-disabled="sliderDisabled"
  >
    <el-input-number
      v-if="showInput && !range"
      ref="input"
      v-model="firstValue"
      class="el-slider__input"
      :step="step"
      :disabled="sliderDisabled"
      :controls="showInputControls"
      :min="min"
      :max="max"
      :debounce="debounce"
      :size="inputSize"
      @change="emitChange"
    />
    <div
      ref="slider"
      class="el-slider__runway"
      :class="{ 'show-input': showInput, 'disabled': sliderDisabled }"
      :style="runwayStyle"
      @click="onSliderClick"
    >
      <div
        class="el-slider__bar"
        :style="barStyle"
      >
      </div>
      <slider-button
        ref="button1"
        v-model="firstValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
      />
      <slider-button
        v-if="range"
        ref="button2"
        v-model="secondValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
      />
      <div v-if="showStops">
        <div
          v-for="(item, key) in stops"

          :key="key"
          class="el-slider__stop"
          :style="getStopStyle(item)"
        ></div>
      </div>
      <template v-if="markList.length > 0">
        <div>
          <div
            v-for="(item, key) in markList"
            :key="key"
            :style="getStopStyle(item.position)"
            class="el-slider__stop el-slider__marks-stop"
          >
          </div>
        </div>
        <div class="el-slider__marks">
          <slider-marker
            v-for="(item, key) in markList"
            :key="key"
            :mark="item.mark"
            :style="getStopStyle(item.position)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  provide,
  computed,
  watch,
  readonly,
  Ref,
  ComputedRef,
  onMounted,
  onBeforeUnmount,
} from 'vue'
// import ElInputNumber from '@element-plus/input-number'
import SliderButton from './button.vue'
import SliderMarker from './marker.vue'
import { useSlide } from './useSlide'
import { useStops } from './useStops'
import { useMarks } from './useMarks'
import { ISliderInitData, ISliderProps } from './Slider'

export default defineComponent({
  name: 'ElSlider',

  components: {
    ElInputNumber,
    SliderButton,
    SliderMarker,
  },

  props: {
    modelValue: {
      type: [Number, Array],
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: [Number, Array],
      default: 0,
    },
    showInput: {
      type: Boolean,
      default: false,
    },
    showInputControls: {
      type: Boolean,
      default: true,
    },
    inputSize: {
      type: String,
      default: 'small',
    },
    showStops: {
      type: Boolean,
      default: false,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    formatTooltip: {
      type: Function,
      default: (value:number) => value,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: '',
    },
    debounce: {
      type: Number,
      default: 300,
    },
    label: {
      type: String,
      default: () => undefined,
    },
    tooltipClass: {
      type: String,
      default: () => undefined,
    },
    marks: {
      type:Object,
      default: value => value,
    },
  },

  emits: ['update:modelValue', 'change'],

  setup(props: ISliderProps, { emit }){

    const initData:ISliderInitData = reactive({
      firstValue: null,
      secondValue: null,
      oldValue: null,
      dragging: false,
      sliderSize: 1,
    })

    const {
      slider,
      button1,
      button2,
      sliderDisabled,
      minValue,
      maxValue,
      runwayStyle,
      barStyle,
      resetSize,
      emitChange,
      onSliderClick,
    } = useSlide(props, initData, emit)

    const {
      stops,
      getStopStyle,
    } = useStops(props, initData, minValue, maxValue)

    const {
      markList,
    } = useMarks(props)

    useWatch(props, initData, minValue, maxValue, emit)

    const precision:ComputedRef<number> = computed(() => {
      let precisions = [props.min, props.max, props.step].map(item => {
        let decimal = ('' + item).split('.')[1]
        return decimal ? decimal.length : 0
      })
      return Math.max.apply(null, precisions)
    })

    useLifecycle(props, initData, resetSize)



    const {
      firstValue,
      secondValue,
      oldValue,
      dragging,
      sliderSize,
    } = toRefs(initData)

    const updateDragging = (val:boolean) => {
      initData.dragging = val
    }

    provide('SliderProvider', readonly({
      sliderDisabled: sliderDisabled,
      min: props.min,
      max: props.max,
      step: props.step,
      showTooltip: props.showTooltip,
      precision: precision,
      sliderSize: sliderSize,
      formatTooltip: props.formatTooltip,
      emitChange: emitChange,
      resetSize: resetSize,
      updateDragging: updateDragging,
    }))

    return {
      firstValue,
      secondValue,
      oldValue,
      dragging,
      sliderSize,

      slider,
      button1,
      button2,
      sliderDisabled,
      runwayStyle,
      barStyle,
      emitChange,
      onSliderClick,
      getStopStyle,

      stops,
      markList,
    }
  },
})

const useWatch = (props, initData, minValue, maxValue, emit) => {

  const valueChanged = () => {
    if (props.range) {
      return ![minValue.value, maxValue.value]
        .every((item, index) => item === initData.oldValue[index])
    } else {
      return props.value !== initData.oldValue
    }
  }

  const setValues = () => {
    if (props.min > props.max) {
      console.error('[Element Error][Slider]min should not be greater than max.')
      return
    }
    const val = props.value
    if (props.range && Array.isArray(val)) {
      if (val[1] < props.min) {
        emit('input', [props.min, props.min])
      } else if (val[0] > props.max) {
        emit('input', [props.max, props.max])
      } else if (val[0] < props.min) {
        emit('input', [props.min, val[1]])
      } else if (val[1] > props.max) {
        emit('input', [val[0], props.max])
      } else {
        initData.firstValue = val[0]
        initData.secondValue = val[1]
        if (valueChanged()) {
          emit('update:modelValue', [minValue.value, maxValue.value])
          initData.oldValue = val.slice()
        }
      }
    } else if (!props.range && typeof val === 'number' && !isNaN(val)) {
      if (val < props.min) {
        emit('input', props.min)
      } else if (val > props.max) {
        emit('input', props.max)
      } else {
        initData.firstValue = val
        if (valueChanged()) {
          emit('update:modelValue', val)
          initData.oldValue = val
        }
      }
    }
  }

  watch(() => initData.dragging, val => {
    if (!val) {
      setValues()
    }
  })

  watch(() => initData.firstValue, val => {
    if (props.range) {
      emit('input', [minValue.value, maxValue.value])
    } else {
      emit('input', val)
    }
  })

  watch(() => initData.secondValue, () => {
    if (props.range) {
      emit('input', [minValue.value, maxValue.value])
    }
  })

  watch(() => props.value, (val, oldVal) => {
    if (initData.dragging ||
      Array.isArray(val) &&
      Array.isArray(oldVal) &&
      val.every((item, index) => item === oldVal[index])) {
      return
    }
    setValues()
  })

  watch(() => props.min, () => {
    setValues()
  })

  watch(() => props.max, () => {
    setValues()
  })
}

const useLifecycle = (props, initData, resetSize) => {
  const sliderWrapper:Ref<HTMLHtmlElement> = ref(null)

  onMounted(() => {
    let valuetext
    if (props.range) {
      if (Array.isArray(props.value)) {
        initData.firstValue = Math.max(props.min, props.value[0])
        initData.secondValue = Math.min(props.max, props.value[1])
      } else {
        initData.firstValue = props.min
        initData.secondValue = props.max
      }
      initData.oldValue = [initData.firstValue, initData.secondValue]
      valuetext = `${initData.firstValue}-${initData.secondValue}`
    } else {
      if (typeof props.value !== 'number' || isNaN(props.value)) {
        initData.firstValue = props.min
      } else {
        initData.firstValue = Math.min(props.max, Math.max(props.min, props.value))
      }
      initData.oldValue = initData.firstValue
      valuetext = initData.firstValue
    }

    sliderWrapper.value.setAttribute('aria-valuetext', valuetext)

    // label screen reader
    sliderWrapper.value.setAttribute('aria-label', props.label ? props.label : `slider between ${props.min} and ${props.max}`)

    resetSize()
    window.addEventListener('resize', resetSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resetSize)
  })
}
</script>

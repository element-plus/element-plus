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
      :class="{ 'show-input': showInput && !range, 'disabled': sliderDisabled }"
      :style="runwayStyle"
      @click="onSliderClick"
    >
      <div
        class="el-slider__bar"
        :style="barStyle"
      >
      </div>
      <slider-button
        ref="firstButton"
        v-model="firstValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
      />
      <slider-button
        v-if="range"
        ref="secondButton"
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
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  Ref,
  toRefs,
  watch,
} from 'vue'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '@element-plus/utils/constants'
import { off, on } from '@element-plus/utils/dom'
import throwError from '@element-plus/utils/error'
import ElInputNumber from '@element-plus/input-number'
import SliderButton from './button.vue'
import SliderMarker from './marker.vue'
import { useMarks } from './useMarks'
import { useSlide } from './useSlide'
import { useStops } from './useStops'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ElSlider',

  components: {
    ElInputNumber,
    SliderButton,
    SliderMarker,
  },

  props: {
    modelValue: {
      type: [Number, Array] as PropType<number | number[]>,
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
      type: Function as PropType<(val: number) => number | string>,
      default: undefined,
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
      default: undefined,
    },
    tooltipClass: {
      type: String,
      default: undefined,
    },
    marks: Object,
  },

  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT],

  setup(props, { emit }) {
    const initData = reactive({
      firstValue: 0,
      secondValue: 0,
      oldValue: 0,
      dragging: false,
      sliderSize: 1,
    })

    const {
      elFormItem,
      slider,
      firstButton,
      secondButton,
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

    const markList = useMarks(props)

    useWatch(props, initData, minValue, maxValue, emit, elFormItem)

    const precision = computed(() => {
      let precisions = [props.min, props.max, props.step].map(item => {
        let decimal = ('' + item).split('.')[1]
        return decimal ? decimal.length : 0
      })
      return Math.max.apply(null, precisions)
    })

    const { sliderWrapper } = useLifecycle(props, initData, resetSize)

    const {
      firstValue,
      secondValue,
      oldValue,
      dragging,
      sliderSize,
    } = toRefs(initData)

    const updateDragging = (val: boolean) => {
      initData.dragging = val
    }

    provide('SliderProvider', {
      ...toRefs(props),
      sliderSize,
      disabled: sliderDisabled,
      precision: precision,
      emitChange: emitChange,
      resetSize: resetSize,
      updateDragging: updateDragging,
    })

    return {
      firstValue,
      secondValue,
      oldValue,
      dragging,
      sliderSize,

      slider,
      firstButton,
      secondButton,
      sliderDisabled,
      runwayStyle,
      barStyle,
      emitChange,
      onSliderClick,
      getStopStyle,

      stops,
      markList,

      sliderWrapper,
    }
  },
})

const useWatch = (props, initData, minValue, maxValue, emit, elFormItem) => {

  const _emit = (val: number | number[]) => {
    emit(UPDATE_MODEL_EVENT, val)
    emit(INPUT_EVENT, val)
  }

  const valueChanged = () => {
    if (props.range) {
      return ![minValue.value, maxValue.value]
        .every((item, index) => item === initData.oldValue[index])
    } else {
      return props.modelValue !== initData.oldValue
    }
  }

  const setValues = () => {
    if (props.min > props.max) {
      throwError('Slider', 'min should not be greater than max.')
      return
    }
    const val = props.modelValue
    if (props.range && Array.isArray(val)) {
      if (val[1] < props.min) {
        _emit([props.min, props.min])
      } else if (val[0] > props.max) {
        _emit([props.max, props.max])
      } else if (val[0] < props.min) {
        _emit([props.min, val[1]])
      } else if (val[1] > props.max) {
        _emit([val[0], props.max])
      } else {
        initData.firstValue = val[0]
        initData.secondValue = val[1]
        if (valueChanged()) {
          elFormItem.formItemMitt?.emit('el.form.change', [minValue.value, maxValue.value])
          initData.oldValue = val.slice()
        }
      }
    } else if (!props.range && typeof val === 'number' && !isNaN(val)) {
      if (val < props.min) {
        _emit(props.min)
      } else if (val > props.max) {
        _emit(props.max)
      } else {
        initData.firstValue = val
        if (valueChanged()) {
          elFormItem.formItemMitt?.emit('el.form.change', val)
          initData.oldValue = val
        }
      }
    }
  }

  setValues()

  watch(() => initData.dragging, val => {
    if (!val) {
      setValues()
    }
  })

  watch(() => initData.firstValue, val => {
    if (props.range) {
      _emit([minValue.value, maxValue.value])
    } else {
      _emit(val)
    }
  })

  watch(() => initData.secondValue, () => {
    if (props.range) {
      _emit([minValue.value, maxValue.value])
    }
  })

  watch(() => props.modelValue, (val, oldVal) => {
    if (initData.dragging
      || Array.isArray(val)
      && Array.isArray(oldVal)
      && val.every((item, index) => item === oldVal[index])) {
      return
    }
    setValues()
  })

  watch(() => [props.min, props.max], () => {
    setValues()
  })
}

const useLifecycle = (props, initData, resetSize) => {
  const sliderWrapper: Ref<Nullable<HTMLElement>> = ref(null)

  onMounted(async () => {
    let valuetext
    if (props.range) {
      if (Array.isArray(props.modelValue)) {
        initData.firstValue = Math.max(props.min, props.modelValue[0])
        initData.secondValue = Math.min(props.max, props.modelValue[1])
      } else {
        initData.firstValue = props.min
        initData.secondValue = props.max
      }
      initData.oldValue = [initData.firstValue, initData.secondValue]
      valuetext = `${ initData.firstValue }-${ initData.secondValue }`
    } else {
      if (typeof props.modelValue !== 'number' || isNaN(props.modelValue)) {
        initData.firstValue = props.min
      } else {
        initData.firstValue = Math.min(props.max, Math.max(props.min, props.modelValue))
      }
      initData.oldValue = initData.firstValue
      valuetext = initData.firstValue
    }

    sliderWrapper.value.setAttribute('aria-valuetext', valuetext)

    // label screen reader
    sliderWrapper.value.setAttribute('aria-label', props.label ? props.label : `slider between ${ props.min } and ${ props.max }`)

    on(window, 'resize', resetSize)

    await nextTick()
    resetSize()
  })

  onBeforeUnmount(() => {
    off(window, 'resize', resetSize)
  })

  return {
    sliderWrapper,
  }
}
</script>

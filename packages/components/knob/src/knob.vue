<template>
  <div ref="knobRef" :class="[ns.b(), ns.m(type), ns.is('disabled', disabled)]">
    <svg
      viewBox="0 0 100 100"
      role="slider"
      :width="size"
      :height="size"
      :tabindex="readonly || disabled ? -1 : tabindex"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="modelValue"
      :aria-labelledby="ariaLabelledby"
      :aria-label="ariaLabel"
      @click="onClick"
      @keydown="onKeyDown"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
      @touchstart.passive="onTouchStart"
      @touchend="onTouchEnd"
    >
      <path
        :d="rangePath"
        :stroke-width="strokeWidth"
        :stroke="rangeColor"
        :class="[ns.e('range')]"
      />
      <path
        :d="valuePath"
        :stroke-width="strokeWidth"
        :stroke="valueColor"
        :class="[ns.e('value')]"
      />
      <text
        v-if="showValue"
        :x="50"
        :y="57"
        text-anchor="middle"
        :fill="textColor"
        :class="[ns.e('text')]"
      >
        {{ valueToDisplay }}
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { knobProps } from './knob'

const MathPI = 3.14159265358979

defineOptions({
  name: 'ElKnob',
})

const ns = useNamespace('knob')

const props = defineProps(knobProps)
const emits = defineEmits(['update:modelValue', 'change'])

const knobRef = ref(undefined)

const radius = ref(40)
const midX = ref(50)
const midY = ref(50)
const minRadians = (4 * MathPI) / 3
const maxRadians = -MathPI / 3

const updateValue = (offsetX: number, offsetY: number) => {
  const dx = offsetX - props.size / 2
  const dy = props.size / 2 - offsetY
  const angle = Math.atan2(dy, dx)
  const start = -MathPI / 2 - MathPI / 6
  updateModel(angle, start)
}
const updateModel = (angle: number, start: number) => {
  let mappedValue

  if (angle > maxRadians)
    mappedValue = mapRange(angle, minRadians, maxRadians, props.min, props.max)
  else if (angle < start)
    mappedValue = mapRange(
      angle + 2 * MathPI,
      minRadians,
      maxRadians,
      props.min,
      props.max
    )
  else return

  const newValue =
    Math.round((mappedValue - props.min) / props.step) * props.step + props.min

  emits('update:modelValue', newValue)
  emits('change', newValue)
}
const updateModelValue = (newValue: number) => {
  if (newValue > props.max) emits('update:modelValue', props.max)
  else if (newValue < props.min) emits('update:modelValue', props.min)
  else emits('update:modelValue', newValue)
}
const mapRange = (
  x: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
const onClick = (event: any) => {
  if (!props.disabled && !props.readonly) {
    updateValue(event.offsetX, event.offsetY)
  }
}
const onMouseDown = (event: any) => {
  if (!props.disabled && !props.readonly) {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    event.preventDefault()
  }
}
const onMouseUp = (event: any) => {
  if (!props.disabled && !props.readonly) {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    event.preventDefault()
  }
}
const onTouchStart = (event: any) => {
  if (!props.disabled && !props.readonly) {
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    event.preventDefault()
  }
}
const onTouchEnd = (event: any) => {
  if (!props.disabled && !props.readonly) {
    window.removeEventListener('touchmove', onTouchMove)
    window.removeEventListener('touchend', onTouchEnd)
    event.preventDefault()
  }
}
const onMouseMove = (event: any) => {
  if (!props.disabled && !props.readonly) {
    updateValue(event.offsetX, event.offsetY)
    event.preventDefault()
  }
}
const onTouchMove = (event: any) => {
  if (!props.disabled && !props.readonly && event.touches.length == 1) {
    const rect = knobRef.value.$el.getBoundingClientRect()
    const touch = event.targetTouches.item(0)
    const offsetX = touch.clientX - rect.left
    const offsetY = touch.clientY - rect.top

    updateValue(offsetX, offsetY)
  }
}
const onKeyDown = (event: any) => {
  if (!props.disabled && !props.readonly) {
    switch (event.code) {
      case 'ArrowRight':
      case 'ArrowUp': {
        event.preventDefault()
        updateModelValue(props.modelValue + props.step)
        break
      }

      case 'ArrowLeft':
      case 'ArrowDown': {
        event.preventDefault()
        updateModelValue(props.modelValue - props.step)
        break
      }
      case 'Home': {
        event.preventDefault()
        emits('update:modelValue', props.min)
        break
      }
      case 'End': {
        event.preventDefault()
        emits('update:modelValue', props.max)
        break
      }
      case 'PageUp': {
        event.preventDefault()
        updateModelValue(props.modelValue + 10)
        break
      }
      case 'PageDown': {
        event.preventDefault()
        updateModelValue(props.modelValue - 10)
        break
      }
    }
  }
}

const rangePath = computed(() => {
  return `M ${minX.value} ${minY.value} A ${radius.value} ${radius.value} 0 1 1 ${maxX.value} ${maxY.value}`
})
const valuePath = computed(() => {
  return `M ${zeroX.value} ${zeroY.value} A ${radius.value} ${radius.value} 0 ${largeArc.value} ${sweep.value} ${valueX.value} ${valueY.value}`
})
const zeroRadians = computed(() => {
  if (props.min > 0 && props.max > 0)
    return mapRange(props.min, props.min, props.max, minRadians, maxRadians)
  else return mapRange(0, props.min, props.max, minRadians, maxRadians)
})
const valueRadians = computed(() => {
  return mapRange(
    props.modelValue,
    props.min,
    props.max,
    minRadians,
    maxRadians
  )
})
const minX = computed(() => {
  return midX.value + Math.cos(minRadians) * radius.value
})
const minY = computed(() => {
  return midY.value - Math.sin(minRadians) * radius.value
})
const maxX = computed(() => {
  return midX.value + Math.cos(maxRadians) * radius.value
})
const maxY = computed(() => {
  return midY.value - Math.sin(maxRadians) * radius.value
})
const zeroX = computed(() => {
  return midX.value + Math.cos(zeroRadians.value) * radius.value
})
const zeroY = computed(() => {
  return midY.value - Math.sin(zeroRadians.value) * radius.value
})
const valueX = computed(() => {
  return midX.value + Math.cos(valueRadians.value) * radius.value
})
const valueY = computed(() => {
  return midY.value - Math.sin(valueRadians.value) * radius.value
})
const largeArc = computed(() => {
  return Math.abs(zeroRadians.value - valueRadians.value) < MathPI ? 0 : 1
})
const sweep = computed(() => {
  return valueRadians.value > zeroRadians.value ? 0 : 1
})
const valueToDisplay = computed(() => {
  if (typeof props.valueTemplate === 'string') {
    return props.valueTemplate.replace(/{value}/g, props.modelValue)
  } else {
    return props.valueTemplate(props.modelValue)
  }
})
</script>

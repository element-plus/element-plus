<template>
  <div
    :class="[ns.b(), ns.is('disabled', disabled), ns.is('border', border)]"
    @focusout="handleFocusout"
  >
    <div v-if="showGradient" :class="ns.e('gradient-toggle')">
      <el-segmented
        v-model="colorState"
        size="small"
        :options="[
          { label: t('el.colorpicker.solid'), value: 'solid' },
          { label: t('el.colorpicker.gradient'), value: 'gradient' },
        ]"
        :disabled="disabled"
        @change="handleSegmentedChange"
      />
    </div>
    <div
      v-if="showGradient && color.isGradient"
      ref="gradientBarRef"
      :class="[ns.e('gradient-bar'), ns.is('disabled', disabled)]"
    >
      <div
        :class="[
          ns.e('gradient-dot'),
          ns.is('active', editingGradientPart === 'start'),
          ns.is('disabled', disabled),
        ]"
        :style="getDotStyle('start')"
        @click="handleDotClick('start')"
        @mousedown="(e) => handleDotMouseDown('start', e)"
      />
      <div
        :class="[ns.e('gradient-track'), ns.is('disabled', disabled)]"
        :style="{ background: color.toGradientValue() }"
      />
      <div
        :class="[
          ns.e('gradient-dot'),
          ns.is('active', editingGradientPart === 'end'),
          ns.is('disabled', disabled),
        ]"
        :style="getDotStyle('end')"
        @click="handleDotClick('end')"
        @mousedown="(e) => handleDotMouseDown('end', e)"
      />
    </div>
    <div :class="ns.e('wrapper')">
      <hue-slider
        ref="hueRef"
        :color="color"
        vertical
        :disabled="disabled"
        :class="['hue-slider', hueSliderClass]"
        :style="hueSliderStyle"
      />
      <sv-panel ref="svRef" :color="color" :disabled="disabled" />
    </div>
    <alpha-slider
      v-if="showAlpha"
      ref="alphaRef"
      :color="color"
      :disabled="disabled"
    />
    <predefine
      v-if="predefine && !color.isGradient"
      ref="predefine"
      :enable-alpha="showAlpha"
      :color="color"
      :colors="predefine"
      :disabled="disabled"
    />
    <div :class="ns.e('footer')">
      <el-input
        ref="inputRef"
        v-model="displayInputValue"
        :validate-event="false"
        size="small"
        :disabled="disabled"
        @change="handleConfirm"
      />
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, nextTick, onMounted, provide, ref, watch } from 'vue'
import { ElInput } from '@element-plus/components/input'
import { ElSegmented } from '@element-plus/components/segmented'
import { useFormDisabled, useFormItem } from '@element-plus/components/form'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { NOOP } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { TinyColor } from '@ctrl/tinycolor'
import AlphaSlider from './components/alpha-slider.vue'
import HueSlider from './components/hue-slider.vue'
import Predefine from './components/predefine.vue'
import SvPanel from './components/sv-panel.vue'
import {
  ROOT_COMMON_COLOR_INJECTION_KEY,
  colorPickerPanelContextKey,
  colorPickerPanelEmits,
} from './color-picker-panel'
import { useCommonColor } from './composables/use-common-color'

import type { ColorPickerPanelProps } from './color-picker-panel'
import type { InputInstance } from '@element-plus/components/input'

defineOptions({
  name: 'ElColorPickerPanel',
})
const props = withDefaults(defineProps<ColorPickerPanelProps>(), {
  modelValue: undefined,
  border: true,
  validateEvent: true,
  showAlpha: false,
  showGradient: false,
})
const emit = defineEmits(colorPickerPanelEmits)

const ns = useNamespace('color-picker-panel')
const { formItem } = useFormItem()
const { t } = useLocale()
const disabled = useFormDisabled()
const hueRef = ref<InstanceType<typeof HueSlider>>()
const svRef = ref<InstanceType<typeof SvPanel>>()
const alphaRef = ref<InstanceType<typeof AlphaSlider>>()
const inputRef = ref<InputInstance>()
const customInput = ref('')
const gradientStartInput = ref('')
const gradientEndInput = ref('')
const colorState = ref<'solid' | 'gradient'>('solid')
const editingGradientPart = ref<'start' | 'end'>('start')
const gradientBarRef = ref<HTMLElement>()
const draggingDot = ref<'start' | 'end' | null>(null)
const animationFrameId = ref<number | null>(null)
const isDragging = ref(false)

// Get dot style with dynamic box-shadow based on color
const getDotStyle = (part: 'start' | 'end') => {
  const dotColor = part === 'start' ? color.startValue : color.endValue
  const isActive = editingGradientPart.value === part
  const baseStyle = {
    backgroundColor: dotColor,
    left: `${part === 'start' ? color.startPosition : color.endPosition}%`,
  }
  if (isActive) {
    return {
      ...baseStyle,
      transform: 'translate(-50%, -50%) scale(1.15)',
      boxShadow: `0 0 0 2px ${dotColor}, 0 0 3px rgba(0, 0, 0, 0.2)`,
    }
  }
  return baseStyle
}

// Use stable function references
let handleMouseMoveFunc: ((event: MouseEvent) => void) | null = null
let handleMouseUpFunc: (() => void) | null = null

const { color } = inject(
  ROOT_COMMON_COLOR_INJECTION_KEY,
  () => useCommonColor(props, emit),
  true
)

const displayInputValue = computed({
  get() {
    if (color.isGradient) {
      return editingGradientPart.value === 'start'
        ? color.startValue
        : color.endValue
    }
    return color.value
  },
  set(val: string) {
    customInput.value = val
  },
})

function handleConfirm() {
  const val = displayInputValue.value
  if (color.isGradient) {
    const tc = new TinyColor(val)
    const formattedVal = color.enableAlpha ? tc.toRgbString() : tc.toHexString()
    if (editingGradientPart.value === 'start') {
      color.startValue = formattedVal
    } else {
      color.endValue = formattedVal
    }
    color.fromString(val)
  } else {
    color.fromString(val)
    customInput.value = color.value
  }
}

function handleSegmentedChange(value: 'solid' | 'gradient') {
  if (value === 'solid') {
    switchToSolid()
  } else {
    switchToGradient()
  }
}

function handleDotClick(part: 'start' | 'end') {
  editingGradientPart.value = part
  color.editingGradientPart = part
  const targetValue = part === 'start' ? color.startValue : color.endValue
  if (targetValue) {
    color.fromString(targetValue)
  }
}

// Drag-related functions
handleMouseMoveFunc = (event: MouseEvent) => {
  if (!draggingDot.value || !gradientBarRef.value) return

  // Cancel previous animation frame to avoid jitter
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value)
  }

  // Use requestAnimationFrame to optimize performance and avoid jitter
  animationFrameId.value = requestAnimationFrame(() => {
    const barRect = gradientBarRef.value!.getBoundingClientRect()
    const barWidth = barRect.width
    const offsetX = event.clientX - barRect.left

    // Calculate position percentage (0-100), keep 2 decimal places
    const newPosition = Math.max(
      0,
      Math.min(100, Math.round((offsetX / barWidth) * 100 * 100) / 100)
    )

    // Update corresponding dot position
    if (draggingDot.value === 'start') {
      // Left dot moving right and meets right dot -> switch to right dot
      if (newPosition > color.endPosition) {
        draggingDot.value = 'end'
        editingGradientPart.value = 'end'
        color.editingGradientPart = 'end'
        color.fromString(color.endValue)
      }
      color.startPosition = Math.min(newPosition, color.endPosition)
    } else {
      // Right dot moving left and meets left dot -> switch to left dot
      if (newPosition < color.startPosition) {
        draggingDot.value = 'start'
        editingGradientPart.value = 'start'
        color.editingGradientPart = 'start'
        color.fromString(color.startValue)
      }
      color.endPosition = Math.max(newPosition, color.startPosition)
    }

    // Trigger update
    emit(UPDATE_MODEL_EVENT, color.toGradientValue())
    animationFrameId.value = null
  })
}

handleMouseUpFunc = () => {
  // Clean up animation frame
  if (animationFrameId.value !== null) {
    cancelAnimationFrame(animationFrameId.value)
    animationFrameId.value = null
  }

  isDragging.value = false
  draggingDot.value = null
  if (handleMouseMoveFunc) {
    document.removeEventListener('mousemove', handleMouseMoveFunc)
  }
  if (handleMouseUpFunc) {
    document.removeEventListener('mouseup', handleMouseUpFunc)
  }
}

function handleDotMouseDown(part: 'start' | 'end', event: MouseEvent) {
  if (disabled.value) return
  event.preventDefault()
  draggingDot.value = part
  isDragging.value = true

  // Switch editing state
  editingGradientPart.value = part
  color.editingGradientPart = part
  const targetValue = part === 'start' ? color.startValue : color.endValue
  if (targetValue) {
    color.fromString(targetValue)
  }

  if (handleMouseMoveFunc) {
    document.addEventListener('mousemove', handleMouseMoveFunc)
  }
  if (handleMouseUpFunc) {
    document.addEventListener('mouseup', handleMouseUpFunc)
  }
}

function switchToSolid() {
  colorState.value = 'solid'
  color.isGradient = false
  color.setSolidColor(color.startValue || color.value || '#000000')
  emit(UPDATE_MODEL_EVENT, color.value)
}

function switchToGradient() {
  colorState.value = 'gradient'
  color.isGradient = true
  editingGradientPart.value = 'start'
  color.editingGradientPart = 'start'
  const startVal = color.startValue || color.value || '#ff0000'
  const endVal = color.endValue || '#0000ff'
  color.startPosition = 0
  color.endPosition = 100
  color.setGradient(startVal, endVal)
  gradientStartInput.value = startVal
  gradientEndInput.value = endVal
  emit(UPDATE_MODEL_EVENT, color.toGradientValue())
}

function isGradientValue(value: string): boolean {
  return value.includes('gradient')
}

function parseGradientValue(value: string): { start: string; end: string } {
  const match = value.match(/rgba?\([^)]+\)|#[0-9a-fA-F]+/g)
  if (match && match.length >= 2) {
    const startColor = new TinyColor(match[0])
    const endColor = new TinyColor(match[match.length - 1])
    const formatColor = (c: TinyColor) =>
      color.enableAlpha ? c.toRgbString() : c.toHexString()
    return {
      start: formatColor(startColor),
      end: formatColor(endColor),
    }
  }
  return {
    start: '#ff0000',
    end: '#0000ff',
  }
}

function handleFocusout() {
  if (props.validateEvent) {
    formItem?.validate?.('blur').catch(NOOP)
  }
}

function update() {
  hueRef.value?.update()
  svRef.value?.update()
  alphaRef.value?.update()
}

onMounted(() => {
  if (props.modelValue) {
    if (isGradientValue(props.modelValue)) {
      const { start, end } = parseGradientValue(props.modelValue)
      color.startValue = start
      color.endValue = end
      color.startPosition = 0
      color.endPosition = 100
      color.isGradient = true
      color.editingGradientPart = 'start'
      editingGradientPart.value = 'start'
      colorState.value = 'gradient'
      gradientStartInput.value = start
      gradientEndInput.value = end
      color.fromString(start)
    } else {
      color.fromString(props.modelValue)
      customInput.value = color.value
    }
  }
  nextTick(update)
})

watch(
  () => props.modelValue,
  (newVal) => {
    if (!newVal) {
      color.clear()
      return
    }

    // Don't reset positions during dragging
    if (isDragging.value) {
      return
    }

    if (isGradientValue(newVal)) {
      const { start, end } = parseGradientValue(newVal)
      color.startValue = start
      color.endValue = end
      // Only reset positions if they are not already set
      if (color.startPosition === 0 && color.endPosition === 100) {
        color.startPosition = 0
        color.endPosition = 100
      }
      color.isGradient = true
    } else if (newVal !== color.value) {
      if (!color.isGradient) {
        color.fromString(newVal)
      }
    }
  }
)

watch(
  () => color.value,
  (val) => {
    if (!color.isGradient) {
      emit(UPDATE_MODEL_EVENT, val)
    }
    if (props.validateEvent) {
      formItem?.validate('change').catch(NOOP)
    }
  }
)

watch(
  () => [color.startValue, color.endValue],
  () => {
    if (color.isGradient) {
      gradientStartInput.value = color.startValue || ''
      gradientEndInput.value = color.endValue || ''
      emit(UPDATE_MODEL_EVENT, color.toGradientValue())
    }
  }
)

provide(colorPickerPanelContextKey, {
  currentColor: computed(() => color.value),
})

defineExpose({
  /**
   * @description current color object
   */
  color,
  /**
   * @description custom input ref
   */
  inputRef,
  /**
   * @description update sub components
   */
  update,
})
</script>

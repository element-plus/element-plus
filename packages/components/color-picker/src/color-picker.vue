<template>
  <el-tooltip
    ref="popper"
    :visible="showPicker"
    :show-arrow="false"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :offset="0"
    :gpu-acceleration="false"
    :popper-class="[ns.be('picker', 'panel'), popperClass!]"
    :popper-style="popperStyle"
    :stop-popper-mouse-event="false"
    pure
    loop
    role="dialog"
    effect="light"
    trigger="click"
    :teleported="teleported"
    :transition="`${ns.namespace.value}-zoom-in-top`"
    :persistent="persistent"
    :append-to="appendTo"
    @show="handleShowTooltip"
    @hide="setShowPicker(false)"
  >
    <template #content>
      <el-color-picker-panel
        ref="pickerPanelRef"
        v-bind="panelProps"
        v-click-outside:[triggerRef]="handleClickOutside"
        :border="false"
        :validate-event="false"
        @keydown.esc="handleEsc"
      >
        <template #footer>
          <div>
            <el-button
              v-if="clearable"
              :class="ns.be('footer', 'link-btn')"
              text
              size="small"
              @click="clear"
            >
              {{ t('el.colorpicker.clear') }}
            </el-button>
            <el-button
              plain
              size="small"
              :class="ns.be('footer', 'btn')"
              @click="confirmValue"
            >
              {{ t('el.colorpicker.confirm') }}
            </el-button>
          </div>
        </template>
      </el-color-picker-panel>
    </template>
    <template #default>
      <div
        :id="buttonId"
        ref="triggerRef"
        v-bind="$attrs"
        :class="btnKls"
        role="button"
        :aria-label="buttonAriaLabel"
        :aria-labelledby="buttonAriaLabelledby"
        :aria-description="
          t('el.colorpicker.description', { color: modelValue || '' })
        "
        :aria-disabled="colorDisabled"
        :tabindex="colorDisabled ? undefined : tabindex"
        @keydown="handleKeyDown"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <div :class="ns.be('picker', 'trigger')" @click="handleTrigger">
          <span :class="[ns.be('picker', 'color'), ns.is('alpha', showAlpha)]">
            <span :class="ns.be('picker', 'color-inner')" :style="colorStyle">
              <el-icon
                v-show="modelValue || showPanelColor"
                :class="[ns.be('picker', 'icon'), ns.is('icon-arrow-down')]"
              >
                <arrow-down />
              </el-icon>
              <el-icon
                v-show="!modelValue && !showPanelColor"
                :class="[ns.be('picker', 'empty'), ns.is('icon-close')]"
              >
                <close />
              </el-icon>
            </span>
          </span>
        </div>
      </div>
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { computed, nextTick, provide, ref, watch } from 'vue'
import { debounce, pick } from 'lodash-unified'
import { ElIcon } from '@element-plus/components/icon'
import { reactiveComputed } from '@vueuse/core'
import { ClickOutside as vClickOutside } from '@element-plus/directives'
import { ElTooltip } from '@element-plus/components/tooltip'
import { ElButton } from '@element-plus/components/button'
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
  useFormSize,
} from '@element-plus/components/form'
import {
  useEmptyValues,
  useFocusController,
  useLocale,
  useNamespace,
} from '@element-plus/hooks'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { NOOP, getEventCode } from '@element-plus/utils'
import { ArrowDown, Close } from '@element-plus/icons-vue'
import { colorPickerEmits, colorPickerPropsDefaults } from './color-picker'
import {
  ElColorPickerPanel,
  ROOT_COMMON_COLOR_INJECTION_KEY,
  colorPickerPanelProps,
} from '@element-plus/components/color-picker-panel'
import Color from '@element-plus/components/color-picker-panel/src/utils/color'
import { TinyColor } from '@ctrl/tinycolor'
import { useCommonColor } from '@element-plus/components/color-picker-panel/src/composables/use-common-color'

import type { ColorPickerPanelInstance } from '@element-plus/components/color-picker-panel'
import type { TooltipInstance } from '@element-plus/components/tooltip'
import type { ColorPickerProps } from './color-picker'

defineOptions({
  name: 'ElColorPicker',
})
const props = withDefaults(
  defineProps<ColorPickerProps>(),
  colorPickerPropsDefaults
)

const emit = defineEmits(colorPickerEmits)

const { t } = useLocale()
const ns = useNamespace('color')
const { formItem } = useFormItem()
const colorSize = useFormSize()
const colorDisabled = useFormDisabled()
const { valueOnClear, isEmptyValue } = useEmptyValues(props, null)
const commonColor = useCommonColor(props, emit)
const { inputId: buttonId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const popper = ref<TooltipInstance>()
const triggerRef = ref()
const pickerPanelRef = ref<ColorPickerPanelInstance>()
const showPicker = ref(false)
const showPanelColor = ref(false)

// active-change is used to prevent modelValue changes from triggering.
let shouldActiveChange = true

const { isFocused, handleFocus, handleBlur } = useFocusController(triggerRef, {
  disabled: colorDisabled,
  beforeBlur(event) {
    return popper.value?.isFocusInsideContent(event)
  },
  afterBlur() {
    setShowPicker(false)
    resetColor()
    if (props.validateEvent) {
      formItem?.validate?.('blur').catch(NOOP)
    }
  },
})

const color = reactiveComputed(
  () => pickerPanelRef.value?.color ?? commonColor.color
) as Color

const panelProps = computed(() =>
  pick(props, Object.keys(colorPickerPanelProps))
)

const colorStyle = computed(() => {
  if (!props.modelValue && !showPanelColor.value) {
    return { backgroundColor: 'transparent' }
  }
  // 渐变模式下使用 background 样式
  if (color.isGradient) {
    return {
      background: color.toGradientValue(),
      backgroundColor: undefined,
    }
  }
  // When persistent=false, panel is not rendered so color.isGradient is not set.
  // Parse gradient directly from modelValue to show preview.
  const gradientPreview = parseGradientPreview(props.modelValue)
  if (gradientPreview) {
    return {
      background: gradientPreview,
      backgroundColor: undefined,
    }
  }
  return { backgroundColor: displayedRgb(color, props.showAlpha) }
})

const currentColor = computed(() => {
  return !props.modelValue && !showPanelColor.value ? '' : color.value
})

const buttonAriaLabel = computed<string | undefined>(() => {
  return !isLabeledByFormItem.value
    ? props.ariaLabel || t('el.colorpicker.defaultLabel')
    : undefined
})

const buttonAriaLabelledby = computed<string | undefined>(() => {
  return isLabeledByFormItem.value ? formItem?.labelId : undefined
})

const btnKls = computed(() => {
  return [
    ns.b('picker'),
    ns.is('disabled', colorDisabled.value),
    ns.bm('picker', colorSize.value),
    ns.is('focused', isFocused.value),
  ]
})

function displayedRgb(color: Color, showAlpha: boolean) {
  const { r, g, b, a } = color.toRgb()
  return showAlpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`
}

function isGradientValue(value: string | undefined): boolean {
  return !!(value && value.includes('gradient'))
}

function parseGradientPreview(value: string): string | null {
  // Parse gradient value for preview when panel is not mounted
  // e.g., "linear-gradient(90deg, #f00 25%, #00f 75%)"
  if (!isGradientValue(value)) return null
  const colorMatch = value.match(/rgba?\([^)]+\)|#[0-9a-fA-F]+/g)
  if (colorMatch && colorMatch.length >= 2) {
    const startColor = new TinyColor(colorMatch[0])
    const endColor = new TinyColor(colorMatch[colorMatch.length - 1])
    const posMatch = value.match(/(\d+(?:\.\d+)?)\s*%/g)
    const startPos =
      posMatch && posMatch[0] ? Number.parseFloat(posMatch[0]) : 0
    const endPos =
      posMatch && posMatch[1] ? Number.parseFloat(posMatch[1]) : 100
    const formatColor = (c: TinyColor) =>
      color.enableAlpha ? c.toRgbString() : c.toHexString()
    return `linear-gradient(90deg, ${formatColor(startColor)} ${startPos}%, ${formatColor(endColor)} ${endPos}%)`
  }
  return null
}

function setShowPicker(value: boolean) {
  showPicker.value = value
}

const debounceSetShowPicker = debounce(setShowPicker, 100, { leading: true })
function show() {
  if (colorDisabled.value) return
  setShowPicker(true)
}

function hide() {
  debounceSetShowPicker(false)
  resetColor()
}

function resetColor() {
  nextTick(() => {
    if (props.modelValue) {
      color.fromString(props.modelValue)
    } else {
      color.value = ''
      nextTick(() => {
        showPanelColor.value = false
      })
    }
  })
}

function handleTrigger() {
  if (colorDisabled.value) return
  if (showPicker.value) {
    resetColor()
  }
  debounceSetShowPicker(!showPicker.value)
}

function confirmValue() {
  // 渐变模式下使用 toGradientValue()，否则使用 color.value
  const value = isEmptyValue(color.value)
    ? valueOnClear.value
    : color.isGradient
      ? color.toGradientValue()
      : color.value
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
  if (props.validateEvent) {
    formItem?.validate('change').catch(NOOP)
  }
  debounceSetShowPicker(false)
  // check if modelValue change, if not change, then reset color.
  nextTick(() => {
    // 处理渐变值
    if (props.modelValue && props.modelValue.includes('gradient')) {
      const match = props.modelValue.match(/rgba?\([^)]+\)|#[0-9a-fA-F]+/g)
      if (match && match.length >= 2) {
        const startColor = new TinyColor(match[0]).toHexString()
        const endColor = new TinyColor(match[match.length - 1]).toHexString()
        if (color.startValue !== startColor || color.endValue !== endColor) {
          resetColor()
        }
      }
    } else {
      // 原有的纯色比较逻辑
      const newColor = new Color({
        enableAlpha: props.showAlpha,
        format: props.colorFormat || '',
        value: props.modelValue,
      })
      if (!color.compare(newColor)) {
        resetColor()
      }
    }
  })
}

function clear() {
  debounceSetShowPicker(false)
  emit(UPDATE_MODEL_EVENT, valueOnClear.value)
  emit(CHANGE_EVENT, valueOnClear.value)
  if (props.modelValue !== valueOnClear.value && props.validateEvent) {
    formItem?.validate('change').catch(NOOP)
  }
  resetColor()
  emit('clear')
}

function handleShowTooltip() {
  pickerPanelRef?.value?.inputRef?.focus()
}

function handleClickOutside() {
  if (!showPicker.value) return
  hide()
  isFocused.value && focus()
}

function handleEsc(event: KeyboardEvent) {
  event.preventDefault()
  event.stopPropagation()
  setShowPicker(false)
  resetColor()
}

function handleKeyDown(event: KeyboardEvent) {
  const code = getEventCode(event)

  switch (code) {
    case EVENT_CODE.enter:
    case EVENT_CODE.numpadEnter:
    case EVENT_CODE.space:
      event.preventDefault()
      event.stopPropagation()
      show()
      break
    case EVENT_CODE.esc:
      handleEsc(event)
      break
  }
}

function focus() {
  triggerRef.value.focus()
}

function blur() {
  triggerRef.value.blur()
}

watch(
  () => currentColor.value,
  (val) => {
    shouldActiveChange && emit('activeChange', val)
    shouldActiveChange = true
  }
)

watch(
  () => color.value,
  () => {
    if (!props.modelValue && !showPanelColor.value) {
      showPanelColor.value = true
    }
  }
)

watch(
  () => props.modelValue,
  (newVal) => {
    if (!newVal) {
      showPanelColor.value = false
      // 清除渐变状态（重置为纯色模式）
      if (color.isGradient) {
        color.isGradient = false
        color.startValue = ''
        color.endValue = ''
      }
    } else if (newVal !== color.value) {
      shouldActiveChange = false
      // 判断是否是渐变值
      const isGradientValue = newVal.includes('gradient')
      // 如果没有 showGradient 但传入了渐变值，不处理
      if (!props.showGradient && isGradientValue) {
        return
      }
      // 如果有 showGradient，处理渐变初始化
      if (props.showGradient && isGradientValue) {
        // 使用 color-picker-panel 的解析逻辑
        const match = newVal.match(/rgba?\([^)]+\)|#[0-9a-fA-F]+/g)
        if (match && match.length >= 2) {
          const startColor = new TinyColor(match[0]).toHexString()
          const endColor = new TinyColor(match[match.length - 1]).toHexString()
          color.setGradient(startColor, endColor)
          color.editingGradientPart = 'start'
          color.fromString(startColor)
        } else {
          // 渐变格式不正确，当作纯色处理
          color.fromString(newVal)
        }
      } else {
        // 纯色模式或非渐变值
        color.fromString(newVal)
      }
    }
  }
)

watch(
  () => showPicker.value,
  () => {
    pickerPanelRef.value && nextTick(pickerPanelRef.value.update)
  }
)

provide(ROOT_COMMON_COLOR_INJECTION_KEY, commonColor)

defineExpose({
  /**
   * @description current color object
   */
  color,
  /**
   * @description manually show ColorPicker
   */
  show,
  /**
   * @description manually hide ColorPicker
   */
  hide,
  /**
   * @description focus the input element
   */
  focus,
  /**
   * @description blur the input element
   */
  blur,
})
</script>

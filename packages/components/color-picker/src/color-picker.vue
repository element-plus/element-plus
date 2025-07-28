<template>
  <el-tooltip
    ref="popper"
    :visible="showPicker"
    :show-arrow="false"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :offset="0"
    :gpu-acceleration="false"
    :popper-class="[ns.be('picker', 'panel'), popperClass]"
    :stop-popper-mouse-event="false"
    effect="light"
    trigger="click"
    :teleported="teleported"
    :transition="`${ns.namespace.value}-zoom-in-top`"
    :persistent="persistent"
    :append-to="appendTo"
    @hide="setShowPicker(false)"
  >
    <template #content>
      <color-picker-panel
        ref="pickerPanel"
        v-bind="mergeProps(passsPanelProps, $props)"
        v-click-outside:[triggerRef]="handleClickOutside"
        :border="false"
        @keydown.esc="handleEsc"
      >
        <template #footer>
          <div>
            <el-button
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
      </color-picker-panel>
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
            <span
              :class="ns.be('picker', 'color-inner')"
              :style="{
                backgroundColor: displayedColor,
              }"
            >
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
import { computed, mergeProps, nextTick, provide, ref, watch } from 'vue'
import { debounce, pick } from 'lodash-unified'
import { ElIcon } from '@element-plus/components/icon'
import { ClickOutside as vClickOutside } from '@element-plus/directives'
import { ElTooltip } from '@element-plus/components/tooltip'
import ElButton from '@element-plus/components/button'
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
import { debugWarn } from '@element-plus/utils'
import { ArrowDown, Close } from '@element-plus/icons-vue'
import { colorPickerEmits, colorPickerProps } from './color-picker'
import ColorPickerPanel, {
  ROOT_COMMON_COLOR_INJECTION_KEY,
  colorPickerPanelProps,
} from '@element-plus/components/color-picker-panel'
import Color from '@element-plus/components/color-picker-panel/src/utils/color'
import { useCommonColor } from '@element-plus/components/color-picker-panel/src/composables/use-common-color'

import type { ColorPickerPanelInstance } from '@element-plus/components/color-picker-panel'
import type { TooltipInstance } from '@element-plus/components/tooltip'

defineOptions({
  name: 'ElColorPicker',
})
const props = defineProps(colorPickerProps)
mergeProps
const passsPanelProps = computed(() =>
  pick(props, Object.keys(colorPickerPanelProps))
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
const { color } = commonColor

const popper = ref<TooltipInstance>()
const triggerRef = ref()
const pickerPanel = ref<ColorPickerPanelInstance>()
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
  },
})

const displayedColor = computed(() => {
  if (!props.modelValue && !showPanelColor.value) {
    return 'transparent'
  }
  return displayedRgb(color, props.showAlpha)
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
  const value = isEmptyValue(color.value) ? valueOnClear.value : color.value
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
  if (props.validateEvent) {
    formItem?.validate('change').catch((err) => debugWarn(err))
  }
  debounceSetShowPicker(false)
  // check if modelValue change, if not change, then reset color.
  nextTick(() => {
    const newColor = new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || '',
      value: props.modelValue,
    })
    if (color.compare(newColor)) {
      resetColor()
    }
  })
}

function clear() {
  debounceSetShowPicker(false)
  emit(UPDATE_MODEL_EVENT, valueOnClear.value)
  emit(CHANGE_EVENT, valueOnClear.value)
  if (props.modelValue !== valueOnClear.value && props.validateEvent) {
    formItem?.validate('change').catch((err) => debugWarn(err))
  }
  resetColor()
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
  switch (event.code) {
    case EVENT_CODE.enter:
    case EVENT_CODE.numpadEnter:
    case EVENT_CODE.space:
      event.preventDefault()
      event.stopPropagation()
      show()
      pickerPanel?.value?.customInput?.focus()
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
    shouldActiveChange && emit('activeChange', val ?? null)
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
    } else if (newVal && newVal !== color.value) {
      shouldActiveChange = false
      color.fromString(newVal)
    }
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

<template>
  <div :class="[ns.b(), ns.is('disabled', disabled), ns.is('border', border)]">
    <div :class="ns.e('wrapper')">
      <hue-slider
        ref="hueRef"
        class="hue-slider"
        :color="color"
        vertical
        :disabled="disabled"
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
      v-if="predefine"
      ref="predefine"
      :enable-alpha="showAlpha"
      :color="color"
      :colors="predefine"
      :disabled="disabled"
    />
    <div :class="ns.e('footer')">
      <el-input
        ref="inputRef"
        v-model="customInput"
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
import { useFormDisabled } from '@element-plus/components/form'
import { useNamespace } from '@element-plus/hooks'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import AlphaSlider from './components/alpha-slider.vue'
import HueSlider from './components/hue-slider.vue'
import Predefine from './components/predefine.vue'
import SvPanel from './components/sv-panel.vue'
import {
  ROOT_COMMON_COLOR_INJECTION_KEY,
  colorPickerPanelContextKey,
  colorPickerPanelEmits,
  colorPickerPanelProps,
} from './color-picker-panel'
import { useCommonColor } from './composables/use-common-color'

import type { InputInstance } from '@element-plus/components/input'

defineOptions({
  name: 'ElColorPickerPanel',
})
const props = defineProps(colorPickerPanelProps)
const emit = defineEmits(colorPickerPanelEmits)

const ns = useNamespace('color-picker-panel')
const disabled = useFormDisabled()
const hueRef = ref<InstanceType<typeof HueSlider>>()
const svRef = ref<InstanceType<typeof SvPanel>>()
const alphaRef = ref<InstanceType<typeof AlphaSlider>>()
const inputRef = ref<InputInstance>()
const customInput = ref('')

const { color } = inject(
  ROOT_COMMON_COLOR_INJECTION_KEY,
  () => useCommonColor(props, emit),
  true
)

function handleConfirm() {
  color.fromString(customInput.value)
  if (color.value !== customInput.value) {
    customInput.value = color.value
  }
}

function update() {
  hueRef.value?.update()
  svRef.value?.update()
  alphaRef.value?.update()
}

onMounted(() => {
  if (props.modelValue) {
    customInput.value = color.value
  }
  nextTick(update)
})

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal !== color.value) {
      newVal ? color.fromString(newVal) : color.clear()
    }
  }
)

watch(
  () => color.value,
  (val) => {
    emit(UPDATE_MODEL_EVENT, val)
    customInput.value = val
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

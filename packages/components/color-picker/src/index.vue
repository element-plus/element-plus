<template>
  <el-tooltip
    ref="popper"
    v-model:visible="showPicker"
    :show-arrow="false"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :offset="0"
    :gpu-acceleration="false"
    :popper-class="`el-color-picker__panel el-color-dropdown ${popperClass}`"
    :stop-popper-mouse-event="false"
    effect="light"
    trigger="click"
    transition="el-zoom-in-top"
  >
    <template #content>
      <div v-click-outside="hide">
        <div class="el-color-dropdown__main-wrapper">
          <hue-slider ref="hue" class="hue-slider" :color="color" vertical />
          <sv-panel ref="svPanel" :color="color" />
        </div>
        <alpha-slider v-if="showAlpha" ref="alpha" :color="color" />
        <predefine
          v-if="predefine"
          ref="predefine"
          :color="color"
          :colors="predefine"
        />
        <div class="el-color-dropdown__btns">
          <span class="el-color-dropdown__value">
            <el-input
              v-model="customInput"
              :validate-event="false"
              size="small"
              @keyup.enter="handleConfirm"
              @blur="handleConfirm"
            />
          </span>
          <el-button
            size="small"
            type="text"
            class="el-color-dropdown__link-btn"
            @click="clear"
          >
            {{ t('el.colorpicker.clear') }}
          </el-button>
          <el-button
            plain
            size="small"
            class="el-color-dropdown__btn"
            @click="confirmValue"
          >
            {{ t('el.colorpicker.confirm') }}
          </el-button>
        </div>
      </div>
    </template>
    <template #default>
      <div
        :class="[
          'el-color-picker',
          colorDisabled ? 'is-disabled' : '',
          colorSize ? `el-color-picker--${colorSize}` : '',
        ]"
      >
        <div v-if="colorDisabled" class="el-color-picker__mask"></div>
        <div class="el-color-picker__trigger" @click="handleTrigger">
          <span
            class="el-color-picker__color"
            :class="{ 'is-alpha': showAlpha }"
          >
            <span
              class="el-color-picker__color-inner"
              :style="{
                backgroundColor: displayedColor,
              }"
            >
              <el-icon
                v-show="modelValue || showPanelColor"
                class="el-color-picker__icon is-icon-arrow-down"
              >
                <arrow-down />
              </el-icon>
              <el-icon
                v-if="!modelValue && !showPanelColor"
                class="el-color-picker__empty is-icon-close"
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

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue'
import debounce from 'lodash/debounce'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import { ClickOutside } from '@element-plus/directives'
import { elFormItemKey, elFormKey } from '@element-plus/tokens'
import { useLocale, useSize } from '@element-plus/hooks'
import ElTooltip from '@element-plus/components/tooltip'
import ElInput from '@element-plus/components/input'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { Close, ArrowDown } from '@element-plus/icons-vue'
import AlphaSlider from './components/alpha-slider.vue'
import HueSlider from './components/hue-slider.vue'
import Predefine from './components/predefine.vue'
import SvPanel from './components/sv-panel.vue'
import Color from './color'
import { OPTIONS_KEY } from './useOption'

import type { PropType } from 'vue'
import type { ElFormContext, ElFormItemContext } from '@element-plus/tokens'
import type { ComponentSize } from '@element-plus/utils/types'
import type { IUseOptions } from './useOption'

export default defineComponent({
  name: 'ElColorPicker',
  components: {
    ElButton,
    ElTooltip,
    ElInput,
    ElIcon,
    Close,
    ArrowDown,
    SvPanel,
    HueSlider,
    AlphaSlider,
    Predefine,
  },
  directives: {
    ClickOutside,
  },
  props: {
    modelValue: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    popperClass: String,
    predefine: Array,
  },
  emits: ['change', 'active-change', UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const { t } = useLocale()
    const elForm = inject(elFormKey, {} as ElFormContext)
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    const hue = ref(null)
    const svPanel = ref(null)
    const alpha = ref(null)
    const popper = ref(null)
    // data
    const color = reactive(
      new Color({
        enableAlpha: props.showAlpha,
        format: props.colorFormat,
      })
    )
    const showPicker = ref(false)
    const showPanelColor = ref(false)
    const customInput = ref('')
    // computed
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return 'transparent'
      }
      return displayedRgb(color, props.showAlpha)
    })
    const colorSize = useSize()
    const colorDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? '' : color.value
    })
    // watch
    watch(
      () => props.modelValue,
      (newVal) => {
        if (!newVal) {
          showPanelColor.value = false
        } else if (newVal && newVal !== color.value) {
          color.fromString(newVal)
        }
      }
    )
    watch(
      () => currentColor.value,
      (val) => {
        customInput.value = val
        emit('active-change', val)
        // showPanelColor.value = true
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

    // methods
    function displayedRgb(color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error('color should be instance of _color Class')
      }

      const { r, g, b } = color.toRgb()
      return showAlpha
        ? `rgba(${r}, ${g}, ${b}, ${color.get('alpha') / 100})`
        : `rgb(${r}, ${g}, ${b})`
    }

    function setShowPicker(value) {
      showPicker.value = value
    }

    const debounceSetShowPicker = debounce(setShowPicker, 100)

    function hide() {
      debounceSetShowPicker(false)
      resetColor()
    }

    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue)
        } else {
          showPanelColor.value = false
        }
      })
    }

    function handleTrigger() {
      if (colorDisabled.value) return
      debounceSetShowPicker(!showPicker.value)
    }

    function handleConfirm() {
      color.fromString(customInput.value)
    }

    function confirmValue() {
      const value = color.value
      emit(UPDATE_MODEL_EVENT, value)
      emit('change', value)
      elFormItem.validate?.('change')
      debounceSetShowPicker(false)
      // check if modelValue change, if not change, then reset color.
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat,
        })
        newColor.fromString(props.modelValue)
        if (!color.compare(newColor)) {
          resetColor()
        }
      })
    }

    function clear() {
      debounceSetShowPicker(false)
      emit(UPDATE_MODEL_EVENT, null)
      emit('change', null)
      if (props.modelValue !== null) {
        elFormItem.validate?.('change')
      }
      resetColor()
    }

    onMounted(() => {
      if (props.modelValue) {
        color.fromString(props.modelValue)
        customInput.value = currentColor.value
      }
    })
    watch(
      () => showPicker.value,
      () => {
        nextTick(() => {
          hue.value?.update()
          svPanel.value?.update()
          alpha.value?.update()
        })
      }
    )

    provide<IUseOptions>(OPTIONS_KEY, {
      currentColor,
    })

    return {
      color: color as Color,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      showPicker,
      customInput,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      t,
      hue,
      svPanel,
      alpha,
      popper,
    }
  },
})
</script>

<template>
  <el-tooltip
    ref="popper"
    v-model:visible="showPicker"
    :show-arrow="false"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :offset="0"
    :gpu-acceleration="false"
    :popper-class="[ns.be('picker', 'panel'), ns.b('dropdown'), popperClass]"
    :stop-popper-mouse-event="false"
    effect="light"
    trigger="click"
    transition="el-zoom-in-top"
    persistent
  >
    <template #content>
      <div v-click-outside="hide">
        <div :class="ns.be('dropdown', 'main-wrapper')">
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
        <div :class="ns.be('dropdown', 'btns')">
          <span :class="ns.be('dropdown', 'value')">
            <el-input
              v-model="customInput"
              :validate-event="false"
              size="small"
              @keyup.enter="handleConfirm"
              @blur="handleConfirm"
            />
          </span>
          <el-button
            :class="ns.be('dropdown', 'link-btn')"
            text
            size="small"
            @click="clear"
          >
            {{ t('el.colorpicker.clear') }}
          </el-button>
          <el-button
            plain
            size="small"
            :class="ns.be('dropdown', 'btn')"
            @click="confirmValue"
          >
            {{ t('el.colorpicker.confirm') }}
          </el-button>
        </div>
      </div>
    </template>
    <template #default>
      <div
        :id="buttonId"
        :class="[
          ns.b('picker'),
          ns.is('disabled', colorDisabled),
          ns.bm('picker', colorSize),
        ]"
        role="button"
        :aria-label="buttonAriaLabel"
        :aria-labelledby="buttonAriaLabelledby"
        :aria-description="
          t('el.colorpicker.description', { color: modelValue || '' })
        "
        :tabindex="tabindex"
        @keydown.enter="handleTrigger"
      >
        <div v-if="colorDisabled" :class="ns.be('picker', 'mask')" />
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
                v-if="!modelValue && !showPanelColor"
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

<script lang="ts">
// @ts-nocheck
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
import { debounce } from 'lodash-unified'
import ElButton from '@element-plus/components/button'
import ElIcon from '@element-plus/components/icon'
import { ClickOutside } from '@element-plus/directives'
import { formContextKey, formItemContextKey } from '@element-plus/tokens'
import {
  useFormItemInputId,
  useLocale,
  useNamespace,
  useSize,
} from '@element-plus/hooks'
import ElTooltip from '@element-plus/components/tooltip'
import ElInput from '@element-plus/components/input'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { debugWarn, isValidComponentSize } from '@element-plus/utils'
import { ArrowDown, Close } from '@element-plus/icons-vue'
import AlphaSlider from './components/alpha-slider.vue'
import HueSlider from './components/hue-slider.vue'
import Predefine from './components/predefine.vue'
import SvPanel from './components/sv-panel.vue'
import Color from './color'
import { OPTIONS_KEY } from './useOption'
import type { PropType } from 'vue'
import type { FormContext, FormItemContext } from '@element-plus/tokens'
import type { ComponentSize } from '@element-plus/constants'
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
    id: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    popperClass: String,
    label: {
      type: String,
      default: undefined,
    },
    tabindex: {
      type: [String, Number],
      default: 0,
    },
    predefine: Array,
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['change', 'active-change', UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const { t } = useLocale()
    const ns = useNamespace('color')
    const elForm = inject(formContextKey, {} as FormContext)
    const elFormItem = inject(formItemContextKey, {} as FormItemContext)

    const { inputId: buttonId, isLabeledByFormItem } = useFormItemInputId(
      props,
      {
        formItemContext: elFormItem,
      }
    )

    const hue = ref<InstanceType<typeof HueSlider>>()
    const svPanel = ref<InstanceType<typeof SvPanel>>()
    const alpha = ref<InstanceType<typeof AlphaSlider>>()
    const popper = ref(null)
    // active-change is used to prevent modelValue changes from triggering.
    let shouldActiveChange = true
    // data
    const color = reactive(
      new Color({
        enableAlpha: props.showAlpha,
        format: props.colorFormat || '',
        value: props.modelValue,
      })
    )
    type ColorType = typeof color
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
      return !!(props.disabled || elForm.disabled)
    })

    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? '' : color.value
    })
    const buttonAriaLabel = computed<string | undefined>(() => {
      return !isLabeledByFormItem.value
        ? props.label || t('el.colorpicker.defaultLabel')
        : undefined
    })
    const buttonAriaLabelledby = computed<string | undefined>(() => {
      return isLabeledByFormItem.value ? elFormItem.labelId : undefined
    })
    // watch
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
    watch(
      () => currentColor.value,
      (val) => {
        customInput.value = val
        shouldActiveChange && emit('active-change', val)
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

    // methods
    function displayedRgb(color: ColorType, showAlpha: boolean) {
      if (!(color instanceof Color)) {
        throw new TypeError('color should be instance of _color Class')
      }

      const { r, g, b } = color.toRgb()
      return showAlpha
        ? `rgba(${r}, ${g}, ${b}, ${color.get('alpha') / 100})`
        : `rgb(${r}, ${g}, ${b})`
    }

    function setShowPicker(value: boolean) {
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
          color.value = ''
          nextTick(() => {
            showPanelColor.value = false
          })
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
      if (props.validateEvent) {
        elFormItem.validate?.('change').catch((err) => debugWarn(err))
      }
      debounceSetShowPicker(false)
      // check if modelValue change, if not change, then reset color.
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat || '',
          value: props.modelValue,
        })
        if (!color.compare(newColor)) {
          resetColor()
        }
      })
    }

    function clear() {
      debounceSetShowPicker(false)
      emit(UPDATE_MODEL_EVENT, null)
      emit('change', null)
      if (props.modelValue !== null && props.validateEvent) {
        elFormItem.validate?.('change').catch((err) => debugWarn(err))
      }
      resetColor()
    }

    onMounted(() => {
      if (props.modelValue) {
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
      buttonId,
      buttonAriaLabel,
      buttonAriaLabelledby,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      t,
      ns,
      hue,
      svPanel,
      alpha,
      popper,
    }
  },
})
</script>

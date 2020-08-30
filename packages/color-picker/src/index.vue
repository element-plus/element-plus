<template>
  <el-tooltip
    v-model="showPicker"
    effect="light"
    :manual="true"
    :trigger="['click']"
    :visible-arrow="false"
  >
    <template #content>
      <div
        v-click-outside="hide"
        style="width: 300px"
      >
        <div class="el-color-dropdown__main-wrapper">
          <hue-slider
            ref="hue"
            :color="color"
            vertical
            style="float: right;"
          />
          <sv-panel :color="color" />
        </div>
        <alpha-slider v-if="showAlpha" ref="alpha" :color="color" />
        <predefine v-if="predefine" :color="color" :colors="predefine" />
        <div class="el-color-dropdown__btns">
          <span class="el-color-dropdown__value">
            <input
              v-model="customInput"
              :validate-event="false"
              size="mini"
              @keyup.enter="handleConfirm"
              @blur="handleConfirm"
            >
          </span>
          <el-button
            size="mini"
            type="text"
            class="el-color-dropdown__link-btn"
            @click="clear"
          >
            {{ t('el.colorpicker.clear') }}
          </el-button>
          <el-button
            plain
            size="mini"
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
          colorSize ? `el-color-picker--${ colorSize }` : ''
        ]"
      >
        <div v-if="colorDisabled" class="el-color-picker__mask"></div>
        <div class="el-color-picker__trigger" @click="handleTrigger">
          <span class="el-color-picker__color" :class="{ 'is-alpha': showAlpha }">
            <span
              class="el-color-picker__color-inner"
              :style="{
                backgroundColor: displayedColor
              }"
            ></span>
            <span v-if="!modelValue && !showPanelColor" class="el-color-picker__empty el-icon-close"></span>
          </span>
          <span v-show="modelValue || showPanelColor" class="el-color-picker__icon el-icon-arrow-down"></span>
        </div>
      </div>
    </template>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent,computed,ref,nextTick,reactive,watch,provide,inject } from 'vue'
import ClickOutside from '@element-plus/directives/click-outside'
import Color from './color'
import SvPanel from './components/sv-panel.vue'
import HueSlider from './components/hue-slider.vue'
import AlphaSlider from './components/alpha-slider.vue'
import ElTooltip from '@element-plus/tooltip/src/index.vue'
import ElButton from '@element-plus/button/src/button.vue'
import { t } from '@element-plus/locale/index'
import { UPDATE_MODEL_EVENT }  from '@element-plus/utils/constants'
import Predefine from './components/predefine'
// import ElPopper from '@element-plus/popper/src/index.vue'

interface IELEMENT {
  size?: string
}
interface IElForm {
  size?: string
  disabled?: boolean
}
interface IELFormItem {
  elFormItemSize?: string
}

const SY = Symbol()

export const useOptions = () => {
  return inject(SY)
}

export default defineComponent( {
  name: 'ElColorPicker',
  components: {
    // ElPopper,
    ElTooltip,
    SvPanel,
    HueSlider,
    AlphaSlider,
    ElButton,
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
    size: String,
    popperClass: String,
    predefine: Array,
  },
  emits: {
    change: null,

  },
  setup(props, { emit }) {
    const ELEMENT: IELEMENT = {}
    const elForm:IElForm = {}
    const elFormItem:IELFormItem = {}
    // data
    const color = reactive(new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat,
    }))
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
    const colorSize = computed(() => {
      return props.size || _elFormItemSize || (ELEMENT || {}).size
    })
    const colorDisabled = computed(() => {
      return props.disabled || (elForm || {}).disabled
    })
    const _elFormItemSize = computed(() => {
      return (elFormItem || {}).elFormItemSize
    })

    const currentColor = computed(() => {
      return showPanelColor.value ? '' : color.value
    })
    // watch
    watch(currentColor, val => {
      customInput.value = val
    }, {
      immediate: true,
    })

    // methods
    function displayedRgb(color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error('color should be instance of _color Class')
      }

      const { r, g, b } = color.toRgb()
      return showAlpha
        ? `rgba(${ r }, ${ g }, ${ b }, ${ color.get('alpha') / 100 })`
        : `rgb(${ r }, ${ g }, ${ b })`
    }
    function hide() {
      showPicker.value = false
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
      showPicker.value = !showPicker.value
    }
    function handleConfirm() {
      color.fromString(customInput.value)
    }
    function confirmValue() {
      const value = color.value
      emit(UPDATE_MODEL_EVENT, value)
      emit('change', value)
      // this.dispatch('ElFormItem', 'el.form.change', value)
      showPicker.value = false
    }
    function clear() {
      customInput.value = ''
      showPicker.value = false
      emit(UPDATE_MODEL_EVENT, null)
      emit('change', null)
      if (props.modelValue !== null) {
        // todo in ElForm
      }
      showPanelColor.value = false
      showPicker.value = false
      resetColor()
    }

    provide(SY,{
      currentColor,
    })

    return {
      color,
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
    }
  },
})
</script>

<style lang="scss" scoped>
.el-color-picker:focus {
  outline: none;
}
</style>

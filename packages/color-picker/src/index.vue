<template>
  <el-popper
    transition="el-zoom-in-top"
    :trigger="['click']"
  >
    <template #default>
      <div
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
      </div>
    </template>
    <template #trigger>
      <div
        v-click-outside="hide"
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
        <!--<picker-dropdown
          ref="dropdown"
          :class="['el-color-picker__panel', popperClass || '']"
          v-model="showPicker"
          @pick="confirmValue"
          @clear="clearValue"
          :color="color"
          :show-alpha="showAlpha"
          :predefine="predefine">
        </picker-dropdown>-->
      </div>
    </template>
  </el-popper>
</template>

<script lang="ts">
import { defineComponent,computed,ref,nextTick,reactive } from 'vue'
import ClickOutside from '@element-plus/directives/click-outside'
import Color from './color.ts'
import SvPanel from './components/sv-panel'
import HueSlider from './components/hue-slider'
import ElPopper from '@element-plus/popper/src/index.vue'

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

export default defineComponent( {
  name: 'ElColorPicker',
  components: {
    ElPopper,
    SvPanel,
    HueSlider,
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
  setup(props) {
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
    return {
      color,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      hide,
      handleTrigger,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>

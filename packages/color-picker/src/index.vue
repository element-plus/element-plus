<template>
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
        <span v-if="!value && !showPanelColor" class="el-color-picker__empty el-icon-close"></span>
      </span>
      <span v-show="value || showPanelColor" class="el-color-picker__icon el-icon-arrow-down"></span>
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

<script lang="ts">
import { defineComponent,computed,ref,nextTick } from 'vue'
import ClickOutside from '@element-plus/directives/click-outside'
import Color from './color'

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
  /*data() {
    const color = new Color({
      enableAlpha: this.showAlpha,
      format: this.colorFormat
    })

    return {
      color,
      showPicker: false,
      showPanelColor: false
    }
  },*/
  setup(props) {
    const ELEMENT: IELEMENT = {}
    const elForm:IElForm = {}
    const elFormItem:IELFormItem = {}
    // data
    const color = new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat,
    })
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
        throw Error('color should be instance of Color Class')
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
    /*displayedColor() {
      if (!this.value && !this.showPanelColor) {
        return 'transparent';
      }

      return this.displayedRgb(this.color, this.showAlpha);
    },

    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },

    colorSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },

    colorDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }*/
    return {
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

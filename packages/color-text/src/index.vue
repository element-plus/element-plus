<template>
  <component :is="tag" v-if="type" :class="typeClass">
    <slot></slot>
  </component>
  <component
    :is="tag"
    v-else
    class="el-color-text"
    :[colorValue.type]="colorValue.value"
  >
    <slot></slot>
  </component>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useGlobalConfig } from '@element-plus/utils/util'

import type { PropType } from 'vue'
import type { InstallOptions } from '@element-plus/utils/config'
import type { ColorTextType, Color, Option } from '@element-plus/color-text/src/color-text.type'

const themeColor = ['primary', 'success', 'warning', 'danger', 'default', 'info']

export default defineComponent({
  name: 'ElColorText',
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    type: {
      type: String as PropType<ColorTextType>,
      validator: (val: string) => themeColor.includes(val),
    },
    colors: {
      type: Array as PropType<Color[]>,
    },
    options: {
      type: Array as PropType<Option[]>,
    },
    value: {
      type: [String, Number],
    },
  },
  setup(props) {
    const $ELEMENT = useGlobalConfig() as InstallOptions

    const baseClass = 'el-color-text'

    const typeClass = computed(() => ([baseClass, `el-color-text--${props.type}`]))

    const colors = computed(() => {
      const isGlobalTextColor = $ELEMENT.colorTextOptions
      && Array.isArray($ELEMENT.colorTextOptions.colors)

      return props.colors || (isGlobalTextColor ? $ELEMENT.colorTextOptions.colors : themeColor)
    })

    const option = computed(() => {
      const isGlobalTextOption = $ELEMENT.colorTextOptions
      && Array.isArray($ELEMENT.colorTextOptions.options)

      return props.options || (isGlobalTextOption ? $ELEMENT.colorTextOptions.options : themeColor)
    })

    const colorValue = computed(() => {
      let colorsIndex = -1

      for(const [index,first] of option.value.entries()) {

        if(Array.isArray(first) && first.some((item: string | number) => item === props.value)) {
          colorsIndex = index
          break
        }

        if (first === props.value) {
          colorsIndex = index
          break
        }
      }

      const targetColor = colors.value[colorsIndex]

      if(!targetColor) {
        return {
          type: 'class',
          value: `el-color-text--default`,
        }
      }

      if(targetColor.indexOf('#') !== -1 || targetColor.indexOf('rgb') !== -1) {

        return {
          type: 'style',
          value: { color: targetColor },
        }
      }

      if (themeColor.includes(targetColor)) {
        return {
          type: 'class',
          value: `el-color-text--${targetColor}`,
        }
      }

      return {
        type: 'class',
        value: targetColor,
      }
    })

    return {
      baseClass,
      typeClass,
      colorValue,
    }
  },
})
</script>

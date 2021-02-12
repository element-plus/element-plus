<template>
  <component
    :is="tag"
    v-if="value && valueColor && valueColor.type === 'class'"
    :class="[baseClass, valueColor.value]"
  >
    <slot></slot>
  </component>
  <component
    :is="tag"
    v-else-if="value && valueColor && valueColor.type === 'style'"
    :class="baseClass"
    :style="{ color: valueColor.value}"
  >
    <slot></slot>
  </component>
  <component :is="tag" v-else :class="typeClass">
    <slot></slot>
  </component>
</template>
<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useGlobalConfig } from '@element-plus/utils/util'

import type { PropType } from 'vue'
import type { InstallOptions } from '@element-plus/utils/config'
import type { ColorTextType } from '@element-plus/color-text/src/color-text.type'



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
      default: 'default',
      validator: (val: string) => themeColor.includes(val),
    },
    colors: {
      type: Array as PropType<string[]>,
      default: themeColor,
    },
    options: {
      type: Array as PropType<string[] | Array<string[]>>,
    },
    value: {
      type: String,
    },
  },
  setup(props) {
    const $ELEMENT = useGlobalConfig() as InstallOptions

    const baseClass = 'el-color-text'

    const typeClass = computed(() => ([baseClass, `el-color-text--${props.type}`]))

    const textColors = computed(() => {
      const isGlobalTextColor = $ELEMENT.colorTextOptions
      && Array.isArray($ELEMENT.colorTextOptions.colors)

      return props.colors || (isGlobalTextColor ? $ELEMENT.colorTextOptions.colors : themeColor)
    })

    const textOption = computed(() => {
      const isGlobalTextOption = $ELEMENT.colorTextOptions
      && Array.isArray($ELEMENT.colorTextOptions.options)

      return props.options || (isGlobalTextOption ? $ELEMENT.colorTextOptions.options : themeColor)
    })

    const valueColor = computed(() => {
      let colorsIndex = -1

      for(const [index,first] of textOption.value.entries()) {

        if (typeof first === 'string' && first === props.value) {
          colorsIndex = index
          break
        }

        if(Array.isArray(first) && first.includes(props.value)) {
          colorsIndex = index
          break
        }
      }

      const targetColor = textColors.value[colorsIndex]

      if(!targetColor) {
        return {
          type: 'class',
          value: `el-color-text--${props.type}`,
        }
      } else if(targetColor.indexOf('#') !== -1 || targetColor.indexOf('rgb') !== -1) {
        return {
          type: 'style',
          value: targetColor,
        }
      } else if (themeColor.includes(targetColor)) {
        return {
          type: 'class',
          value: `el-color-text--${targetColor}`,
        }
      } else {
        return {
          type: 'class',
          value: targetColor,
        }
      }
    })

    return {
      baseClass,
      typeClass,
      valueColor,
    }
  },
})
</script>

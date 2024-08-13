<template>
  <div :class="ns.b()">
    <div :class="ns.e('colors')">
      <div
        v-for="(item, index) in rgbaColors"
        :key="colors[index]"
        :class="[
          ns.e('color-selector'),
          ns.is('alpha', item._alpha < 100),
          { selected: item.selected },
        ]"
        @click="handleSelect(index)"
      >
        <div :style="{ backgroundColor: item.value }" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch, watchEffect } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { colorPickerContextKey } from '../color-picker'
import Color from '../utils/color'

import type { PropType, Ref } from 'vue'

export default defineComponent({
  props: {
    colors: {
      type: Array as PropType<string[]>,
      required: true,
    },
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
    enableAlpha: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('color-predefine')
    const { currentColor } = inject(colorPickerContextKey)!

    const rgbaColors = ref(parseColors(props.colors, props.color)) as Ref<
      Color[]
    >

    watch(
      () => currentColor.value,
      (val) => {
        const color = new Color()
        color.fromString(val)

        rgbaColors.value.forEach((item) => {
          item.selected = color.compare(item)
        })
      }
    )

    watchEffect(() => {
      rgbaColors.value = parseColors(props.colors, props.color)
    })

    function handleSelect(index: number) {
      props.color.fromString(props.colors[index])
    }

    function parseColors(colors: string[], color: Color) {
      return colors.map((value) => {
        const c = new Color()
        c.enableAlpha = props.enableAlpha
        c.format = 'rgba'
        c.fromString(value)
        c.selected = c.value === color.value
        return c
      })
    }
    return {
      rgbaColors,
      handleSelect,
      ns,
    }
  },
})
</script>

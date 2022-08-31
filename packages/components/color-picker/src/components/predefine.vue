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
// @ts-nocheck
import { defineComponent, ref, watch, watchEffect } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useOptions } from '../useOption'
import Color from '../color'

import type { PropType } from 'vue'

export default defineComponent({
  props: {
    colors: { type: Array, required: true },
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('color-predefine')
    const { currentColor } = useOptions()
    //data
    const rgbaColors = ref(parseColors(props.colors, props.color))

    //watch
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

    function handleSelect(index) {
      props.color.fromString(props.colors[index])
    }
    function parseColors(colors, color) {
      return colors.map((value) => {
        const c = new Color()
        c.enableAlpha = true
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

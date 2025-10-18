<template>
  <div :class="ns.b()">
    <div :class="ns.e('colors')">
      <div
        v-for="(item, index) in rgbaColors"
        :key="colors[index]"
        :class="[
          ns.e('color-selector'),
          ns.is('alpha', item.get('alpha') < 100),
          { selected: item.selected },
        ]"
      >
        <input
          :name="item.value"
          type="radio"
          :disabled="disabled"
          :checked="item.selected"
          :style="{ backgroundColor: item.value }"
          :tabindex="item.selected ? 0 : -1"
          @keydown.left.stop.prevent="navigate(index, 'prev')"
          @keydown.right.stop.prevent="navigate(index, 'next')"
          @change="handleSelect(index)"
        />
        {{ item.selected }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch, watchEffect } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { colorPickerPanelContextKey } from '../color-picker-panel'
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
    disabled: Boolean,
  },
  setup(props) {
    const ns = useNamespace('color-predefine')
    const { currentColor } = inject(colorPickerPanelContextKey)!

    const rgbaColors = ref(parseColors(props.colors, props.color)) as Ref<
      Color[]
    >

    watch(
      () => currentColor.value,
      (val) => {
        const color = new Color({
          value: val,
        })

        rgbaColors.value.forEach((item) => {
          item.selected = color.compare(item)
        })
      }
    )

    watchEffect(() => {
      rgbaColors.value = parseColors(props.colors, props.color)
    })

    function handleSelect(index: number) {
      if (props.disabled) return
      props.color.fromString(props.colors[index])
    }

    function parseColors(colors: string[], color: Color) {
      return colors.map((value) => {
        const c = new Color({
          value,
        })
        c.selected = c.compare(color)
        return c
      })
    }

    const navigate = (index: number, direction: 'prev' | 'next') => {
      if (props.disabled) return
      console.log('who', index)
      if (direction === 'next') {
        const idx = index + 1
        if (idx === props.colors.length) {
          handleSelect(0)
          return
        }
        console.log(idx)
        handleSelect(idx)
      } else if (direction === 'prev') {
        const idx = index - 1
        if (idx < 0) {
          handleSelect(props.colors.length - 1)
          return
        }
        console.log(idx)
        handleSelect(idx)
      }
    }

    return {
      rgbaColors,
      handleSelect,
      ns,
      navigate,
    }
  },
})
</script>

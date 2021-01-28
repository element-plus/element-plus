<template>
  <div class="el-color-predefine">
    <div class="el-color-predefine__colors">
      <div
        v-for="(item, index) in rgbaColors"
        :key="colors[index]"
        class="el-color-predefine__color-selector"
        :class="{selected: item.selected, 'is-alpha': item._alpha < 100}"
        @click="handleSelect(index)"
      >
        <div :style="{'background-color': item.value}">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, watchEffect, defineComponent, PropType } from 'vue'
import Color from '../color'
import { useOptions } from '../index.vue'

export default defineComponent({
  props: {
    colors: { type: Array, required: true },
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
  },
  setup(props) {
    const { currentColor } = useOptions()
    //data
    const rgbaColors = ref(parseColors(props.colors, props.color))

    //watch
    watch(() => currentColor.value, val => {
      const color = new Color()
      color.fromString(val)

      rgbaColors.value.forEach(item => {
        item.selected = color.compare(item)
      })
    })
    watchEffect(() => {
      rgbaColors.value = parseColors(props.colors, props.color)
    })

    function handleSelect(index) {
      props.color.fromString(props.colors[index])
    }
    function parseColors(colors, color) {
      return colors.map(value => {
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
    }
  },
})
</script>

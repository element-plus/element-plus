<template>
  <div
    :class="prefixClass"
    :style="{
      backgroundColor: background,
    }"
  >
    <div :class="`${prefixClass}__white`"></div>
    <div :class="`${prefixClass}__black`"></div>
    <div
      :class="`${prefixClass}__cursor`"
      :style="{
        top: cursorTop + 'px',
        left: cursorLeft + 'px',
      }"
    >
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  getCurrentInstance,
  onMounted,
} from 'vue'
import { getClientXY } from '@element-plus/utils/dom'
import { usePrefixClass } from '@element-plus/hooks'
import draggable from '../draggable'

import type { PropType } from 'vue'
import type Color from '../color'

export default defineComponent({
  name: 'ElSlPanel',

  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
  },
  setup(props) {
    const prefixClass = usePrefixClass('color-svpanel')
    // instance
    const instance = getCurrentInstance()
    // data
    const cursorTop = ref(0)
    const cursorLeft = ref(0)
    const background = ref('hsl(0, 100%, 50%)')
    const colorValue = computed(() => {
      const hue = props.color.get('hue')
      const value = props.color.get('value')
      return { hue, value }
    })

    // methods
    function update() {
      const saturation = props.color.get('saturation')
      const value = props.color.get('value')

      const el = instance.vnode.el
      const { clientWidth: width, clientHeight: height } = el

      cursorLeft.value = (saturation * width) / 100
      cursorTop.value = ((100 - value) * height) / 100

      background.value = `hsl(${props.color.get('hue')}, 100%, 50%)`
    }

    function handleDrag(event) {
      const el = instance.vnode.el
      const rect = el.getBoundingClientRect()
      const { clientX, clientY } = getClientXY(event)

      let left = clientX - rect.left
      let top = clientY - rect.top
      left = Math.max(0, left)
      left = Math.min(left, rect.width)

      top = Math.max(0, top)
      top = Math.min(top, rect.height)

      cursorLeft.value = left
      cursorTop.value = top
      props.color.set({
        saturation: (left / rect.width) * 100,
        value: 100 - (top / rect.height) * 100,
      })
    }

    // watch
    watch(
      () => colorValue.value,
      () => {
        update()
      }
    )
    // mounted
    onMounted(() => {
      draggable(instance.vnode.el as HTMLElement, {
        drag: (event) => {
          handleDrag(event)
        },
        end: (event) => {
          handleDrag(event)
        },
      })

      update()
    })
    return {
      prefixClass,
      cursorTop,
      cursorLeft,
      background,
      colorValue,
      handleDrag,
      update,
    }
  },
})
</script>

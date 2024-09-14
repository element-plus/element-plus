<template>
  <div
    :class="ns.b()"
    :style="{
      backgroundColor: background,
    }"
  >
    <div :class="ns.e('white')" />
    <div :class="ns.e('black')" />
    <div
      :class="ns.e('cursor')"
      :style="{
        top: cursorTop + 'px',
        left: cursorLeft + 'px',
      }"
    >
      <div />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
} from 'vue'
import { getClientXY } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { draggable } from '../utils/draggable'

import type { PropType } from 'vue'
import type Color from '../utils/color'

export default defineComponent({
  name: 'ElSlPanel',

  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
  },

  setup(props) {
    const ns = useNamespace('color-svpanel')

    // instance
    const instance = getCurrentInstance()!

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

      const el = instance.vnode.el!
      const { clientWidth: width, clientHeight: height } = el

      cursorLeft.value = (saturation * width) / 100
      cursorTop.value = ((100 - value) * height) / 100

      background.value = `hsl(${props.color.get('hue')}, 100%, 50%)`
    }

    function handleDrag(event: MouseEvent | TouchEvent) {
      const el = instance.vnode.el!
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
      cursorTop,
      cursorLeft,
      background,
      colorValue,
      handleDrag,
      update,
      ns,
    }
  },
})
</script>

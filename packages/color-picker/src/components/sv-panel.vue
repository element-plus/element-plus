<template>
  <div
    class="el-color-svpanel"
    :style="{
      backgroundColor: background
    }"
  >
    <div class="el-color-svpanel__white"></div>
    <div class="el-color-svpanel__black"></div>
    <div
      class="el-color-svpanel__cursor"
      :style="{
        top: cursorTop + 'px',
        left: cursorLeft + 'px'
      }"
    >
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, getCurrentInstance, onMounted } from 'vue'
import type { PropType } from 'vue'
import type Color from '../color'
import draggable from '../draggable'

export default defineComponent({
  name: 'ElSlPanel',

  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
  },
  setup(props) {
    // instance
    const instance = getCurrentInstance()
    // data
    const cursorTop = ref<number>(0)
    const cursorLeft = ref<number>(0)
    const background = ref<string>('hsl(0, 100%, 50%)')
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
      let { clientWidth: width, clientHeight: height } = el

      cursorLeft.value = saturation * width / 100
      cursorTop.value = (100 - value) * height / 100

      background.value = 'hsl(' + props.color.get('hue') + ', 100%, 50%)'
    }

    function handleDrag(event) {
      const el = instance.vnode.el
      const rect = el.getBoundingClientRect()

      let left = event.clientX - rect.left
      let top = event.clientY - rect.top
      left = Math.max(0, left)
      left = Math.min(left, rect.width)

      top = Math.max(0, top)
      top = Math.min(top, rect.height)

      cursorLeft.value = left
      cursorTop.value = top
      props.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100,
      })
    }
    // watch
    watch(colorValue, () => {
      update()
    })
    // mounted
    onMounted(() => {
      draggable(instance.vnode.el, {
        drag: event => {
          handleDrag(event)
        },
        end: event => {
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
    }
  },
  /*data() {
    return {
      cursorTop: 0,
      cursorLeft: 0,
      background: 'hsl(0, 100%, 50%)',
    }
  },*/

  /*computed: {
    colorValue() {
      const hue = this.color.get('hue')
      const value = this.color.get('value')
      return { hue, value }
    },
  },*/

  /*watch: {
    colorValue() {
      this.update()
    },
  },*/

  /*mounted() {
    draggable(this.$el, {
      drag: event => {
        this.handleDrag(event)
      },
      end: event => {
        this.handleDrag(event)
      },
    })

    this.update()
  },*/

  /*methods: {
    update() {
      const saturation = this.color.get('saturation')
      const value = this.color.get('value')

      const el = this.$el
      let { clientWidth: width, clientHeight: height } = el

      this.cursorLeft = saturation * width / 100
      this.cursorTop = (100 - value) * height / 100

      this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)'
    },

    handleDrag(event) {
      const el = this.$el
      const rect = el.getBoundingClientRect()

      let left = event.clientX - rect.left
      let top = event.clientY - rect.top
      left = Math.max(0, left)
      left = Math.min(left, rect.width)

      top = Math.max(0, top)
      top = Math.min(top, rect.height)

      this.cursorLeft = left
      this.cursorTop = top
      this.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100,
      })
    },
  },*/
})
</script>

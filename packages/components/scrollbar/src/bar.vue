<template>
  <thumb :move="moveX" :ratio="ratioX" :size="width" :always="always" />
  <thumb
    :move="moveY"
    :ratio="ratioY"
    :size="height"
    vertical
    :always="always"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Thumb from './thumb.vue'
import { barProps } from './bar'

export default defineComponent({
  components: {
    Thumb,
  },
  props: barProps,
  setup(props) {
    const moveX = ref(0)
    const moveY = ref(0)
    const GAP = 4 // top 2 + bottom 2 of bar instance

    const handleScroll = (wrap: HTMLDivElement) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP
        const offsetWidth = wrap.offsetWidth - GAP

        moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * props.ratioY
        moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * props.ratioX
      }
    }

    return {
      handleScroll,
      moveX,
      moveY,
    }
  },
})
</script>

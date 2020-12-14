<template>
  <div ref="itemRef" class="el-vl__item">
    <slot>
    </slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, onUpdated, ref } from 'vue'

// import type { PropType } from 'vue'
// import type { Direction } from './useVirtualScroll'

export default defineComponent({
  name: 'ElVirtualListItem',
  props: {

  },
  setup() {
    // init here
    const itemRef = ref<HTMLElement>()
    onMounted(() => {
      // console.log('mounted')
    })

    onUpdated(() => {
      // console.log(itemRef.value)
    })

    return {
      itemRef,
    }
  },
})
</script>
<style scoped>
</style>

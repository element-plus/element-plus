<template>
  <div class="el-slider__marks-text" :style="mark.style || {}">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ElMarker',
  props: {
    mark: {
      type: [String, Object],
      default: () => undefined,
    },
  },
  setup(props){
    const label = computed(() => {
      return typeof props.mark === 'string' ? props.mark : props.mark.label
    })

    return {
      label,
    }
  },
})
</script>

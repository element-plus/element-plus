<template>
  <div
    v-if="item.isTitle"
    :class="`${prefixClass}__title`"
    :style="[style, { lineHeight: `${height}px` }]"
  >
    {{ item.label }}
  </div>
  <div v-else :class="`${prefixClass}__split`" :style="style">
    <span
      :class="`${prefixClass}__split-dash`"
      :style="{ top: `${height / 2}px` }"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
    style: Object,
    height: Number,
  },
  setup(props) {
    const prefixClass = usePrefixClass('select-group')
    return {
      prefixClass,
    }
  },
})
</script>

<template>
  <div
    :class="ns.be('group', 'title')"
    :style="{ ...style, lineHeight: `${height}px` }"
  >
    {{ item.label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import type { CSSProperties, PropType } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
    style: {
      type: Object as PropType<CSSProperties>,
    },
    height: Number,
  },
  setup() {
    const ns = useNamespace('select')
    return {
      ns,
    }
  },
})
</script>

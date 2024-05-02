<template>
  <div
    v-if="item.isTitle"
    :class="ns.be('group', 'title')"
    :style="[style, { lineHeight: `${height}px` }]"
  >
    {{ item.label }}
  </div>
  <div v-else :class="ns.be('group', 'split')" :style="style">
    <span
      :class="ns.be('group', 'split-dash')"
      :style="{ top: `${height / 2}px` }"
    />
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
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const ns = useNamespace('select')
    return {
      ns,
    }
  },
})
</script>

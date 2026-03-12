<template>
  <g-focus-group-collection>
    <g-roving-focus-group-impl v-bind="$attrs">
      <slot />
    </g-roving-focus-group-impl>
  </g-focus-group-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GRovingFocusGroupImpl from './roving-focus-group-impl.vue'
import { GCollection as GFocusGroupCollection } from './roving-focus-group'

export default defineComponent({
  name: 'GRovingFocusGroup',
  components: {
    GFocusGroupCollection,
    GRovingFocusGroupImpl,
  },
})
</script>

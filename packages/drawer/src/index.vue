<template>
  <teleport v-if="appendToBody" to="body">
    <drawer ref="drawer" v-bind="$attrs">
      <slot></slot>
    </drawer>
  </teleport>
  <drawer v-else ref="drawer" v-bind="$attrs">
    <slot></slot>
  </drawer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Drawer from './drawer.vue'

export default defineComponent({
  name: Drawer.name,
  components: { Drawer },
  setup(props, ctx) {
    const drawer = ref<typeof Drawer>(null)
    const appendToBody = computed(() => ctx.attrs['append-to-body'])
    return {
      drawer,
      appendToBody,
      closeDrawer: () => drawer.value.closeDrawer(),
    }
  },
})
</script>

<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GCollectionItem',
  inheritAttrs: false,
})
</script>

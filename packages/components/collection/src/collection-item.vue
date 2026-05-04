<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElCollectionItem',
  inheritAttrs: false,
})
</script>

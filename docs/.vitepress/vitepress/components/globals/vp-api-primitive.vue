<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <code>
    {{ type }}
  </code>
</template>

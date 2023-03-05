<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button
    :class="{ active }"
    :aria-expanded="active"
    class="reset-btn menu-hamburger"
    aria-controls="full-screen"
  >
    <span class="hamburger-1" />
    <span class="hamburger-2" />
    <span class="hamburger-3" />
  </button>
</template>

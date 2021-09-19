<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <div :class="{ 'menu-hamburger': true, active }" role="button">
    <span class="hamburger-1" />
    <span class="hamburger-2" />
    <span class="hamburger-3" />
  </div>
</template>

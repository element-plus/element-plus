<script setup lang="ts">
import { useNavbarLocale } from '../../composables/navbar-locale'

defineProps<{
  active: boolean
}>()

const locale = useNavbarLocale()
</script>

<template>
  <button
    :class="{ active }"
    :aria-label="locale['mobile-nav']"
    :aria-expanded="active"
    aria-controls="full-screen"
    class="reset-btn menu-hamburger"
  >
    <span class="hamburger-1" />
    <span class="hamburger-2" />
    <span class="hamburger-3" />
  </button>
</template>

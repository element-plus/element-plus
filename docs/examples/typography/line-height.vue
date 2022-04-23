<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div>
    <img
      v-if="isDark"
      class="lineH-left"
      src="/images/typography/line-height-dark.png"
    />
    <img v-else class="lineH-left" src="/images/typography/line-height.png" />
    <ul class="lineH-right">
      <li>line-height:1 <span>No line height</span></li>
      <li>line-height:1.3 <span>Compact</span></li>
      <li>line-height:1.5 <span>Regular</span></li>
      <li>line-height:1.7 <span>Loose</span></li>
    </ul>
  </div>
</template>

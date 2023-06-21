<script setup lang="ts">
// for now el-switch does not support customized icon in the dot
// we will implement a simple version of el-switch then update the switch
// component for this feature
</script>

<template>
  <button class="switch" role="switch">
    <div class="switch__action">
      <div class="switch__icon">
        <slot />
      </div>
    </div>
  </button>
</template>

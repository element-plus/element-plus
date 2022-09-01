<template>
  <div>notify</div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const vm = getCurrentInstance()!

const notify = vm.appContext.config.globalProperties.$notify

notify({
  title: 'Prompt',
  message: 'This is a message that does not automatically close',
  duration: 0,
})
</script>

<script setup lang="ts">
import { computed } from 'vue'
import ApiTyping from './vp-api-typing.vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  shallow: Boolean,
})

const type = computed(() => {
  const wrapperType = props.shallow ? 'ShallowRef' : 'Ref'
  return `${wrapperType}<${props.type}>`
})
</script>

<template>
  <ApiTyping type="Object" :details="type" />
</template>

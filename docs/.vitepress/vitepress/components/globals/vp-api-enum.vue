<script setup lang="ts">
import { computed } from 'vue'
import ApiTyping from './vp-api-typing.vue'

const props = defineProps({
  values: {
    type: Array,
    required: true,
  },
})

const details = computed(() => props.values.join(' | '))
</script>

<template>
  <api-typing type="enum" :details="details" />
</template>

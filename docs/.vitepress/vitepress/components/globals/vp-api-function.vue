<script setup lang="ts">
import { computed } from 'vue'
import ApiTyping from './vp-api-typing.vue'

const props = defineProps({
  params: {
    type: String,
    default: '',
  },
  returns: {
    type: String,
    default: 'void',
  },
})

const details = computed(() => `(${props.params}) => ${props.returns}`)
</script>

<template>
  <api-typing type="Function" :details="details" />
</template>

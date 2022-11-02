<script setup lang="ts">
import { computed } from 'vue'
import { isString } from '@vue/shared'
import ApiTyping from './vp-api-typing.vue'

const props = defineProps({
  values: {
    type: Array,
    required: true,
  },
})

const processString = (s: unknown) => (isString(s) ? `'${s}'` : s)

const details = computed(() => props.values.map(processString).join(' | '))
</script>

<template>
  <api-typing type="enum" :details="details" />
</template>

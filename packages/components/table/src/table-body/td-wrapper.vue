<template>
  <td :colspan="colspan" :rowspan="rowspan"><slot /></td>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TableTdWrapper',
})

defineProps({
  colspan: {
    type: Number,
    default: 1,
  },
  rowspan: {
    type: Number,
    default: 1,
  },
})
</script>

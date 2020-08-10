<template>
  <i :class="`el-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
})
</script>

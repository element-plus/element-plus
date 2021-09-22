<template>
  <el-page-header content="detail" @back="goBack" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const goBack = () => {
      console.log('go back')
    }

    return {
      goBack,
    }
  },
})
</script>

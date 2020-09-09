<template>
  <div>
    <el-button class="item" @click="onClick">Use HTML String</el-button>
  </div>
</template>

<script lang="ts">
import Message from '../src/message'

export default {
  methods: {
    onClick(): void {
      Message({
        message: '<strong>This is <i>HTML</i><strong>',
        dangerouslyUseHTMLString: true,
      })
    },
  },
}
</script>

<template>
  <el-rate
    v-model="value"
    :icons="icons"
    :void-icon="ChatRound"
    :colors="['#409eff', '#67c23a', '#FF9900']"
  >
  </el-rate>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ChatRound, ChatLineRound, ChatDotRound } from '@element-plus/icons'

export default defineComponent({
  setup() {
    return {
      value: ref(null),
      ChatRound,
      icons: [ChatRound, ChatLineRound, ChatDotRound], // same as { 2: ChatRound, 4: { value: ChatLineRound, excluded: true }, 5: ChatDotRound }
    }
  },
})
</script>

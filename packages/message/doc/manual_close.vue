<template>
  <div>
    <el-button class="item" @click="handleOpen">Show Message</el-button>
    <el-button class="item" @click="handleClose">Close Message</el-button>
  </div>
</template>

<script lang="ts">
import Message from '../src/message'
import type { IMessageHandle } from '../src/types'
import { ref } from 'vue'

export default {
  setup() {
    const messageBanner = ref<IMessageHandle>(null)

    // methods
    const handleOpen = () => {
      if (messageBanner.value) return

      messageBanner.value = Message({
        message: "This won't close automatically",
        duration: 0,
      })
    }
    const handleClose = () => {
      if (messageBanner.value) {
        messageBanner.value.close()
        messageBanner.value = null
      }
    }

    return {
      messageBanner,
      handleOpen,
      handleClose,
    }
  },
}
</script>

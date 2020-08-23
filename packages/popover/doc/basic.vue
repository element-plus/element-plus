<template>
  <div>
    <div>referrer</div>
    <el-popover
      trigger="click"
      title="222"
      content="content"
    >
      <template #reference>
        <el-button v-if="showButton" @click="disabled = !disabled">
          Trigger
        </el-button>
        <el-button v-else>
          Not trigger
        </el-button>
      </template>
    </el-popover>

    <!-- <el-button @click="toggle">
      Toggle
    </el-button> -->
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

const placements = ['top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start', 'right-end']
export default {
  setup() {
    const placement = ref('bottom')
    return {
      showButton: ref(true),
      disabled: ref(false),
      referrer: ref(null),
      placement,
      toggle: () => {
        const random = Math.floor(Math.random() * 13)
        placement.value = placements[random]
      },
    }
  },
}
</script>

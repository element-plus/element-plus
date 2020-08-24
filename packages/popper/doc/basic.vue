<template>
  <div class="popper-container">
    <el-popper
      :placement="placement"
      :disabled="disabled"
      effect="light"
    >
      <template #default>content</template>
      <template #trigger>
        <el-button v-if="showButton" @click="disabled = !disabled">
          Trigger
        </el-button>
        <el-button v-else>
          Not trigger
        </el-button>
      </template>
    </el-popper>

    <el-button @click="toggle">
      Toggle
    </el-button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { getRandomInt } from '@element-plus/utils/util'

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
        const random = getRandomInt(12) // range [0, 11]
        placement.value = placements[random]
      },
    }
  },
}
</script>

<style scoped>
.popper-container {
  width: 100%;
  height: 100%;
  padding: 150px;
}

</style>

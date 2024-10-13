<template>
  <div class="play-container">
    <el-tooltip
      :popper-options="popperOptions"
      class="box-item"
      popper-class="popper-tooltip"
      :show-arrow="false"
      effect="dark"
      placement="top-start"
      content="popper-options has a problem"
    >
      <el-button>Custom Popper Location</el-button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const popperOptions = reactive({
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [200, -32],
      },
    },
    {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 200,
          bottom: 2,
          left: 500,
          right: 5,
        },
      },
    },
    {
      name: 'flip',
      options: {
        padding: 5,
      },
    },
    {
      name: 'computeStyles',
      options: {
        gpuAcceleration: true,
      },
    },
    {
      name: 'arrow',
      enabled: false,
      options: {
        padding: 100,
      },
    },
    {
      name: 'eventListeners',
      enabled: true,
    },
  ],
})
</script>

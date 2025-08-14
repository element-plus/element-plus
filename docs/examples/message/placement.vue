<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" :plain="true" @click="openMsg()"> top </el-button>
    <el-button class="!ml-0" :plain="true" @click="openMsg('bottom')">
      bottom
    </el-button>
    <el-button class="!ml-0" :plain="true" @click="openMsg('top-left')">
      top-left
    </el-button>
    <el-button class="!ml-0" :plain="true" @click="openMsg('top-right')">
      top-right
    </el-button>
    <el-button class="!ml-0" :plain="true" @click="openMsg('bottom-left')">
      bottom-left
    </el-button>
    <el-button class="!ml-0" :plain="true" @click="openMsg('bottom-right')">
      bottom-right
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

import type { MessagePlacement, MessageType } from 'element-plus'

let topCount = 0
let bottomCount = 0
let topLeftCount = 0
let topRightCount = 0
let bottomLeftCount = 0
let bottomRightCount = 0

const openMsg = (placement: MessagePlacement = 'top') => {
  let count = 0
  let type: MessageType = 'success'

  switch (placement) {
    case 'top':
      count = ++topCount
      type = 'success'
      break
    case 'bottom':
      count = ++bottomCount
      type = 'warning'
      break
    case 'top-left':
      count = ++topLeftCount
      type = 'info'
      break
    case 'top-right':
      count = ++topRightCount
      type = 'primary'
      break
    case 'bottom-left':
      count = ++bottomLeftCount
      type = 'warning'
      break
    case 'bottom-right':
      count = ++bottomRightCount
      type = 'error'
      break
  }

  ElMessage({
    message: `This is a message from the ${placement} ${count}`,
    type,
    placement,
  })
}
</script>

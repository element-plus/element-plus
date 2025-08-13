<template>
  <div class="flex flex-wrap gap-1">
    <el-button class="!ml-0" :plain="true" @click="openMsg()">
      Show top message
    </el-button>
    <el-button class="!ml-0" :plain="true" @click="openMsg('bottom')">
      Show bottom message
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

import type { MessagePlacement } from 'element-plus'

let topCount = 0
let bottomCount = 0

const openMsg = (placement: MessagePlacement = 'top') => {
  ElMessage({
    message: `This is a message from the ${placement} ${
      placement === 'top' ? ++topCount : ++bottomCount
    }`,
    type: placement === 'top' ? 'success' : 'warning',
    placement,
  })
}
</script>

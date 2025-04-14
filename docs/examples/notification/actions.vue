<template>
  <div class="flex gap-2">
    <el-button class="!ml-0" plain @click="synchronous">
      Synchronous execute
    </el-button>
    <el-button class="!ml-0" plain @click="asynchronous">
      Asynchronous execute
    </el-button>
    <el-button class="!ml-0" plain @click="customDisableAfterExecute">
      Custom disableAfterExecute
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

const asynchronous = () => {
  ElNotification({
    title: 'Async',
    showProgressBar: true,
    actions: [
      {
        label: 'Close after 1 second',
        execute: () => new Promise((resolve) => setTimeout(resolve, 1000)),
        keepOpen: 'until-resolved',
      },
      {
        label: 'Close instantly (resolves after timeout)',
        execute: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      },
    ],
  })
}

const synchronous = () => {
  return ElNotification({
    title: 'Sync',
    showProgressBar: true,
    actions: [
      { label: 'Close', execute: () => undefined },
      { label: 'Keep open', execute: () => undefined, keepOpen: true },
    ],
  })
}

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms))

const customDisableAfterExecute = () => {
  let i = 0
  let j = 0
  ElNotification({
    title: 'Custom disableAfterExecute',
    message:
      'Click many times on the `Custom` action. Button will not be disabled and execute will be called every time.',
    showProgressBar: true,
    actions: [
      {
        label: 'Custom',
        execute: () => {
          console.log(`execute ${++i}`)
          return wait(1500)
        },
        keepOpen: 'until-resolved',
        disableAfterExecute: false,
      },
      {
        label: 'Default',
        execute: () => {
          console.log(`execute ${++j}`)
          return wait(1500)
        },
        keepOpen: 'until-resolved',
      },
    ],
  })
}
</script>

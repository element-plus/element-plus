<template>
  <div class="wrapper">
    <el-button class="item" @click="onClickSuccess">success</el-button>
    <el-button class="item" @click="onClickWarning">warning</el-button>
    <el-button class="item" @click="onClickMessage">message</el-button>
    <el-button class="item" @click="onClickError">error</el-button>
  </div>
</template>

<script lang="ts">
import Message from '../src/message'

export default {
  methods: {
    onClickSuccess(): void {
      Message({
        message: 'Congrats, this is a success message',
        type: 'success',
        showClose: true,
      })
    },
    onClickWarning(): void {
      Message({
        message: 'Warning, this is a warning message',
        type: 'warning',
        showClose: true,
      })
    },
    onClickMessage(): void {
      Message({ message: 'This is a message', showClose: true })
    },
    onClickError(): void {
      Message({
        message: 'Error, this is an error message',
        type: 'error',
        showClose: true,
      })
    },
  },
}
</script>

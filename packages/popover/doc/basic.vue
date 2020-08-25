<template>
  <div>
    <el-popover
      ref="popover1"
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    />

    <el-popover
      ref="popover2"
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    />

    <el-button v-popover:popover1>hover 激活</el-button>
    <el-button v-popover:popover2>click 激活</el-button>
    <el-popover
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <el-button>focus 激活</el-button>
      </template>
    </el-popover>
    <el-popover
      v-model="visible"
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <el-button @click="visible = !visible">手动激活</el-button>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const visible = ref(false)

    return {
      visible,
    }
  },
}
</script>

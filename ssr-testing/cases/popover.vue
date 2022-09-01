<template>
  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button>Focus to activate</el-button>
    </template>
  </el-popover>
</template>

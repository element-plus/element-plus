<template>
  <el-popper
    placement="bottom-end"
    effect="light"
    pure
    trigger="click"
  >
    <template #trigger>
      <el-button>Button</el-button>
    </template>
    <div>
      I am the content
    </div>
  </el-popper>
</template>

<script>
export default {
}
</script>

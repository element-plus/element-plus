<template>
  <el-text class="w-150px mb-2" truncated>
    Self element set width 100px
  </el-text>
  <el-row class="w-150px mb-2">
    <el-text truncated>Squeezed by parent element</el-text>
  </el-row>
  <el-row class="mb-2">
    <el-text line-clamp="2">
      The -webkit-line-clamp CSS property<br />
      allows limiting of the contents of<br />
      a block to the specified number of lines.
    </el-text>
  </el-row>
  <el-row>
    <el-tooltip
      content="Show tooltip only when the text is truncated"
      :disabled="!textRef?.isTruncated"
    >
      <el-text ref="textRef" class="w-150px" truncated title="">
        Show tooltip only when the text is truncated
      </el-text>
    </el-tooltip>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const textRef = ref()
</script>

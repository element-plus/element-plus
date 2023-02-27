<template>
  <el-space direction="vertical">
    <el-text>span</el-text>
    <el-text as="p">This is a paragraph.</el-text>
    <el-text as="b">Bold</el-text>
    <el-text as="i">Italic</el-text>
    <el-text>
      This is
      <el-text as="sub" size="small">subscript</el-text>
    </el-text>
    <el-text>
      This is
      <el-text as="sup" size="small">superscript</el-text>
    </el-text>
    <el-text as="ins">Inserted</el-text>
    <el-text as="del">Deleted</el-text>
    <el-text as="mark">Marked</el-text>
  </el-space>
</template>

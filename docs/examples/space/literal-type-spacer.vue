<template>
  <el-space :size="10" spacer="|">
    <el-button v-for="i in 2" :key="i"> button {{ i }} </el-button>
  </el-space>
</template>

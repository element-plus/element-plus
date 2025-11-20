<template>
  <el-select v-for="i in 500" :key="i" :teleported="false">
    <el-option :label="'common.low'" :value="0" />
    <el-option :label="'common.middle'" :value="1" />
    <el-option :label="'common.high'" :value="2" />
    <el-option :label="'common.ext_high'" :value="3" />
  </el-select>
</template>
<script setup lang="ts"></script>
<style></style>

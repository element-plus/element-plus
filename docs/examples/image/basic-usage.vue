<template>
  <el-row>
    <el-col v-for="fit in fits" :key="fit" class="max-w-20% text-center">
      <el-text class="display-block mb-2">{{ fit }}</el-text>
      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

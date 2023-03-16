<template>
  <el-row>
    <el-col :span="12" style="border-right: 1px solid var(--el-border-color)">
      <el-text class="block m-3 text-center">circle</el-text>
      <el-row class="items-center">
        <el-col :span="6" class="text-center">
          <el-avatar :size="50" :src="circleUrl" />
        </el-col>
        <el-col
          v-for="size in sizeList"
          :key="size"
          :span="6"
          class="text-center"
          style="border-left: 1px solid var(--el-border-color)"
        >
          <el-avatar :size="size" :src="circleUrl" />
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="12">
      <el-text class="block m-3 text-center">square</el-text>
      <el-row class="items-center">
        <el-col :span="6" class="text-center">
          <el-avatar shape="square" :size="50" :src="squareUrl" />
        </el-col>
        <el-col
          v-for="size in sizeList"
          :key="size"
          :span="6"
          class="text-center"
          style="border-left: 1px solid var(--el-border-color)"
        >
          <el-avatar shape="square" :size="size" :src="squareUrl" />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

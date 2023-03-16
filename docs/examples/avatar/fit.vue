<template>
  <el-row>
    <el-col v-for="fit in fits" :key="fit" :span="4" class="text-center">
      <el-text class="block mb-2">{{ fit }}</el-text>
      <el-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})

const { fits, url } = toRefs(state)
</script>

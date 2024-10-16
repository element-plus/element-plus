<template>
  <div>
    You select: {{ value }}
    <el-select-icon
      v-model="value"
      :pagination="pagination"
      :use-default-icon="false"
      :icons="icons"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { icons as ifyRiIcons } from '@iconify-json/ri/icons.json'
const pagination = reactive({
  currentPage: 1,
  pageSize: 88,
  pagerCount: 5,
  small: true,
  background: true,
})
const value = ref('')
const icons = reactive<{ name: string; val: string }[]>([])
for (const key in ifyRiIcons) {
  icons.push({
    name: `ri:${key}`,
    val: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${ifyRiIcons[key].body}</svg>`,
  })
}
// can add svg str too
icons.push({
  name: 'my:circle',
  val: `
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <path d="M514.048 128q79.872 0 149.504 30.208t121.856 82.432 82.432 122.368 30.208 150.016q0 78.848-30.208 148.48t-82.432 121.856-121.856 82.432-149.504 30.208-149.504-30.208-121.856-82.432-82.432-121.856-30.208-148.48q0-79.872 30.208-150.016t82.432-122.368 121.856-82.432 149.504-30.208z"></path>
  </svg>`,
})
</script>

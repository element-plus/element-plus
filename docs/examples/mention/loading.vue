<template>
  <el-mention
    v-model="value"
    :options="options"
    :loading="loading"
    style="width: 320px"
    placeholder="Please input"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import type { MentionOption } from 'element-plus'

const value = ref('')
const loading = ref(false)
const options = ref<MentionOption[]>([])

let timer: ReturnType<typeof setTimeout>
const handleSearch = (pattern: string) => {
  if (timer) clearTimeout(timer)

  loading.value = true
  timer = setTimeout(() => {
    options.value = ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'].map(
      (item) => ({
        label: pattern + item,
        value: pattern + item,
      })
    )
    loading.value = false
  }, 1500)
}

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <el-text tag="p" class="block my-3">use collapse-tags</el-text>
  <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
    collapse-tags
  />

  <el-text tag="p" class="block my-3">use collapse-tags-tooltip</el-text>
  <el-select-v2
    v-model="value2"
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
    collapse-tags
    collapse-tags-tooltip
  />

  <el-text tag="p" class="block my-3">use max-collapse-tags</el-text>
  <el-select-v2
    v-model="value3"
    :options="options"
    placeholder="Please select"
    style="width: 240px"
    multiple
    collapse-tags
    collapse-tags-tooltip
    :max-collapse-tags="3"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])
const value2 = ref([])
const value3 = ref([])
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
</script>

<template>
  <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <el-tag color="#0acf83" class="mx-1" :is-dark="isDark" closable>
      light
    </el-tag>
    <el-tag
      color="#0acf83"
      class="mx-1"
      :is-dark="isDark"
      effect="plain"
      closable
    >
      plain
    </el-tag>
    <el-tag
      color="#0acf83"
      class="mx-1"
      :is-dark="isDark"
      effect="dark"
      closable
    >
      dark
    </el-tag>
  </div>
</template>
<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

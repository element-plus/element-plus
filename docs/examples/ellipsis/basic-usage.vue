<template>
  <!-- <el-ellipsis
    :rows="3"
    :content="text"
    expand-text="展开"
    collapse-text="收起"
  /> -->
  <el-ellipsis :line-clamp="3" :expanded="expended">
    Element Plus is a LGPL-licensed open source project, and free for commercial
    use. It is a set of Vue 3 components and directives that encapsulate common
    interaction patterns used in front-end projects. We hope that a Vue-based
    form creation library, and a set of tools to help users build large-scale
    applications or libraries.
    <template #suffix>
      <span @click="expended = !expended">{{
        expended ? '收起' : '展开'
      }}</span>
    </template>
  </el-ellipsis>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const expended = ref(false)

const text = ref(
  'Element Plus is a LGPL-licensed open source project, and free for commercial use. It is a set of Vue 3 components and directives that encapsulate common interaction patterns used in front-end projects. We hope that a Vue-based form creation library, and a set of tools to help users build large-scale applications or libraries.'
)
</script>

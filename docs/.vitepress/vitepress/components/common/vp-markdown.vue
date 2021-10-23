<script lang="ts" setup>
import { computed } from 'vue'
import marked from 'marked'

const props = defineProps({
  content: String,
})

const attr = 'rel="noreferrer noopenner" target="_blank"'

const parsed = computed(() => {
  // Note this is relatively arbitrary so that this could be buggy.
  return marked(props.content)
    .replace(
      /#(\d+) by/g,
      `<a href="https://github.com/element-plus/element-plus/pull/$1" ${attr}>#$1</a> by`
    )
    .replace(/@([\w-]+)/g, `<a href="https://github.com/$1" ${attr}>@$1</a>`)
})
</script>

<template>
  <div class="markdown-wrapper" v-html="parsed" />
</template>

<style>
.markdown-wrapper h3 {
  margin-top: 1rem;
}
</style>

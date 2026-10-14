<template>
  <el-input
    v-model="text"
    maxlength="10"
    placeholder="Please input"
    show-word-limit
    :count-graphemes="calc"
    type="text"
  />
  <div style="margin: 20px 0" />
  <el-input
    v-model="textarea"
    maxlength="20"
    placeholder="Please input"
    show-word-limit
    :count-graphemes="calc"
    type="textarea"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('😀😁')
const textarea = ref('😀😁')

/**
 * Count function for grapheme clustering.
 * Counts the number of graphemes (visual characters) in a string.
 *
 * Note: This example uses Array.from() for simplicity.
 * For production use, consider using Intl.Segmenter for better
 * handling of complex emoji and unicode characters.
 */
const calc = (value: string) => {
  // Simplified version: counts code points (not full grapheme clusters)
  // For production, use Intl.Segmenter like the component does
  return Array.from(value).length
}
</script>

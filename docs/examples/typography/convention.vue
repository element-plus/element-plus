<template>
  <table class="demo-typo-size">
    <tbody>
      <tr>
        <td>Level</td>
        <td>Font Size</td>
        <td class="color-dark-light">Demo</td>
      </tr>
      <tr
        v-for="(fontSize, i) in fontSizes"
        :key="i"
        :style="`font-size: var(--el-font-size-${fontSize.type})`"
      >
        <td>{{ fontSize.level }}</td>
        <td>
          {{
            useCssVar(`--el-font-size-${fontSize.type}`).value +
            ' ' +
            formatType(fontSize.type)
          }}
        </td>
        <td>Build with Element</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { useCssVar } from '@vueuse/core'

const fontSizes = [
  {
    level: 'Supplementary text',
    type: 'extra-small',
  },
  {
    level: 'Body (small)',
    type: 'small',
  },
  {
    level: 'Body',
    type: 'base',
  },
  {
    level: 'Small Title',
    type: 'medium',
  },
  {
    level: 'Title',
    type: 'large',
  },
  {
    level: 'Main Title',
    type: 'extra-large',
  },
]

function formatType(type: string) {
  return type
    .split('-')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
}
</script>

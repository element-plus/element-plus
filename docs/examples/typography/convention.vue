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
            getCssVariable(`--el-font-size-${fontSize.type}`) +
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

const isClient =
  typeof window !== 'undefined' && typeof document !== 'undefined'

const getCssVariable = (property: string) => {
  if (!isClient) return ''

  return getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim()
}
</script>

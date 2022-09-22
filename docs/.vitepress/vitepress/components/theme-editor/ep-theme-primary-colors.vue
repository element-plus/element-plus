<script setup lang="ts">
const primaryColors = [
  {
    name: '经典蓝',
    color: '#409EFF',
  },
  {
    name: '高对比度',
    color: '#0075EB',
  },
  {
    name: '金盏黄',
    color: '#F3B814',
  },
  {
    name: '绿松石',
    color: '#13C2C2',
  },
]
</script>

<template>
  <div>
    <div>
      <h3 text="lg">主题色</h3>
      <div
        v-for="item in primaryColors"
        :key="item.name"
        class="rounded inline-flex border border-$ep-color transition hover:shadow"
        p="1"
        m="1"
        :style="{
          '--ep-color': item.color,
        }"
      >
        <div
          class="inline-flex w-10 h-10"
          :style="{ backgroundColor: 'var(--ep-color)' }"
        />
      </div>
    </div>
  </div>
</template>

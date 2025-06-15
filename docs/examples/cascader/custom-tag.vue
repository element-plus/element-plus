<template>
  <div class="m-4">
    <p>Using slots allows for more flexible control over the display.</p>
    <el-cascader :options="options" :props="props" clearable>
      <template #tag="{ data }">
        <el-tag
          v-for="(item, index) in getTags(data)"
          :key="item"
          :color="index % 2 === 0 ? '#FFDE0A' : ''"
        >
          {{ item }}
        </el-tag>
      </template>
    </el-cascader>
    <p>Display top-level tags only</p>
    <el-cascader :options="options" :props="props" clearable>
      <template #tag="{ data }">
        <el-tag v-for="item in getTopLevelTags(data)" :key="item">
          {{ item }}
        </el-tag>
      </template>
    </el-cascader>
  </div>
</template>

<script lang="ts" setup>
import type { Tag } from 'element-plus'

const props = { multiple: true }
const options = [
  {
    value: 1,
    label: 'Asia',
    children: [
      {
        value: 2,
        label: 'China',
        children: [
          { value: 3, label: 'Beijing' },
          { value: 4, label: 'Shanghai' },
          { value: 5, label: 'Hangzhou' },
        ],
      },
      {
        value: 6,
        label: 'Japan',
        children: [
          { value: 7, label: 'Tokyo' },
          { value: 8, label: 'Osaka' },
          { value: 9, label: 'Kyoto' },
        ],
      },
      {
        value: 10,
        label: 'Korea',
        children: [
          { value: 11, label: 'Seoul' },
          { value: 12, label: 'Busan' },
          { value: 13, label: 'Taegu' },
        ],
      },
    ],
  },
  {
    value: 14,
    label: 'Europe',
    children: [
      {
        value: 15,
        label: 'France',
        children: [
          { value: 16, label: 'Paris' },
          { value: 17, label: 'Marseille' },
          { value: 18, label: 'Lyon' },
        ],
      },
      {
        value: 19,
        label: 'UK',
        children: [
          { value: 20, label: 'London' },
          { value: 21, label: 'Birmingham' },
          { value: 22, label: 'Manchester' },
        ],
      },
    ],
  },
  {
    value: 23,
    label: 'North America',
    children: [
      {
        value: 24,
        label: 'US',
        children: [
          { value: 25, label: 'New York' },
          { value: 26, label: 'Los Angeles' },
          { value: 27, label: 'Washington' },
        ],
      },
      {
        value: 28,
        label: 'Canada',
        children: [
          { value: 29, label: 'Toronto' },
          { value: 30, label: 'Montreal' },
          { value: 31, label: 'Ottawa' },
        ],
      },
    ],
  },
]
const getTags = (data: Tag[]) => {
  return data.map((item) => item.text)
}
const getTopLevelTags = (data: Tag[]) => {
  const set: Set<string> = new Set()
  for (const datum of data) {
    let parent = datum.node?.parent
    while (parent && parent.level !== 1) {
      parent = parent.parent
    }
    const label = parent?.data?.label
    label && set.add(label)
  }
  return [...set]
}
</script>

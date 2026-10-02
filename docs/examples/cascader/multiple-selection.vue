<template>
  <div class="m-4">
    <p>Display all tags (default)</p>
    <el-cascader :options="options" :props="props" clearable />
  </div>
  <div class="m-4">
    <p>Collapse tags</p>
    <el-cascader :options="options" :props="props" collapse-tags clearable />
  </div>
  <div class="m-4">
    <p>Collapse tags tooltip</p>
    <el-cascader
      :options="options"
      :props="props"
      collapse-tags
      collapse-tags-tooltip
      clearable
    />
  </div>
  <div class="m-4">
    <p>Max Collapse Tags</p>
    <el-cascader
      :options="options"
      :props="props"
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      clearable
    />
  </div>
</template>

<script lang="ts" setup>
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
</script>

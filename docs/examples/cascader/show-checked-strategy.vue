<template>
  <div class="m-4">
    <p>Strategy: child (default, show all selected child nodes)</p>
    <el-cascader
      v-model="value1"
      :options="options"
      :props="props"
      clearable
      :show-all-levels="false"
    />
    <div v-if="value1.length > 0">
      <pre>{{ JSON.stringify(value1) }}</pre>
    </div>
  </div>

  <div class="m-4">
    <p>
      Strategy: parent (show only parent nodes when all children are selected)
    </p>
    <el-cascader
      v-model="value2"
      :options="options"
      :props="props"
      show-checked-strategy="parent"
      clearable
    />
    <div v-if="value2.length > 0">
      <pre>{{ JSON.stringify(value2) }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = {
  multiple: true,
}

const value1 = ref([
  ['guide', 'disciplines', 'consistency'],
  ['guide', 'navigation', 'side nav'],
])

const value2 = ref([['guide']])

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
    ],
  },
]
</script>

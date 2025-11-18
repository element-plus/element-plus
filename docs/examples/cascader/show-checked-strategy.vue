<template>
  <div class="m-4">
    <p>Strategy: child (default, show all selected child nodes)</p>
    <el-cascader
      v-model="value1"
      :options="options"
      :props="props"
      show-checked-strategy="child"
      clearable
      @change="handleChange1"
    />
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
      @change="handleChange2"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const props = {
  multiple: true,
}

const handleChange1 = (value) => {
  console.log('Child strategy:', value)
}

const handleChange2 = (value) => {
  console.log('Parent strategy:', value)
}

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

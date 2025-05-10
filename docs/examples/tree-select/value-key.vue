<template>
  <el-tree-select
    v-model="value1"
    :data="data1"
    :render-after-expand="false"
    value-key="id"
    style="width: 240px"
  />
  <p>
    selected option's description：
    {{ value1 ? value1.label : 'no select' }}
  </p>
  <el-divider />
  show checkbox：
  <el-tree-select
    v-model="value2"
    :data="data2"
    :render-after-expand="false"
    value-key="id"
    style="width: 240px"
    show-checkbox
  />
  <p>
    selected option's description：
    {{ value2 ? value2.label : 'no select' }}
  </p>
  <el-divider />
  show checkbox with `check-strictly`：
  <el-tree-select
    v-model="value3"
    :data="data2"
    :render-after-expand="false"
    value-key="id"
    style="width: 240px"
    show-checkbox
    check-strictly
  />
  <p>
    selected option's description：
    {{ value3 ? value3.label : 'no select' }}
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref<any>('')
const data1 = [
  {
    value: {
      id: 1,
      label: 'Level one 1',
    },
    label: 'Level one 1',
    children: [
      {
        value: {
          id: 11,
          label: 'Level two 1-1',
        },
        label: 'Level two 1-1',
        children: [
          {
            value: {
              id: 111,
              label: 'Level three 1-1-1',
            },
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: {
      id: 2,
      label: 'Level one 2',
    },
    label: 'Level one 2',
    children: [
      {
        value: {
          id: 21,
          label: 'Level two 2-1',
        },
        label: 'Level two 2-1',
        children: [
          {
            value: {
              id: 211,
              label: 'Level three 2-1-1',
            },
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: {
          id: 22,
          label: 'Level two 2-2',
        },
        label: 'Level two 2-2',
        children: [
          {
            value: {
              id: 221,
              label: 'Level three 2-2-1',
            },
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: {
      id: 3,
      label: 'Level one 3',
    },
    label: 'Level one 3',
    children: [
      {
        value: {
          id: 31,
          label: 'Level two 3-1',
        },
        label: 'Level two 3-1',
        children: [
          {
            value: {
              id: 311,
              label: 'Level three 3-1-1',
            },
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: {
          id: 32,
          label: 'Level two 3-2',
        },
        label: 'Level two 3-2',
        children: [
          {
            value: {
              id: 321,
              label: 'Level three 3-2-1',
            },
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const value2 = ref<any>('')
const value3 = ref<any>('')
const data2 = [
  {
    value: {
      id: 1,
      label: 'Level one 1',
    },
    id: 1,
    label: 'Level one 1',
    children: [
      {
        value: {
          id: 11,
          label: 'Level two 1-1',
        },
        id: 11,
        label: 'Level two 1-1',
        children: [
          {
            value: {
              id: 111,
              label: 'Level three 1-1-1',
            },
            id: 111,
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: {
      id: 2,
      label: 'Level one 2',
    },
    id: 2,
    label: 'Level one 2',
    children: [
      {
        value: {
          id: 21,
          label: 'Level two 2-1',
        },
        id: 21,
        label: 'Level two 2-1',
        children: [
          {
            value: {
              id: 211,
              label: 'Level three 2-1-1',
            },
            id: 211,
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        value: {
          id: 22,
          label: 'Level two 2-2',
        },
        id: 22,
        label: 'Level two 2-2',
        children: [
          {
            value: {
              id: 221,
              label: 'Level three 2-2-1',
            },
            id: 221,
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: {
      id: 3,
      label: 'Level one 3',
    },
    id: 3,
    label: 'Level one 3',
    children: [
      {
        value: {
          id: 31,
          label: 'Level two 3-1',
        },
        id: 31,
        label: 'Level two 3-1',
        children: [
          {
            value: {
              id: 311,
              label: 'Level three 3-1-1',
            },
            id: 311,
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: {
          id: 32,
          label: 'Level two 3-2',
        },
        id: 32,
        label: 'Level two 3-2',
        children: [
          {
            value: {
              id: 321,
              label: 'Level three 3-2-1',
            },
            id: 321,
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
</script>

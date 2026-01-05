<template>
  <div class="flex flex-col items-center">
    <el-switch
      v-model="showPrefix"
      active-text="show prefix"
      inactive-text="hide prefix"
    />
    <div class="flex flex-wrap">
      <div class="m-4">
        <p>checkStrictly | Single mode</p>
        <el-cascader
          v-model="value"
          :options="options"
          :props="props1"
          clearable
        />
      </div>
      <div class="m-4">
        <p>Multiple mode</p>
        <el-cascader
          v-model="value2"
          show-checked-strategy="parent"
          :options="options"
          :props="props2"
          clearable
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const value = ref()
const value2 = ref()
const showPrefix = ref(true)

const props1 = computed(() => ({
  showPrefix: showPrefix.value,
  checkStrictly: true,
  checkOnClickNode: true,
}))
const props2 = computed(() => ({
  showPrefix: showPrefix.value,
  multiple: true,
  checkOnClickNode: true,
}))

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

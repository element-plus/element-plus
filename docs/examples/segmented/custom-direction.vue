<template>
  <div>
    <el-segmented v-model="direction" :options="directionOptions" />
    <br />
    <el-segmented v-model="value" :options="options" :direction="direction">
      <template #default="{ item }">
        <div class="flex flex-col items-center gap-2 p-2">
          <el-icon size="20">
            <component :is="item.icon" />
          </el-icon>
          <div>{{ item.label }}</div>
        </div>
      </template>
    </el-segmented>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Apple,
  Cherry,
  Grape,
  Orange,
  Pear,
  Watermelon,
} from '@element-plus/icons-vue'
import type { SegmentedProps } from 'element-plus'

const value = ref('Apple')

const direction = ref<SegmentedProps['direction']>('horizontal')

const directionOptions = [
  { label: 'Horizontal', value: 'horizontal' },
  { label: 'Vertical', value: 'vertical' },
]

const options = [
  {
    label: 'Apple',
    value: 'Apple',
    icon: Apple,
  },
  {
    label: 'Cherry',
    value: 'Cherry',
    icon: Cherry,
  },
  {
    label: 'Grape',
    value: 'Grape',
    icon: Grape,
  },
  {
    label: 'Orange',
    value: 'Orange',
    icon: Orange,
  },
  {
    label: 'Pear',
    value: 'Pear',
    icon: Pear,
  },
  {
    label: 'Watermelon',
    value: 'Watermelon',
    icon: Watermelon,
    disabled: true,
  },
]
</script>

<template>
  <div>
    <el-segmented
      v-model="size"
      :options="sizeOptions"
      style="margin-bottom: 1rem"
    />
    <br />
    <el-segmented
      v-model="direction"
      :options="directionOptions"
      style="margin-bottom: 1rem"
    />
    <br />
    <el-segmented
      v-model="value"
      :options="options"
      :direction="direction"
      :size="size"
    >
      <template #default="scope">
        <div
          :class="[
            'flex',
            'items-center',
            'gap-2',
            'flex-col',
            direction === 'horizontal' && 'p-2',
          ]"
        >
          <el-icon size="20">
            <component :is="scope.item.icon" />
          </el-icon>
          <div>{{ scope.item.label }}</div>
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
const size = ref<SegmentedProps['size']>('default')

const directionOptions = [
  { label: 'Horizontal', value: 'horizontal' },
  { label: 'Vertical', value: 'vertical' },
]

const sizeOptions = ['large', 'default', 'small']

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

<template>
  <el-segmented
    v-model="direction"
    :options="options"
    size="large"
    @change="visible = true"
  />

  <el-drawer v-model="visible" :direction="direction" resizable>
    <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
    </template>
    This is drawer content.
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { DrawerProps } from 'element-plus'

const visible = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')

const options = [
  { label: 'Top', value: 'ttb' },
  { label: 'Right', value: 'rtl' },
  { label: 'Bottom', value: 'btt' },
  { label: 'Left', value: 'ltr' },
]
</script>

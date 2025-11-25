<template>
  <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Select with icon"
    style="width: 100px"
    :fit-input-width="false"
    :option-extra-width="24"
  >
    <template #default="{ item }">
      <div class="flex items-center gap-2">
        <el-icon :size="16">
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.label }}</span>
      </div>
    </template>
  </el-select-v2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Apple,
  Coffee,
  IceCream,
  Orange,
  Pear,
  Watermelon,
} from '@element-plus/icons-vue'

const iconPool = [Apple, Coffee, IceCream, Orange, Pear, Watermelon]

const value = ref('')
const options = iconPool.map((icon, index) => ({
  value: `Option ${index + 1}`,
  label: `Option ${index + 1}`,
  icon,
}))
</script>

<template>
  <div>
    <el-segmented v-model="tagType" :options="type" class="mr-5" />
    <el-segmented v-model="tagEffect" :options="effect" />
  </div>
  <br />
  <el-input-tag
    v-model="input"
    :tag-type="tagType"
    :tag-effect="tagEffect"
    placeholder="Please input"
  >
    <template #tag="{ value }">
      <div class="flex items-center">
        <el-icon class="mr-1">
          <ElementPlus />
        </el-icon>
        <span>{{ value }}</span>
      </div>
    </template>
  </el-input-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElementPlus } from '@element-plus/icons-vue'
import type { TagProps } from 'element-plus'

const type: Array<TagProps['type']> = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
]
const effect: Array<TagProps['effect']> = ['light', 'dark', 'plain']

const tagType = ref<TagProps['type']>('primary')
const tagEffect = ref<TagProps['effect']>('plain')
const input = ref<string[]>(['tag1', 'tag2', 'tag3'])
</script>

<template>
  <div>
    <el-radio-group v-model="tagType" aria-label="type control" class="mr-5">
      <el-radio-button
        v-for="item in type"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-radio-group>
    <el-radio-group v-model="tagEffect" aria-label="effect control">
      <el-radio-button
        v-for="item in effect"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-radio-group>
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

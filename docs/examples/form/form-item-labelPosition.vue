<script setup lang="ts">
import { ref } from 'vue'
type LabelPositionType = 'left' | 'right' | 'top'
const labelPosition = ref<LabelPositionType>('left')
const options: LabelPositionType[] = ['left', 'right', 'top']
</script>

<template>
  <el-form>
    <el-form-item
      label="label"
      label-width="150px"
      :label-position="labelPosition"
    >
      <el-radio-group v-model="labelPosition">
        <el-radio-button
          v-for="position in options"
          :key="position"
          :label="position"
          :value="position"
        />
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

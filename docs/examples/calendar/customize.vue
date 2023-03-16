<template>
  <el-calendar>
    <template #date-cell="{ data }">
      <el-text
        tag="p"
        :style="data.isSelected ? 'color: var(--el-color-primary)' : ''"
      >
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </el-text>
    </template>
  </el-calendar>
</template>

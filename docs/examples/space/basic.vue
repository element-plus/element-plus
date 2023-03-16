<template>
  <el-space wrap>
    <el-card v-for="i in 3" :key="i" class="w-250px">
      <template #header> Card name </template>
      <el-text v-for="o in 4" :key="o" class="block">
        {{ 'List item ' + o }}
      </el-text>
    </el-card>
  </el-space>
</template>

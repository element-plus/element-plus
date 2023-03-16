<template>
  <el-card class="box-card">
    <template #header>
      <el-row justify="space-between">
        <el-text>Card name</el-text>
        <el-button class="button" text>Operation button</el-button>
      </el-row>
    </template>
    <el-text v-for="o in 4" :key="o" tag="p">{{ 'List item ' + o }}</el-text>
  </el-card>
</template>

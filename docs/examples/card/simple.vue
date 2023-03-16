<template>
  <el-card>
    <el-text v-for="o in 4" :key="o" tag="p">{{ 'List item ' + o }}</el-text>
  </el-card>
</template>

<template>
  <template v-if="descriptions.direction === 'vertical'">
    <tr>
      <template v-for="(cell, index) in row" :key="`tr1-${index}`">
        <el-descriptions-cell :cell="cell" tag="th" type="label" />
      </template>
    </tr>
    <tr>
      <template v-for="(cell, index) in row" :key="`tr2-${index}`">
        <el-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
    </tr>
  </template>
  <tr v-else>
    <template v-for="(cell, index) in row" :key="`tr3-${index}`">
      <template v-if="descriptions.border">
        <el-descriptions-cell :cell="cell" tag="td" type="label" />
        <el-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
      <el-descriptions-cell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { inject } from 'vue'

import ElDescriptionsCell from './descriptions-cell'
import { descriptionsKey } from './token'
import { descriptionsRowProps } from './descriptions-row'

import type { IDescriptionsInject } from './descriptions.type'

defineOptions({
  name: 'ElDescriptionsRow',
})

defineProps(descriptionsRowProps)

const descriptions = inject(descriptionsKey, {} as IDescriptionsInject)
</script>

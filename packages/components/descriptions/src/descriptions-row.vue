<template>
  <template v-if="descriptions.props.direction === 'vertical'">
    <tr>
      <template v-for="(cell, _index) in row" :key="`tr1-${_index}`">
        <el-descriptions-cell :cell="cell" tag="th" type="label" />
      </template>
    </tr>
    <tr>
      <template v-for="(cell, _index) in row" :key="`tr2-${_index}`">
        <el-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
    </tr>
  </template>
  <tr v-else>
    <template v-for="(cell, _index) in row" :key="`tr3-${_index}`">
      <template v-if="descriptions.props.border">
        <el-descriptions-cell :cell="cell" tag="td" type="label" />
        <el-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
      <el-descriptions-cell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import ElDescriptionsCell from './descriptions-cell'
import { descriptionsKey } from './token'
import { descriptionsRowProps } from './descriptions-row'

defineOptions({
  name: 'ElDescriptionsRow',
})

defineProps(descriptionsRowProps)

const descriptions = inject(descriptionsKey)!
</script>

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
      <el-descriptions-cell
        v-else
        :cell="cell"
        tag="td"
        type="both"
      />
    </template>
  </tr>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import DescriptionsCell from './descriptions-cell'
import { elDescriptionsKey, IDescriptionsInject } from './descriptions.type'

export default defineComponent({
  name: 'ElDescriptionsRow',
  components: {
    [DescriptionsCell.name]: DescriptionsCell,
  },
  props: {
    row: {
      type: Array,
    },
  },
  setup() {
    const descriptions = inject(elDescriptionsKey, {} as IDescriptionsInject)

    return {
      descriptions,
    }
  },
})
</script>

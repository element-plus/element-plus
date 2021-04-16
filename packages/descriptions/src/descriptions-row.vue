<template>
  <template v-if="direction === 'vertical'">
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
  <template v-else>
    <tr>
      <template v-for="(cell, index) in row" :key="`tr3-${index}`">
        <template v-if="border">
          <el-descriptions-cell :cell="cell" tag="td" type="label" />
          <el-descriptions-cell :cell="cell" tag="td" type="content" />
        </template>
        <template v-else>
          <el-descriptions-cell :cell="cell" tag="td" type="both" />
        </template>
      </template>
    </tr>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import DescriptionsCell from './descriptions-cell'
import { IDescriptionsInject } from './descriptions.type'

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
    const descriptions: IDescriptionsInject = inject('descriptions')
    const direction = computed(() => descriptions.direction)
    const border = computed(() => descriptions.border)

    return {
      direction: direction,
      border: border,
    }
  },
})
</script>

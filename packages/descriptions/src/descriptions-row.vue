<template>
  <template v-if="direction === 'vertical'">
    <tr>
      <template v-for="(cell, index) in row" :key="`d1-${index}`">
        <el-descriptions-cell :cell="cell" tag="th" type="label" />
      </template>
    </tr>
    <tr>
      <template v-for="(cell, index) in row" :key="`d2-${index}`">
        <el-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
    </tr>
  </template>
  <template v-else>
    <tr>
      <template v-for="(cell, index) in row" :key="`d3-${index}`">
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
import { defineComponent, inject, PropType, toRefs } from 'vue'
import DescriptionsCell from './descriptions-cell.vue'

interface IDescriptionsInject {
  border: boolean
  column: number
  direction: PropType<'horizontal' | 'vertical'>
  size: PropType<ComponentSize>
  title: string
  extra: string
}

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
    // console.log(descriptions.border)

    return {
      ...toRefs(descriptions),
    }
  },
})
</script>

<template>
  <template v-if="descriptions.direction === 'vertical'">
    <tr>
      <template v-for="(cell, _index) in row" :key="`tr1-${_index}`">
        <g-descriptions-cell :cell="cell" tag="th" type="label" />
      </template>
    </tr>
    <tr>
      <template v-for="(cell, _index) in row" :key="`tr2-${_index}`">
        <g-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
    </tr>
  </template>
  <tr v-else>
    <template v-for="(cell, _index) in row" :key="`tr3-${_index}`">
      <template v-if="descriptions.border">
        <g-descriptions-cell :cell="cell" tag="td" type="label" />
        <g-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
      <g-descriptions-cell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import GDescriptionsCell from './descriptions-cell'
import { descriptionsKey } from './token'

import type { DescriptionsRowProps } from './descriptions-row'
import type { IDescriptionsInject } from './descriptions.type'

defineOptions({
  name: 'GDescriptionsRow',
})

withDefaults(defineProps<DescriptionsRowProps>(), {
  row: () => [],
})

const descriptions = inject(descriptionsKey, {} as IDescriptionsInject)
</script>

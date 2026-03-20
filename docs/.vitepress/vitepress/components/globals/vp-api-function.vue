<script setup lang="ts">
import { computed } from 'vue'
import ApiTyping from './vp-api-typing.vue'

import type { PropType } from 'vue'

type ParamType = [string, string]

const props = defineProps({
  /**
   * @description params list, shape of Array<[key: string, value: string]>
   */
  params: {
    type: Array as PropType<Array<ParamType>>,
    default: () => [],
  },
  returns: {
    type: String,
    default: 'void',
  },
})

const mappedParams = computed(() =>
  props.params
    .reduce((params, [key, val]) => {
      let type = val
      if (Array.isArray(val)) {
        type = val.join(' | ')
      }
      return params.concat([`${key}: ${type}`])
    }, [] as string[])
    .join(', ')
)

const details = computed(() => `(${mappedParams.value}) => ${props.returns}`)
</script>

<template>
  <api-typing type="Function" :details="details" />
</template>

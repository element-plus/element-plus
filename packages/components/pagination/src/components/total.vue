<template>
  <span :class="prefixClass">
    {{
      t('el.pagination.total', {
        total,
      })
    }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLocale, usePrefixClass } from '@element-plus/hooks'

import type { ExtractPropTypes } from 'vue'

const paginationTotalProps = {
  total: {
    type: Number,
    default: 1000,
  },
} as const
export type PaginationTotalProps = ExtractPropTypes<typeof paginationTotalProps>

export default defineComponent({
  name: 'ElPaginationTotal',

  props: paginationTotalProps,

  setup() {
    const prefixClass = usePrefixClass('pagination__total')
    const { t } = useLocale()
    return {
      prefixClass,
      t,
    }
  },
})
</script>

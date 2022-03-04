<template>
  <span :class="ns.e('total')" :disabled="disabled">
    {{
      t('el.pagination.total', {
        total,
      })
    }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { usePagination } from '../usePagination'
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
    const { t } = useLocale()
    const ns = useNamespace('pagination')
    const { disabled } = usePagination()
    return {
      t,
      ns,
      disabled,
    }
  },
})
</script>

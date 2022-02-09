<template>
  <span class="el-pagination__total" :disabled="disabled">
    {{
      t('el.pagination.total', {
        total,
      })
    }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLocale } from '@element-plus/hooks'
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
    const { disabled } = usePagination()
    return {
      t,
      disabled,
    }
  },
})
</script>

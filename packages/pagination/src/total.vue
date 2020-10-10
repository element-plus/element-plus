<template>
  <span class="el-pagination__total">
    {{
      t('el.pagination.total', {
        total,
      })
    }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { t } from '@element-plus/locale'

export default defineComponent({
  name: 'Total',
  props: {
    total: {
      type: Number,
      default: 1000,
    },
  },
  setup() {
    return {
      t,
    }
  },
})

</script>

<template>
  <span :class="ns.e('sizes')">
    <el-select
      :model-value="innerPageSize"
      :disabled="disabled"
      :popper-class="popperClass"
      :size="size"
      @change="handleChange"
    >
      <el-option
        v-for="item in innerPagesizes"
        :key="item"
        :value="item"
        :label="item + t('el.pagination.pagesize')"
      />
    </el-select>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { isEqual } from 'lodash-unified'
import { ElOption, ElSelect } from '@element-plus/components/select'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { buildProps, definePropType, mutable } from '@element-plus/utils'
import { usePagination } from '../usePagination'

import type { Nullable } from '@element-plus/utils'

const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizes: {
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  },
  popperClass: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  size: {
    type: String,
    default: 'default',
  },
} as const)

export default defineComponent({
  name: 'ElPaginationSizes',

  components: {
    ElSelect,
    ElOption,
  },

  props: paginationSizesProps,
  emits: ['page-size-change'],

  setup(props, { emit }) {
    const { t } = useLocale()
    const ns = useNamespace('pagination')
    const pagination = usePagination()
    const innerPageSize = ref<Nullable<number>>(props.pageSize)

    watch(
      () => props.pageSizes,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal)) return
        if (Array.isArray(newVal)) {
          const pageSize = newVal.includes(props.pageSize)
            ? props.pageSize
            : props.pageSizes[0]
          emit('page-size-change', pageSize)
        }
      }
    )

    watch(
      () => props.pageSize,
      (newVal) => {
        innerPageSize.value = newVal
      }
    )

    const innerPagesizes = computed(() => props.pageSizes)

    function handleChange(val: number) {
      if (val !== innerPageSize.value) {
        innerPageSize.value = val
        pagination.handleSizeChange?.(Number(val))
      }
    }

    return {
      ns,
      innerPagesizes,
      innerPageSize,

      t,
      handleChange,
    }
  },
})
</script>

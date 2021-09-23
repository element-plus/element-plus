<template>
  <span class="el-pagination__sizes">
    <el-select
      :model-value="innerPageSize"
      :disabled="disabled"
      :popper-class="popperClass"
      size="mini"
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
import { defineComponent, watch, computed, ref } from 'vue'
import isEqual from 'lodash/isEqual'
import { ElSelect, ElOption } from '@element-plus/components/select'
import { useLocaleInject } from '@element-plus/hooks'
import { buildProp, definePropType, mutable } from '@element-plus/utils/props'
import { usePagination } from '../usePagination'

import type { Nullable } from '@element-plus/utils/types'

const paginationSizesProps = {
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizes: buildProp({
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  } as const),
  popperClass: {
    type: String,
    default: '',
  },
  disabled: Boolean,
} as const

export default defineComponent({
  name: 'ElPaginationSizes',

  components: {
    ElSelect,
    ElOption,
  },

  props: paginationSizesProps,
  emits: ['page-size-change'],

  setup(props, { emit }) {
    const { t } = useLocaleInject()
    const pagination = usePagination()
    const innerPageSize = ref<Nullable<number>>(props.pageSize)

    watch(
      () => props.pageSizes,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal)) return
        if (Array.isArray(newVal)) {
          const pageSize =
            newVal.indexOf(props.pageSize) > -1
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
      innerPagesizes,
      innerPageSize,

      t,
      handleChange,
    }
  },
})
</script>

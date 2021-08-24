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
import ElSelect from '@element-plus/components/select'
import { useLocaleInject } from '@element-plus/hooks'
import { usePagination } from './usePagination'

import type { PropType } from 'vue'
import type { Nullable } from '@element-plus/utils/types'

const { Option: ElOption } = ElSelect

export default defineComponent({
  name: 'Sizes',
  components: {
    ElSelect,
    ElOption,
  },
  props: {
    pageSize: Number,
    pageSizes: {
      type: Array as PropType<Array<number>>,
      default: () => {
        return [10, 20, 30, 40, 50, 100]
      },
    },
    popperClass: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  emits: ['page-size-change'],
  setup(props, { emit }) {
    const { t } = useLocaleInject()
    const { pagination } = usePagination()
    const innerPageSize = ref<Nullable<number>>(props.pageSize)

    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual(newVal, oldVal)) return
      if (Array.isArray(newVal)) {
        const pageSize = newVal.indexOf(props.pageSize) > -1
          ? props.pageSize
          : props.pageSizes[0]
        emit('page-size-change', pageSize)
      }
    })

    watch(() => props.pageSize, newVal => {
      innerPageSize.value = newVal
    })

    const innerPagesizes = computed(() => props.pageSizes)

    function handleChange(val: number) {
      if (val !== innerPageSize.value) {
        innerPageSize.value = val
        pagination?.handleSizeChange(Number(val))
      }
    }

    return {
      t,
      innerPagesizes,
      innerPageSize,
      handleChange,
    }
  },
})
</script>

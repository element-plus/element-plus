<template>
  <div
    ref="paginationTableRef"
    :class="[ns.b(), props.class]"
    :style="props.style"
  >
    <div ref="tableContainerRef" :class="ns.e('table')">
      <el-table ref="tableRef" v-bind="$attrs" height="100%" :data="tableData">
        <slot></slot>
        <!-- 当数据为空时自定义的内容 -->
        <template #empty>
          <template v-if="$slots.empty">
            <slot name="empty"></slot>
          </template>
          <el-empty v-else :image-size="100" />
        </template>
        <template #append>
          <slot name="append"></slot>
        </template>
      </el-table>
    </div>
    <div ref="paginationContainerRef" :class="ns.e('pagination')">
      <el-scrollbar class="el-pagination-table-pagination-scrollbar">
        <el-pagination
          ref="paginationRef"
          v-bind="$attrs"
          v-model:current-page="_currentPage"
          v-model:page-size="_pageSize"
          :page-count="_pageCount"
          :total="_total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElPagination, ElTable } from '@element-plus/components'
import { useNamespace } from '@element-plus/hooks'

defineOptions({
  name: 'ElPaginationTable',
})

interface IProps<T> {
  class?: string
  style?: any
  data?: Array<T>
  total?: number
  dataAtOnce?: boolean
  currentPage?: number
  pageSize?: number
  pageCount?: number
}

const props = withDefaults(defineProps<IProps<any>>(), {
  data: () => [],
  total: () => 0,
  dataAtOnce: () => false,
  currentPage: () => 1,
  pageSize: () => 10,
  pageCount: () => 1,
})

const emit = defineEmits([
  'update:current-page',
  'update:page-size',
  'size-change',
  'current-change',
])

const ns = useNamespace('pagination-table')

const _cp = ref(1)
const _currentPage = computed({
  get: () => {
    if (props.dataAtOnce) {
      return _cp.value
    } else {
      return props.currentPage
    }
  },
  set: (val) => {
    emit('update:current-page', val)
  },
})

const _ps = ref(10)
const _pageSize = computed({
  get: () => {
    if (props.dataAtOnce) {
      return _ps.value
    } else {
      return props.pageSize
    }
  },
  set: (val) => {
    emit('update:page-size', val)
  },
})

const paginationTableRef = ref()
const tableRef = ref<InstanceType<typeof ElTable>>()
const tableContainerRef = ref()
const paginationRef = ref<InstanceType<typeof ElPagination>>()
const paginationContainerRef = ref()

const tableData = computed(() => {
  if (props.dataAtOnce) {
    return props.data?.slice(
      (_currentPage.value - 1) * _pageSize.value,
      (_currentPage.value - 1) * _pageSize.value + _pageSize.value
    )
  } else {
    return props.data
  }
})

const _total = computed(() => {
  if (props.dataAtOnce) {
    return props.data?.length
  } else {
    return props.total
  }
})

const _pageCount = computed(() => {
  return Math.ceil(_total.value / _pageSize.value)
})

const handleSizeChange = (val: number) => {
  if (props.dataAtOnce) {
    _ps.value = val
    _cp.value = 1
  } else {
    emit('size-change', val)
  }
}

const handleCurrentChange = (val: number) => {
  if (props.dataAtOnce) {
    _cp.value = val
  } else {
    emit('current-change', val)
  }
}

defineExpose({
  tableRef,
  paginationRef,
})
</script>

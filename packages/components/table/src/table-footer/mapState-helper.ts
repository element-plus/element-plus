import { computed, inject } from 'vue'
import { TABLE_INJECTION_KEY } from '../tokens'

function useMapState() {
  const table = inject(TABLE_INJECTION_KEY)
  const store = table?.store
  const leftFixedLeafCount = computed(() => {
    return store?.states.fixedLeafColumnsLength.value ?? 0
  })
  const rightFixedLeafCount = computed(() => {
    return store?.states.rightFixedColumns.value.length ?? 0
  })
  const columnsCount = computed(() => {
    return store?.states.columns.value.length ?? 0
  })
  const leftFixedCount = computed(() => {
    return store?.states.fixedColumns.value.length ?? 0
  })
  const rightFixedCount = computed(() => {
    return store?.states.rightFixedColumns.value.length ?? 0
  })

  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store?.states.columns ?? [],
  }
}

export default useMapState

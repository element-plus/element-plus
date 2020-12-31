import { reactive, ref, toRefs, computed, onUnmounted, nextTick, watch } from 'vue'
import { IPaginationProps, IPaginationHookCb } from './pagination'

export type UsePaginationState = Pick<IPaginationProps, 'total' | 'pageCount' | 'currentPage' | 'pageSize' | 'pageSizes' | 'disabled'>
                                  & Record<IPaginationHookCb, Array<() => void>>

// symbol index not work see: https://github.com/Microsoft/TypeScript/issues/1863
const globalState = {}

export const usePagination = (key?: string | symbol | null) => {
  let state: UsePaginationState = null
  const lastEmittedPage = ref(-1)
  const userChangePageSize = ref(false)

  const initState = () => {
    state = reactive<UsePaginationState>({
      total: null,
      pageSize: null,
      pageSizes: null,
      pageCount: null,
      currentPage: null,
      disabled: null,
      pageSizeCb: null,
      prevCb: null,
      nextCb: null,
    })
  }

  initState()

  // chach to global
  if (!key) key = Symbol('default')
  if (globalState.hasOwnProperty(key)) {
    state = globalState[key]
  } else {
    globalState[key] = state
  }

  onUnmounted(() => {
    if (globalState.hasOwnProperty(key)) {
      delete globalState[key]
    }
  })

  function getValidCurrentPage(value: number | string) {
    if (typeof value === 'string') {
      value = parseInt(value, 10)
    }
    let resetValue: number | undefined
    const havePageCount = typeof state.pageCount === 'number'

    if (!havePageCount) {
      if (isNaN(value) || value < 1) resetValue = 1
    } else {
      if (value < 1) {
        resetValue = 1
      } else if (value > state.pageCount) {
        resetValue = state.pageCount
      }
    }

    if (resetValue === undefined && isNaN(value)) {
      resetValue = 1
    } else if (resetValue === 0) {
      resetValue = 1
    }

    return resetValue === undefined ? value : resetValue
  }

  function emitChange() {
    nextTick(() => {
      if (
        state.currentPage !== lastEmittedPage.value ||
        userChangePageSize.value
      ) {
        lastEmittedPage.value = state.currentPage
        userChangePageSize.value = false
      }
    })
  }

  function execlCallBack(cbs: Array<() => void>) {
    if (!cbs.length) return
    cbs.forEach(cb => cb())
  }

  function handleCurrentChange(val: number) {
    state.currentPage = getValidCurrentPage(val)
    userChangePageSize.value = true
  }

  function handleSizesChange(val: number) {
    userChangePageSize.value = true
    state.pageSize = val
    // emit('update:pageSize', val)
    // emit('size-change', val)
    execlCallBack(state.pageSizeCb)
  }

  function prev() {
    if (state.disabled) return
    const newVal = state.currentPage - 1
    state.currentPage = getValidCurrentPage(newVal)
    // emit('prev-click', state.currentPage
    execlCallBack(state.prevCb)
    emitChange()
  }

  function next() {
    if (state.disabled) return
    const newVal = state.currentPage + 1
    state.currentPage = getValidCurrentPage(newVal)
    // emit('next-click', state.currentPage)
    execlCallBack(state.nextCb)
    emitChange()
  }

  const internalPageCount = computed<Nullable<number>>(() => {
    if (typeof state.total === 'number') {
      return Math.max(1, Math.ceil(state.total / state.pageSize))
    } else if (typeof state.pageCount === 'number') {
      return Math.max(1, state.pageCount)
    }
    return null
  })

  watch(internalPageCount, val => state.pageCount = val)

  return {
    ...toRefs(state),
    initState,
    key,
    prev,
    next,
    emitChange,
    lastEmittedPage,
    userChangePageSize,
    internalPageCount,
    changeEvent: handleCurrentChange,
    handleCurrentChange,
    handleSizesChange,
    getValidCurrentPage,
  }
}

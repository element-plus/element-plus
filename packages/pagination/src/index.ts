import {
  defineComponent,
  h,
  ref,
  computed,
  watchEffect,
  watch,
  nextTick,
  provide,
} from 'vue'
import { IPagination } from './pagination'

import Prev from './prev.vue'
import Next from './next.vue'
import Sizes from './sizes'
import Jumper from './jumper.vue'
import Total from './total.vue'
import Pager from './pager.vue'

export default defineComponent({
  name: 'ElPagination',

  components: {
    Prev,
    Next,
    Sizes,
    Jumper,
    Total,
    Pager,
  },
  props: {
    pageSize: {
      type: Number,
      default: 10,
    },

    small: Boolean,

    total: {
      type: Number,
      default: 1000,
    },

    pageCount: {
      type: Number,
      default: 50,
    },

    pagerCount: {
      type: Number,
      validator: (value: number) => {
        return (
          (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
        )
      },
      default: 7,
    },

    currentPage: {
      type: Number,
      default: 1,
    },

    layout: {
      type: String,
      default: 'prev, pager, next, jumper, ->, total',
    },

    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50, 100]
      },
    },

    popperClass: {
      type: String,
      default: '',
    },

    prevText: {
      type: String,
      default: '',
    },

    nextText: {
      type: String,
      default: '',
    },

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean,
  },

  emits: [
    'size-change', // pageSize 改变时会触发	每页条数
    'current-change', // currentPage 改变时会触发	当前页
    'prev-click', // 用户点击上一页按钮改变当前页后触发	当前页
    'next-click', // 用户点击下一页按钮改变当前页后触发	当前页
    'update:currentPage',
  ],
  setup(props, { emit }) {
    const internalCurrentPage = ref(1)
    const lastEmittedPage = ref(-1)
    const userChangePageSize = ref(false)

    const internalPageSize = ref(0)
    const internalPageCount = computed<Nullable<number>>(() => {
      if (typeof props.total === 'number') {
        return Math.max(1, Math.ceil(props.total / internalPageSize.value))
      } else if (typeof props.pageCount === 'number') {
        return Math.max(1, props.pageCount)
      }
      return null
    })

    watchEffect(() => {
      internalCurrentPage.value = getValidCurrentPage(props.currentPage)
    })
    watchEffect(() => {
      internalPageSize.value = isNaN(props.pageSize) ? 10 : props.pageSize
    })
    watchEffect(() => {
      emit('update:currentPage', internalCurrentPage.value)
      lastEmittedPage.value = -1
    })
    watch(() => internalPageCount.value,val => {
      const oldPage = internalCurrentPage.value
      if (val > 0 && oldPage === 0) {
        internalCurrentPage.value = 1
      } else if (oldPage > val) {
        internalCurrentPage.value = val === 0 ? 1 : val
        userChangePageSize.value && emitChange()
      }
      userChangePageSize.value = false
    })

    function emitChange() {
      nextTick(() => {
        if (internalCurrentPage.value !== lastEmittedPage.value || userChangePageSize) {
          emit('current-change', internalCurrentPage.value)
          lastEmittedPage.value = internalCurrentPage.value
          userChangePageSize.value = false
        }
      })
    }

    function handleCurrentChange(val: number) {
      internalCurrentPage.value = getValidCurrentPage(val)
      userChangePageSize.value = true
      emitChange()
    }

    function prev() {
      if (props.disabled) return
      const newVal = internalCurrentPage.value - 1
      internalCurrentPage.value = getValidCurrentPage(newVal)
      emit('prev-click', internalCurrentPage)
      emitChange()
    }

    function next() {
      if (props.disabled) return
      const newVal = internalCurrentPage.value + 1
      internalCurrentPage.value = getValidCurrentPage(newVal)
      emit('next-click', internalCurrentPage.value)
      emitChange()
    }

    function getValidCurrentPage(value: number | string) {
      if (typeof value === 'string') {
        value = parseInt(value, 10)
      }
      let resetValue: number | undefined
      const havePageCount = typeof internalPageCount.value === 'number'

      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1
      } else {
        if (value < 1) {
          resetValue = 1
        } else if (value > internalPageCount.value) {
          resetValue = internalPageCount.value
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1
      } else if (resetValue === 0) {
        resetValue = 1
      }

      return resetValue === undefined ? value : resetValue
    }

    provide<IPagination>('pagination', {
      pageCount: computed(() => props.pageCount),
      disabled: computed(() => props.disabled),
      currentPage: computed(() => internalCurrentPage.value),
      changeEvent: handleCurrentChange,
    })

    return {
      internalCurrentPage,
      internalPageSize,
      lastEmittedPage,
      userChangePageSize,
      internalPageCount,

      getValidCurrentPage,
      emitChange,
      handleCurrentChange,

      prev,
      next,
    }
  },
  render() {
    const layout = this.layout

    if (!layout) return null
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null

    const rootNode = h('div', { class: ['el-pagination', { 'is-background': this.background, 'el-pagination--small': this.small }] })
    const rootChilds = []
    const rightWrapperRoot = h('div', { class: 'el-pagination__rightwrapper' })
    const rightWrapperChilds = []
    const TEMPLATE_MAP = {
      prev: h(Prev, {
        disabled: this.disabled,
        currentPage: this.internalCurrentPage,
        prevText: this.prevText,
        onClick: this.prev,
      }),
      jumper: h(Jumper),
      pager: h(Pager, {
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        pagerCount: this.pagerCount,
        onChange: this.handleCurrentChange,
        disabled: this.disabled,
      }),
      next: h(Next, {
        disabled: this.disabled,
        currentPage: this.internalCurrentPage,
        pageCount: this.internalPageCount,
        nextText: this.nextText, onClick: this.next,
      }),
      sizes: h(Sizes, {
        pageSize: this.pageSize,
        pageSizes: this.pageSizes,
        popperClass: this.popperClass,
        disabled: this.disabled,
      }),
      slot: h('span', {}, this.$slots.default ? this.$slots.default() : ''),
      total: h(Total, { total: this.total }),
    }

    const components = layout.split(',').map((item: any) => item.trim())

    let haveRightWrapper = false

    components.forEach(compo => {
      if (compo === '->') {
        haveRightWrapper = true
        return
      }
      if (!haveRightWrapper) {
        rootChilds.push(TEMPLATE_MAP[compo])
      } else {
        rightWrapperChilds.push(TEMPLATE_MAP[compo])
      }
    })

    if (haveRightWrapper) {
      rootChilds.unshift(rightWrapperRoot)
    }

    return h(rootNode, {}, rootChilds)
  },

})

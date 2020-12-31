import {
  defineComponent,
  h,
  // ref,
  // computed,
  watch,
  // nextTick,
  provide,
} from 'vue'
// import { IPagination } from './pagination'

import Prev from './prev.vue'
import Next from './next.vue'
import Sizes from './sizes.vue'
import Jumper from './jumper.vue'
import Total from './total.vue'
import Pager from './pager.vue'
import { usePagination } from './usePagination'

const getValidPageSize = (val: number) => Number.isNaN(val) ? 10 : val

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
    },

    pageCount: {
      type: Number,
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

    keyValue: {
      type: String,
      default: '',
    },

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean,
  },

  emits: [
    'size-change',
    'current-change',
    'prev-click',
    'next-click',
    'update:currentPage',
    'update:pageSize',
  ],
  setup(props, { emit }) {
    const {
      key, pageSize, total, pageSizeCb, currentPage,
      next, nextCb, prev, prevCb,
      internalPageCount, userChangePageSize, emitChange,
      handleCurrentChange,
    } = usePagination(props.keyValue)

    provide<string|symbol>('pagination-key', key)

    pageSizeCb.value = [
      () => {
        emit('update:pageSize', pageSize.value)
        emit('size-change', pageSize.value)
      },
    ]

    nextCb.value = [
      () => {
        emit('next-click', currentPage.value)
      },
    ]

    prevCb.value = [
      () => {
        emit('prev-click', currentPage.value)
      },
    ]

    watch(() => props.currentPage, val => currentPage.value = val, { immediate: true })
    watch(() => props.pageSize, val => pageSize.value = getValidPageSize(val), { immediate: true })
    watch(() => props.total, val => total.value = val, { immediate: true })

    watch(currentPage, val => {
      emit('update:currentPage', val)
      emit('current-change', val)
    })

    watch(internalPageCount, val => {
      const oldPage = currentPage.value
      if (val > 0 && oldPage === 0) {
        currentPage.value = 1
      } else if (oldPage > val) {
        currentPage.value = val === 0 ? 1 : val
        userChangePageSize.value && emitChange()
      }
      userChangePageSize.value = false
    })

    return {
      internalCurrentPage: currentPage,
      internalPageSize: pageSize,
      internalPageCount,
      prev,
      next,
      handleCurrentChange,
      // internalCurrentPage,
      // internalPageSize,
      // lastEmittedPage,
      // userChangePageSize,
      // internalPageCount,

      // getValidCurrentPage,

      // emitChange,
      // handleCurrentChange,
    }
  },
  render() {
    const layout = this.layout

    if (!layout) return null
    if (
      this.hideOnSinglePage &&
      (!this.internalPageCount || this.internalPageCount === 1)
    )
      return null

    const rootNode = h('div', {
      class: [
        'el-pagination',
        {
          'is-background': this.background,
          'el-pagination--small': this.small,
        },
      ],
    })
    const rootChildren = []
    const rightWrapperRoot = h('div', { class: 'el-pagination__rightwrapper' })
    const rightWrapperChildren = []
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
        nextText: this.nextText,
        onClick: this.next,
      }),
      sizes: h(Sizes, {
        pageSize: this.pageSize,
        pageSizes: this.pageSizes,
        popperClass: this.popperClass,
        disabled: this.disabled,
      }),
      slot: this.$slots?.default?.() ?? null,
      total: h(Total, { total: this.total }),
    }

    const components = layout.split(',').map((item: string) => item.trim())

    let haveRightWrapper = false

    components.forEach((c: keyof typeof TEMPLATE_MAP | '->') => {
      if (c === '->') {
        haveRightWrapper = true
        return
      }
      if (!haveRightWrapper) {
        rootChildren.push(TEMPLATE_MAP[c])
      } else {
        rightWrapperChildren.push(TEMPLATE_MAP[c])
      }
    })

    if (haveRightWrapper) {
      rootChildren.unshift(rightWrapperRoot)
    }

    return h(rootNode, {}, rootChildren)
  },
})

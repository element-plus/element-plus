import {
  defineComponent,
  h,
  ref,
  computed,
  watch,
  provide,
} from 'vue'
import { IPagination } from './pagination'

import Prev from './prev.vue'
import Next from './next.vue'
import Sizes from './sizes.vue'
import Jumper from './jumper.vue'
import Total from './total.vue'
import Pager from './pager.vue'

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
    const lastEmittedPage = ref(-1)
    const userChangePageSize = ref(false)
    const internalPageSize = ref(getValidPageSize(props.pageSize))

    const internalPageCount = computed<Nullable<number>>(() => {
      if (typeof props.total === 'number') {
        return Math.max(1, Math.ceil(props.total / internalPageSize.value))
      } else if (typeof props.pageCount === 'number') {
        return Math.max(1, props.pageCount)
      }
      return null
    })

    const internalCurrentPage = ref(getValidCurrentPage(props.currentPage))

    function emitChange() {
      if (
        internalCurrentPage.value !== lastEmittedPage.value ||
        userChangePageSize.value
      ) {
        lastEmittedPage.value = internalCurrentPage.value
        userChangePageSize.value = false
        emit('update:currentPage', internalCurrentPage.value)
        emit('current-change', internalCurrentPage.value)
      }
    }

    function handleCurrentChange(val: number) {
      internalCurrentPage.value = getValidCurrentPage(val)
      userChangePageSize.value = true
      emitChange()
    }

    function handleSizesChange(val: number) {
      userChangePageSize.value = true
      internalPageSize.value = val
      emit('update:pageSize', val)
      emit('size-change', val)
    }

    function prev() {
      if (props.disabled) return
      const newVal = internalCurrentPage.value - 1
      internalCurrentPage.value = getValidCurrentPage(newVal)
      emit('prev-click', internalCurrentPage.value)
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

      if (isNaN(value) || value < 1) {
        resetValue = 1
      } else if (internalPageCount.value < value){
        resetValue = internalPageCount.value
      }

      return resetValue ?? value
    }

    watch(() => props.currentPage, val => {
      internalCurrentPage.value = getValidCurrentPage(val)
    })

    watch(() => props.pageSize, val => {
      internalPageSize.value = getValidPageSize(val)
    })

    watch(
      () => internalPageCount.value,
      val => {
        const oldPage = internalCurrentPage.value
        if (val > 0 && oldPage === 0) {
          internalCurrentPage.value = 1
        } else if (oldPage > val) {
          internalCurrentPage.value = val === 0 ? 1 : val
          emitChange()
        }
      },
    )

    provide<IPagination>('pagination', {
      pageCount: computed(() => props.pageCount),
      disabled: computed(() => props.disabled),
      currentPage: computed(() => internalCurrentPage.value),
      changeEvent: handleCurrentChange,
      handleSizesChange,
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
    if (this.hideOnSinglePage && this.internalPageCount <= 1) return null

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
    const rightWrapperChildren = []
    const rightWrapperRoot = h('div', { class: 'el-pagination__rightwrapper' }, rightWrapperChildren)
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

    if (haveRightWrapper && rightWrapperChildren.length > 0) {
      rootChildren.unshift(rightWrapperRoot)
    }

    return h(rootNode, {}, rootChildren)
  },
})

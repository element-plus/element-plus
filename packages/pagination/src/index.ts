import { defineComponent, h } from 'vue'

import Prev from './prev'
import Next from './next'
import Sizes from './sizes'
import Jumper from './jumper'
import Total from './total'
import Pager from './pager'

interface IPaginationProps {
  pageSize: number
  small: boolean
  total: number
  pageCount: number
  pagerCount: number
  currentPage: number
  layout: Record<string, string | undefined>
  pageSizes: Array<number>
  popperClass: string
  prevText: string
  nextText: string
  background: boolean
  disabled: boolean
  hideOnSinglePage: boolean
}

interface IPaginationSetups {
  currentPage: number
  pageCount: number
  pagerCount: number
  disabled: boolean
  pageSizes: Array<number>
}

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
      validator(value: number) {
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

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      lastEmittedPage: -1,
      userChangePageSize: false,
    }
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.max(1, Math.ceil(this.total / this.internalPageSize))
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount)
      }
      return null
    },
  },

  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val)
      },
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val
      },
    },

    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit('update:currentPage', newVal)
        this.lastEmittedPage = -1
      },
    },

    internalPageCount(newVal) {
      /* istanbul ignore if */
      const oldPage = this.internalCurrentPage
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal
        this.userChangePageSize && this.emitChange()
      }
      this.userChangePageSize = false
    },
  },

  methods: {
    handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val)
      this.userChangePageSize = true
      this.emitChange()
    },

    prev() {
      if (this.disabled) return
      const newVal = this.internalCurrentPage - 1
      this.internalCurrentPage = this.getValidCurrentPage(newVal)
      this.$emit('prev-click', this.internalCurrentPage)
      this.emitChange()
    },

    next() {
      if (this.disabled) return
      const newVal = this.internalCurrentPage + 1
      this.internalCurrentPage = this.getValidCurrentPage(newVal)
      this.$emit('next-click', this.internalCurrentPage)
      this.emitChange()
    },

    getValidCurrentPage(value) {
      value = parseInt(value, 10)
      const havePageCount = typeof this.internalPageCount === 'number'
      let resetValue
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1
      } else {
        if (value < 1) {
          resetValue = 1
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1
      } else if (resetValue === 0) {
        resetValue = 1
      }

      return resetValue === undefined ? value : resetValue
    },

    emitChange() {
      this.$nextTick(() => {
        if (this.internalCurrentPage !== this.lastEmittedPage || this.userChangePageSize) {
          this.$emit('current-change', this.internalCurrentPage)
          this.lastEmittedPage = this.internalCurrentPage
          this.userChangePageSize = false
        }
      })
    },
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
      prev: h(Prev, { disabled: this.disabled, currentPage: this.internalCurrentPage, prevText: this.prevText, onClick: this.prev }),
      jumper: h(Jumper),
      pager: h(Pager, { currentPage: this.internalCurrentPage, pageCount: this.internalPageCount, pagerCount: this.pagerCount, onChange: this.handleCurrentChange, disabled: this.disabled }),//'<pager currentPage={ this.internalCurrentPage } pageCount={ this.internalPageCount } pagerCount={ this.pagerCount } on-change={ this.handleCurrentChange } disabled={ this.disabled }></pager>',
      next: h(Next, { disabled: this.disabled, currentPage: this.internalCurrentPage, pageCount: this.internalPageCount, nextText: this.nextText, onClick: this.next }),
      sizes: h(Sizes, { pageSize: this.pageSize, pageSizes: this.pageSizes, popperClass: this.popperClass, disabled: this.disabled }),
      slot: h('span', {}, this.$slots.default ? this.$slots.default : ''),
      total: h(Total, { total: this.total }),
    }

    const components = layout.split(',').map((item) => item.trim())

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

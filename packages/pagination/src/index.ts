import {
  h,
  ref,
  provide,
  computed,
  defineComponent,
  getCurrentInstance,
} from 'vue'
import { warn } from '@element-plus/utils/error'
import { useLocaleInject } from '@element-plus/hooks'
import { IPagination } from './pagination'

import Prev from './prev.vue'
import Next from './next.vue'
import Sizes from './sizes.vue'
import Jumper from './jumper.vue'
import Total from './total.vue'
import Pager from './pager.vue'

/**
 * It it user's responsibility to guarantee that the value of props.total... is number
 * (same as pageSize, defaultPageSize, currentPage, defaultCurrentPage, pageCount)
 * Otherwise we can reasonable infer that the corresponding field is absent
 */
const isAbsent = v => typeof v !== 'number'

const componentName = 'ElPagination'

export default defineComponent({
  name: componentName,

  components: {
    Prev,
    Next,
    Sizes,
    Jumper,
    Total,
    Pager,
  },
  props: {
    total: {
      type: Number,
    },

    pageSize: {
      type: Number,
    },

    defaultPageSize: {
      type: Number,
    },

    currentPage: {
      type: Number,
    },

    defaultCurrentPage: {
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

    small: Boolean,

    background: Boolean,

    disabled: Boolean,

    hideOnSinglePage: Boolean,
  },

  emits: [
    'update:current-page',
    'update:page-size',
    // events below are depracated
    // v-model:current-page and v-model:page-size are better choices
    'size-change',
    'current-change',
    'prev-click',
    'next-click',
  ],
  setup(props, { emit, slots }) {
    const { t } = useLocaleInject()
    const vnodeProps = getCurrentInstance().vnode.props || {}
    // we can find @xxx="xxx" props on `vnodeProps` to check if user bind corresponding events
    const hasCurrentPageListener = 'onUpdate:currentPage' in vnodeProps || 'onUpdate:current-page' in vnodeProps || 'onCurrentChange' in vnodeProps
    const hasPageSizeListener = 'onUpdate:pageSize' in vnodeProps || 'onUpdate:page-size' in vnodeProps || 'onSizeChange' in vnodeProps
    const assertValidUsage = computed(() => {
      // Users have to set either one, otherwise count of pages cannot be determined
      if (isAbsent(props.total) && isAbsent(props.pageCount)) return false
      // <el-pagination ...otherProps :current-page="xxx" /> without corresponding listener is forbidden now
      // Users have to use two way binding of `currentPage`
      // If users just want to provide a default value, `defaultCurrentPage` is here for you
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener) return false
      // When you want to change sizes, things get more complex, detailed below
      // Basically the most important value we need is page count
      // either directly from props.pageCount
      // or calculated from props.total
      // we will take props.pageCount precedence over props.total
      if (props.layout.includes('sizes')) {
        if (!isAbsent(props.pageCount)) {
          // if props.pageCount is assign by user, then user have to watch pageSize change
          // and recalculate pageCount
          if (!hasPageSizeListener) return false
        } else if (!isAbsent(props.total)) {
          // Otherwise, we will see if user have props.pageSize defined
          // If so, meaning user want to have pageSize controlled himself/herself from component
          // Thus page size listener is required
          // users are account for page size change
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false
            }
          } else {
            // (else block just for explaination)
            // else page size is controlled by el-pagination internally
          }
        }
      }
      return true
    })

    const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize)
    const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage)

    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize
      },
      set(v: number) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v
        }
        if (hasPageSizeListener) {
          emit('update:page-size', v)
          emit('size-change', v)
        }
      },
    })

    const pageCountBridge = computed<number>(() => {
      let pageCount = 0
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value))
      }
      // side effect
      if (currentPageBridge.value > pageCount) {
        currentPageBridge.value = pageCount
      }
      return pageCount
    })

    const currentPageBridge = computed<number>({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage
      },
      set(v) {
        let newCurrentPage = v
        if (v < 1) {
          newCurrentPage = 1
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage
        }
        if (hasCurrentPageListener) {
          emit('update:current-page', newCurrentPage)
          emit('current-change', newCurrentPage)
        }
      },
    })

    function handleCurrentChange(val: number) {
      currentPageBridge.value = val
    }

    function handleSizeChange(val: number) {
      pageSizeBridge.value = val
      const newPageCount = pageCountBridge.value
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount
      }
    }

    function prev() {
      if (props.disabled) return
      currentPageBridge.value -= 1
      emit('prev-click', currentPageBridge.value)
    }

    function next() {
      if (props.disabled) return
      currentPageBridge.value += 1
      emit('next-click', currentPageBridge.value)
    }

    provide<IPagination>('pagination', {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange,
    })

    return () => {
      if (!assertValidUsage.value) {
        warn(componentName, t('el.pagination.deprecationWarning'))
        return null
      }
      if (!props.layout) return null
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null
      const rootChildren = []
      const rightWrapperChildren = []
      const rightWrapperRoot = h('div', { class: 'el-pagination__rightwrapper' }, rightWrapperChildren)
      const TEMPLATE_MAP = {
        prev: h(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          onClick: prev,
        }),
        jumper: h(Jumper),
        pager: h(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled,
        }),
        next: h(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          onClick: next,
        }),
        sizes: h(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          disabled: props.disabled,
        }),
        slot: slots?.default?.() ?? null,
        total: h(Total, { total: isAbsent(props.total) ? 0 : props.total }),
      }

      const components = props.layout.split(',').map((item: string) => item.trim())

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

      return h('div', {
        role: 'pagination',
        'aria-label': 'pagination',
        class: [
          'el-pagination',
          {
            'is-background': props.background,
            'el-pagination--small': props.small,
          },
        ],
      }, rootChildren)
    }
  },
})

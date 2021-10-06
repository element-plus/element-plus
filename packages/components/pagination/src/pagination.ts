import {
  h,
  ref,
  provide,
  computed,
  defineComponent,
  getCurrentInstance,
  watch,
} from 'vue'
import { useLocaleInject } from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils/error'
import { buildProp, definePropType, mutable } from '@element-plus/utils/props'
import { elPaginationKey } from '@element-plus/tokens'

import Prev from './components/prev.vue'
import Next from './components/next.vue'
import Sizes from './components/sizes.vue'
import Jumper from './components/jumper.vue'
import Total from './components/total.vue'
import Pager from './components/pager.vue'

import type { VNode, ExtractPropTypes } from 'vue'

/**
 * It it user's responsibility to guarantee that the value of props.total... is number
 * (same as pageSize, defaultPageSize, currentPage, defaultCurrentPage, pageCount)
 * Otherwise we can reasonable infer that the corresponding field is absent
 */
const isAbsent = (v: unknown): v is undefined => typeof v !== 'number'

type LayoutKey =
  | 'prev'
  | 'pager'
  | 'next'
  | 'jumper'
  | '->'
  | 'total'
  | 'sizes'
  | 'slot'

export const paginationProps = {
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (value: unknown) => {
      return (
        typeof value === 'number' &&
        (value | 0) === value &&
        value > 4 &&
        value < 22 &&
        value % 2 === 1
      )
    },
    default: 7,
  },
  layout: {
    type: String,
    default: (
      ['prev', 'pager', 'next', 'jumper', '->', 'total'] as LayoutKey[]
    ).join(', '),
  },
  pageSizes: buildProp({
    type: definePropType<number[]>(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100] as const),
  }),
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
} as const
export type PaginationProps = ExtractPropTypes<typeof paginationProps>

export const paginationEmits = {
  'update:current-page': (val: number) => typeof val === 'number',
  'update:page-size': (val: number) => typeof val === 'number',
  'size-change': (val: number) => typeof val === 'number',
  'current-change': (val: number) => typeof val === 'number',
  'prev-click': (val: number) => typeof val === 'number',
  'next-click': (val: number) => typeof val === 'number',
}
export type PaginationEmits = typeof paginationEmits

const componentName = 'ElPagination'
export default defineComponent({
  name: componentName,

  props: paginationProps,
  emits: paginationEmits,

  setup(props, { emit, slots }) {
    const { t } = useLocaleInject()
    const vnodeProps = getCurrentInstance()!.vnode.props || {}
    // we can find @xxx="xxx" props on `vnodeProps` to check if user bind corresponding events
    const hasCurrentPageListener =
      'onUpdate:currentPage' in vnodeProps ||
      'onUpdate:current-page' in vnodeProps ||
      'onCurrentChange' in vnodeProps
    const hasPageSizeListener =
      'onUpdate:pageSize' in vnodeProps ||
      'onUpdate:page-size' in vnodeProps ||
      'onSizeChange' in vnodeProps
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

    const innerPageSize = ref(
      isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize
    )
    const innerCurrentPage = ref(
      isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage
    )

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
      return pageCount
    })

    const currentPageBridge = computed<number>({
      get() {
        return isAbsent(props.currentPage)
          ? innerCurrentPage.value
          : props.currentPage
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

    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val) currentPageBridge.value = val
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

    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange,
    })

    return () => {
      if (!assertValidUsage.value) {
        debugWarn(componentName, t('el.pagination.deprecationWarning'))
        return null
      }
      if (!props.layout) return null
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return null
      const rootChildren: Array<VNode | VNode[] | null> = []
      const rightWrapperChildren: Array<VNode | VNode[] | null> = []
      const rightWrapperRoot = h(
        'div',
        { class: 'el-pagination__rightwrapper' },
        rightWrapperChildren
      )
      const TEMPLATE_MAP: Record<
        Exclude<LayoutKey, '->'>,
        VNode | VNode[] | null
      > = {
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

      const components = props.layout
        .split(',')
        .map((item: string) => item.trim()) as LayoutKey[]

      let haveRightWrapper = false

      components.forEach((c) => {
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

      return h(
        'div',
        {
          role: 'pagination',
          'aria-label': 'pagination',
          class: [
            'el-pagination',
            {
              'is-background': props.background,
              'el-pagination--small': props.small,
            },
          ],
        },
        rootChildren
      )
    }
  },
})

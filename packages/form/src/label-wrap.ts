import {
  defineComponent,
  h,
  inject,
  ref,
  watch,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  nextTick,
  Fragment,
  cloneVNode,
  createCommentVNode,
} from 'vue'

import {
  elFormKey, elFormItemKey,
} from './token'
import {
  addResizeListener,
  removeResizeListener,
  ResizableElement,
} from '@element-plus/utils/resize-event'

import {
  getFirstValidNode,
} from '@element-plus/utils/vnode'

export default defineComponent({
  name: 'ElLabelWrap',
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },
  setup(props, { slots }) {
    const el = ref<Nullable<HTMLElement>>(null)
    const elForm = inject(elFormKey)
    const elFormItem = inject(elFormItemKey)

    const computedWidth = ref(0)
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        elForm.registerLabelWidth(val, oldVal)
      }
      elFormItem.updateComputedLabelWidth(val)
    })

    const getLabelWidth = () => {
      const element = el.value?.firstElementChild || el.value
      const width = (element && window.getComputedStyle(element).width) || '0'
      return Math.ceil(parseFloat(width))
    }
    const updateLabelWidth = (action = 'update') => {
      nextTick(() => {
        if (slots.default) {
          if (action === 'update') {
            computedWidth.value = getLabelWidth()
          } else if (action === 'remove') {
            elForm.deregisterLabelWidth(computedWidth.value)
          }
        }
      })
    }
    const updateLabelWidthFn = () => updateLabelWidth('update')

    onMounted(() => {
      addResizeListener(el.value.firstElementChild as ResizableElement, updateLabelWidthFn)
      updateLabelWidthFn()
    })

    onUpdated(updateLabelWidthFn)

    onBeforeUnmount(() => {
      updateLabelWidth('remove')
      removeResizeListener(el.value.firstElementChild as ResizableElement, updateLabelWidthFn)
    })

    function render() {
      if (!slots) return null
      if (props.isAutoWidth) {
        const autoLabelWidth = elForm.autoLabelWidth
        const style = {} as CSSStyleDeclaration
        if (
          autoLabelWidth &&
          autoLabelWidth !== '0' &&
          autoLabelWidth !== 'auto'
        ) {
          const marginLeft = parseInt(autoLabelWidth, 10) - computedWidth.value
          if (marginLeft && elForm.labelPosition !== 'left') {
            style.marginLeft = marginLeft + 'px'
          }
        }
        return h(
          'div',
          {
            ref: el,
            class: ['el-form-item__label-wrap'],
            style,
          },
          slots.default?.(),
        )
      } else {
        const firstVNode = getFirstValidNode(slots?.default(), 1) // type label VNode
        const defaultVNode = cloneVNode(firstVNode || createCommentVNode('error'), { ref: el }, true) // createCommentVNode('error'): avoid ts report errors
        return h(Fragment, null, [ defaultVNode ])
      }
    }
    return render
  },
})

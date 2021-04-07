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
      if (element?.nodeType === 1) {
        const width = (element && window.getComputedStyle(element).width) || '0'
        return Math.ceil(parseFloat(width))
      } else {
        return 0
      }
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
      const defaultSlots = slots.default?.()
      if (props.isAutoWidth) {
        const autoLabelWidth = elForm.autoLabelWidth
        const style = {} as CSSStyleDeclaration
        if (
          autoLabelWidth &&
          autoLabelWidth !== '0' &&
          autoLabelWidth !== 'auto'
        ) {
          const marginLeft = parseInt(autoLabelWidth, 10) - computedWidth.value
          if (
            marginLeft &&
            elForm.labelPosition !== 'left' &&
            (elFormItem as any).labelWidth !== 'auto'
          ) {
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
          defaultSlots,
        )
      } else {
        const firstVNode = getFirstValidNode(defaultSlots, 1)
        return firstVNode
          ? h(Fragment, null, [ cloneVNode(firstVNode, { ref: el }, true) ])
          : h(Fragment, { ref: el }, defaultSlots)
      }
    }
    return render
  },
})

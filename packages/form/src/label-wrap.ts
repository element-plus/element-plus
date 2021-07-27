import { defineComponent, Fragment, h, inject, nextTick, onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue'

import { elFormItemKey, elFormKey } from './token'
import { addResizeListener, removeResizeListener, ResizableElement } from '@element-plus/utils/resize-event'

import type { CSSProperties } from 'vue'

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
        elFormItem.updateComputedLabelWidth(val)
      }
    })

    const getLabelWidth = () => {
      if (el.value?.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild)
          .width
        return Math.ceil(parseFloat(width))
      } else {
        return 0
      }
    }
    const updateLabelWidth = (action = 'update') => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
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
        const style = {} as CSSProperties
        if (autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginWidth = parseInt(autoLabelWidth, 10) - computedWidth.value
          const marginPositon = elForm.labelPosition === 'left' ? 'marginRight' : 'marginLeft'
          if (marginWidth) {
            style[marginPositon] = marginWidth + 'px'
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
        return h(Fragment, { ref: el }, slots.default?.())
      }
    }

    return render
  },
})

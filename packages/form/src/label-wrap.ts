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
} from 'vue'

import {
  elFormKey, elFormItemKey,
} from './token'

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

    onMounted(() => updateLabelWidth('update'))

    onUpdated(() => updateLabelWidth('update'))

    onBeforeUnmount(() => updateLabelWidth('remove'))

    function render() {
      if (!slots) return null
      if (props.isAutoWidth) {
        const autoLabelWidth = elForm.autoLabelWidth
        const style = {} as CSSStyleDeclaration
        if (autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginLeft = parseInt(autoLabelWidth, 10) - computedWidth.value
          if (marginLeft) {
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
        return h('div', { ref: el }, slots.default?.())
      }
    }
    return render
  },
})

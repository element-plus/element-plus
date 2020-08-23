<script lang="ts">
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

export default defineComponent({
  name: 'ElLabelWrap',
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },
  setup(props, { slots }) {
    const el = ref(null)
    const elForm = inject('elForm', {} as any)
    const elFormItem = inject('elFormItem', {} as any)

    const computedWidth = ref(0)
    watch(computedWidth, (val: any, oldVal: any) => {
      if (props.updateAll) {
        elForm.registerLabelWidth(val, oldVal)
        elFormItem.updateComputedLabelWidth(val)
      }
    })

    const getLabelWidth = () => {
      if (el.value && el.value.firstElementChild) {
        const computedWidth = window.getComputedStyle(el.value.firstElementChild)
          .width
        return Math.ceil(parseFloat(computedWidth))
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

    // const slotsDefault = slots.default
    if (!slots) return null
    if (props.isAutoWidth) {
      const autoLabelWidth = elForm.autoLabelWidth
      const style = {} as any
      if (autoLabelWidth && autoLabelWidth !== 'auto') {
        const marginLeft = parseInt(autoLabelWidth.value, 10) - computedWidth.value
        if (marginLeft) {
          style.marginLeft = marginLeft + 'px'
        }
      }
      return () =>
        h(
          'div',
          {
            ref: el,
            class: ['el-form-item__label-wrap'],
            style: style,
          },
          slots.default?.(),
        )
    } else {
      return () => h('div', { ref: el }, slots.default?.())
    }
  },
})
</script>

import {
  computed,
  defineComponent,
  Fragment,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { throwError } from '@element-plus/utils'
import { formItemContextKey, formContextKey } from '@element-plus/tokens'
import { useNamespace } from '@element-plus/hooks'

import type { CSSProperties } from 'vue'

const COMPONENT_NAME = 'ElLabelWrap'
export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },

  setup(props, { slots }) {
    const formContext = inject(formContextKey)
    if (!formContext) throwError(COMPONENT_NAME, 'can not inject form context.')

    const formItemContext = inject(formItemContextKey)
    if (!formItemContext)
      throwError(COMPONENT_NAME, 'can not inject form-item context.')

    const ns = useNamespace('form')

    const el = ref<HTMLElement>()
    const computedWidth = ref(0)

    const getLabelWidth = () => {
      if (el.value?.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width
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
            formContext.deregisterLabelWidth(computedWidth.value)
          }
        }
      })
    }
    const updateLabelWidthFn = () => updateLabelWidth('update')

    onMounted(() => {
      updateLabelWidthFn()
    })
    onBeforeUnmount(() => {
      updateLabelWidth('remove')
    })
    onUpdated(() => updateLabelWidthFn())

    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        formContext.registerLabelWidth(val, oldVal)
        formItemContext.updateComputedLabelWidth(val)
      }
    })

    useResizeObserver(
      computed(
        () => (el.value?.firstElementChild ?? null) as HTMLElement | null
      ),
      updateLabelWidthFn
    )

    return () => {
      if (!slots) return null

      const { isAutoWidth } = props
      if (isAutoWidth) {
        const autoLabelWidth = formContext.autoLabelWidth
        const style: CSSProperties = {}
        if (autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginWidth = Math.max(
            0,
            parseInt(autoLabelWidth, 10) - computedWidth.value
          )
          const marginPosition =
            formContext.labelPosition === 'left' ? 'marginRight' : 'marginLeft'
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`
          }
        }
        return (
          <div ref={el} class={[ns.be('item', 'label-wrap')]} style={style}>
            {slots.default?.()}
          </div>
        )
      } else {
        return <Fragment ref={el}>{slots.default?.()}</Fragment>
      }
    }
  },
})

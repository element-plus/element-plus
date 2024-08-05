import { defineComponent, inject, watch } from 'vue'
import { selectKey } from '@element-plus/components/select'
import { isClient } from '@element-plus/utils'
import type { SelectContext } from '@element-plus/components/select'
import type { PropType } from 'vue'

// same as el-option instance,
// these are required for `cachedOptions`
export type CacheOption = {
  value: string | number | boolean | object
  currentLabel: string | number
  isDisabled: boolean
}

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<CacheOption[]>,
      default: () => [],
    },
  },
  setup(props) {
    const select = inject(selectKey) as NonNullable<SelectContext>

    watch(
      () => props.data,
      () => {
        props.data.forEach((item) => {
          if (!select.states.cachedOptions.has(item.value)) {
            select.states.cachedOptions.set(item.value, item)
          }
        })

        // fork from packages/select/src/useSelect.ts#330
        const inputs = select.selectRef?.querySelectorAll('input') || []
        if (
          isClient &&
          !Array.from(inputs).includes(
            document.activeElement as HTMLInputElement
          )
        ) {
          select.setSelected()
        }
      },
      { flush: 'post', immediate: true }
    )

    return () => undefined
  },
})

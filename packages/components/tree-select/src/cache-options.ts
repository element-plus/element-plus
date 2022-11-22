import { defineComponent, inject } from 'vue'
import { selectKey } from '@element-plus/components/select'
import type { SelectContext } from '@element-plus/components/select'
import type { PropType } from 'vue'

export type CacheOption = {
  value: any
  currentLabel: any
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

    props.data.forEach((item) => select.cachedOptions.set(item.value, item))

    return () => undefined
  },
})

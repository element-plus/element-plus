import { defineComponent, h, computed } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { Bottom } from '@element-plus/icons'
import { prefix, sortOrder } from '../constants'
import type { CSSProperties, PropType } from 'vue'

export default defineComponent({
  name: 'TableV2Sorter',
  props: {
    order: {
      type: String as PropType<keyof typeof sortOrder>,
      default: sortOrder.ASC,
    },
  },
  setup(props, { attrs }) {
    const style = computed<CSSProperties>(() => {
      return {
        transform: `rotate(${props.order === sortOrder.ASC ? -90 : 0}deg)`,
      }
    })
    return h(
      ElIcon,
      {
        style: style.value,
        class: `${prefix}__sort-icon`,
        ...attrs,
      },
      {
        default: () => Bottom,
      }
    )
  },
})

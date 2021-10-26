import { defineComponent, h } from 'vue'
import ElIcon from '@element-plus/components/icon'
import { SortUp, SortDown } from '@element-plus/icons'
import { prefix, sortOrder } from '../constants'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'TableV2Sorter',
  props: {
    order: {
      type: String as PropType<keyof typeof sortOrder>,
      default: sortOrder.ASC,
    },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        'span',
        {
          class: `${prefix}__sort-icon`,
          ...attrs,
        },
        [
          h(
            ElIcon,
            {
              class: {
                'is-active': props.order === sortOrder.ASC,
              },
            },
            [h(SortUp)]
          ),
          h(
            ElIcon,
            {
              class: {
                'is-active': props.order === sortOrder.DESC,
              },
            },
            [h(SortDown)]
          ),
        ]
      )
  },
})

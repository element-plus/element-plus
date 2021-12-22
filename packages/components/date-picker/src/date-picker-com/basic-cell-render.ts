import { h, defineComponent, inject } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { ROOT_PICKER_INJECTION_KEY } from '../date-picker.type'
import type { DateCell } from '../date-picker.type'

export default defineComponent({
  name: 'ElDatePickerCell',
  props: buildProps({
    cell: {
      type: definePropType<DateCell>(Object),
    },
  }),
  setup(props) {
    const picker = inject(ROOT_PICKER_INJECTION_KEY)
    return () => {
      const cell = props.cell
      if (picker?.ctx.slots.default) {
        const list = picker.ctx.slots.default(cell).filter((item) => {
          return item.type.toString() !== 'Symbol(Comment)'
        })
        if (list.length) {
          return list
        }
      }
      return h(
        'div',
        {
          class: 'el-date-table-cell',
        },
        [
          h(
            'span',
            {
              class: 'el-date-table-cell__text',
            },
            [cell?.text]
          ),
        ]
      )
    }
  },
})

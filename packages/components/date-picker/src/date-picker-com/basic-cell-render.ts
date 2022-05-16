import { defineComponent, h, inject } from 'vue'
import { buildProps, definePropType } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
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
    const ns = useNamespace('date-table-cell')
    const picker = inject(ROOT_PICKER_INJECTION_KEY)
    return () => {
      const cell = props.cell
      if (picker?.ctx.slots.default) {
        const list = picker.ctx.slots.default(cell).filter((item) => {
          return (
            item.patchFlag !== -2 && item.type.toString() !== 'Symbol(Comment)'
          )
        })
        if (list.length) {
          return list
        }
      }
      return h(
        'div',
        {
          class: ns.b(),
        },
        [
          h(
            'span',
            {
              class: ns.e('text'),
            },
            [cell?.text]
          ),
        ]
      )
    }
  },
})

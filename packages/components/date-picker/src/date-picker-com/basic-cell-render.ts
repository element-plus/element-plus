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
      return picker?.ctx.slots.default
        ? picker.ctx.slots.default(cell)
        : h(
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

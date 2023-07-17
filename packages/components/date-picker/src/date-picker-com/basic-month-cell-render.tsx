import { defineComponent, inject } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { ROOT_PICKER_INJECTION_KEY } from '../constants'
import { basicCellProps } from '../props/basic-month-cell'

export default defineComponent({
  name: 'ElMonthPickerCell',
  props: basicCellProps,
  setup(props) {
    const { slots } = inject(ROOT_PICKER_INJECTION_KEY)!
    return () => {
      const { cell } = props
      if (slots.default) {
        const list = slots.default(cell).filter((item) => {
          return (
            item.patchFlag !== -2 && item.type.toString() !== 'Symbol(Comment)'
          )
        })
        if (list.length) {
          return list
        }
      }

      return (
        <div>
          <span class="cell">{cell?.text}</span>
        </div>
      )
    }
  },
})

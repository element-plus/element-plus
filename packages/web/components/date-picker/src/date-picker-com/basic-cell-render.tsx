import { defineComponent, inject } from 'vue'
import { ROOT_PICKER_INJECTION_KEY } from '@element-plus/tokens'
import { useNamespace } from '@element-plus/hooks'
import { basicCellProps } from '../props/basic-cell'

export default defineComponent({
  name: 'ElDatePickerCell',
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace('date-table-cell')
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
        <div class={ns.b()}>
          <span class={ns.e('text')}>{cell?.text}</span>
        </div>
      )
    }
  },
})

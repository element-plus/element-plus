import type { PropType } from 'vue'
import type { Store } from '../store'
import type {
  ColumnCls,
  ColumnStyle,
  DefaultRow,
  Table,
} from '../table/defaults'
import type { TableOverflowTooltipOptions } from '../util'

interface TableBodyProps<T extends DefaultRow> {
  store: Store<T>
  stripe?: boolean
  context: Table<T>
  rowClassName: ColumnCls<T>
  rowStyle: ColumnStyle<T>
  fixed: string
  highlight: boolean
  tooltipEffect?: string
  tooltipOptions?: TableOverflowTooltipOptions
}

const defaultProps = {
  store: {
    required: true,
    type: Object as PropType<TableBodyProps<any>['store']>,
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object as PropType<TableBodyProps<any>['tooltipOptions']>,
  },
  context: {
    default: () => ({}),
    type: Object as PropType<TableBodyProps<any>['context']>,
  },
  rowClassName: [String, Function] as PropType<
    TableBodyProps<any>['rowClassName']
  >,
  rowStyle: [Object, Function] as PropType<TableBodyProps<any>['rowStyle']>,
  fixed: {
    type: String,
    default: '',
  },
  highlight: Boolean,
}

export { TableBodyProps }
export default defaultProps

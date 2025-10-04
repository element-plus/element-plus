import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { Store } from '../store'
import type {
  ColumnCls,
  ColumnStyle,
  DefaultRow,
  Table,
} from '../table/defaults'
import type { TableOverflowTooltipOptions } from '../util'

//interface TableBodyProps<T extends DefaultRow> {
//  store: Store<T>
//  stripe?: boolean
//  context: Table<T>
//  rowClassName: ColumnCls<T>
//  rowStyle: ColumnStyle<T>
//  fixed: string
//  highlight: boolean
//  tooltipEffect?: string
//  tooltipOptions?: TableOverflowTooltipOptions
//}

const defaultProps = <T extends DefaultRow>() => ({
  store: {
    required: true,
    type: Object as PropType<Store<T>>,
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object as PropType<TableOverflowTooltipOptions>,
  },
  context: {
    default: () => ({}),
    type: Object as PropType<Table<T>>,
  },
  rowClassName: [String, Function] as PropType<
    ColumnCls<T>
  >,
  rowStyle: [Object, Function] as PropType<ColumnStyle<T>>,
  fixed: {
    type: String,
    default: '',
  },
  highlight: Boolean,
})

type TableBodyProps<T extends DefaultRow> = ExtractPublicPropTypes<ReturnType<typeof defaultProps<T>>>

export type { TableBodyProps }
export default defaultProps()

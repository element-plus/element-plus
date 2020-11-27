import { Store, AnyObject, fn } from '../table.type'

interface TableBodyProps {
  store: Store
  stripe?: boolean
  context: AnyObject
  rowClassName: string | fn
  rowStyle: AnyObject | fn
  fixed: string
  highlight: boolean
}

export {
  TableBodyProps,
}

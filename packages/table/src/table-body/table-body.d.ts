import { Store, AnyObject, fn } from '../table'

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

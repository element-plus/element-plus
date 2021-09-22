import { getCurrentInstance } from 'vue'

import type { ColumnProps } from '../props/column'

export const useColumn = () => {
  //
  const vm = getCurrentInstance()!

  const props = vm.props as ColumnProps
}

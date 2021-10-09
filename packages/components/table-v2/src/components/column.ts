import { defineComponent } from 'vue'

import { columnV2Name } from '../constants'
import { tableV2ColumnProps } from '../props/column'

export default defineComponent({
  name: columnV2Name,
  props: tableV2ColumnProps,
})

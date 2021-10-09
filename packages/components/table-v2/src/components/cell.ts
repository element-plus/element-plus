import { defineComponent, h } from 'vue'

import { tableV2CellProps } from '../props/cell'
export default defineComponent({
  name: 'TableV2Cell',
  props: tableV2CellProps,
  setup(props, { attrs, slots }) {
    return () => {
      h('div', attrs, [slots.default?.() || String(props.cellData)])
    }
  },
})

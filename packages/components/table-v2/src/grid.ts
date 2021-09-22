import { defineComponent } from 'vue'

import { useGrid } from './composables/use-grid'
import { useGridProps } from './props/grid'

const GridTable = defineComponent({
  props: useGridProps,

  setup() {
    const { renderer } = useGrid()
    return renderer
  },
})

export default GridTable

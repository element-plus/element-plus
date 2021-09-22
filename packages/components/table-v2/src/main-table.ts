import { defineComponent, h } from 'vue'

import Grid from './grid'

const MainTable = defineComponent({
  props: {},
  setup(props) {
    return () => h(Grid, props)
  },
})

export default MainTable

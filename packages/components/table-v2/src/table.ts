import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {},
  setup() {
    function renderCentralTable() {
      return 'Central table'
    }

    function renderFixedLeft() {
      return 'Fixed left'
    }

    function renderFixedRight() {
      return 'Fixed right'
    }

    function renderFooter() {
      return 'Footer'
    }

    function renderTable() {
      // put stuff inside

      return h('div', {}, [
        renderCentralTable(),
        renderFixedLeft(),
        renderFixedRight(),
        renderFooter(),
      ])
    }

    return renderTable
  },
})

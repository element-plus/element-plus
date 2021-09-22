import { defineComponent, h } from 'vue'

import { useTable } from './composables/use-table'

export default defineComponent({
  setup() {
    // Initialize setup

    const {
      renderFooter,
      renderLayer,
      renderLeft,
      renderMain,
      renderOverlay,
      renderResizer,
      renderRight,

      container,
      containerKls,
      containerStyle,
    } = useTable()

    return () => {
      return h(
        'div',
        {
          ref: container,
          class: containerKls.value,
          style: containerStyle.value,
        },
        [
          renderFooter(),
          renderMain(),
          renderLeft(),
          renderRight(),
          renderResizer(),
          renderLayer(),
          renderOverlay(),
        ]
      )
    }
  },
})

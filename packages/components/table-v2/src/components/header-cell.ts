import { defineComponent, h, renderSlot } from 'vue'

export default defineComponent({
  name: 'TableV2HeaderCell',
  setup(props, { attrs, slots }) {
    //

    h('div', {}, renderSlot(slots, 'default'))
  },
})

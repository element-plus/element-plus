import { defineComponent, h, renderSlot } from 'vue'

export default defineComponent({
  name: 'TableV2HeaderRow',
  setup(_, { attrs, slots }) {
    return h('div', {}, renderSlot(slots, 'default', attrs))
  },
})

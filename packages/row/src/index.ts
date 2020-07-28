import { defineComponent, computed, h } from 'vue'
export default defineComponent({
  name: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'top',
    },
  },
  setup(props, { slots }) {
    // todo provide
    const style = computed(() => {
      const ret = { marginLeft: '', marginRight: '' }
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    })
    return () =>
      h(
        props.tag,
        {
          class: [
            'el-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : '',
            props.align !== 'top' ? `is-align-${props.align}` : '',
            props.type === 'flex' ? 'el-row--flex' : '',
          ],
          style: style.value,
        },
        slots.default?.(),
      )
  },
})

import { defineComponent, computed, inject, h } from 'vue'

const ElCol = defineComponent({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  setup(props, { slots }) {
    const gutter = inject('ElRow', 0)

    const style = computed(() => {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px',
        }
      }
      return {}
    })
    const classList = computed(() => {
      const ret: string[] = []
      const pos: Array<'span' | 'offset' | 'pull' | 'push'> = ['span', 'offset', 'pull', 'push']
      pos.forEach(prop => {
        const size = props[prop]
        if (typeof size === 'number' && size >= 0) {
          ret.push(prop !== 'span' ? `el-col-${prop}-${props[prop]}` : `el-col-${props[prop]}`)
        }
      })
      const sizes: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = ['xs', 'sm', 'md', 'lg', 'xl']
      sizes.forEach(size => {
        if (typeof props[size] === 'number') {
          ret.push(`el-col-${size}-${props[size]}`)
        } else if (typeof props[size] === 'object') {
          const sizeProps = props[size]
          Object.keys(sizeProps).forEach(prop => {
            ret.push(
              prop !== 'span' ? `el-col-${size}-${prop}-${sizeProps[prop]}` : `el-col-${size}-${sizeProps[prop]}`,
            )
          })
        }
      })
      return ret
    })

    return () =>h(
      'div',
      {
        class: ['el-col', classList.value],
        style: style.value,
      },
      slots.default?.(),
    )
  },
})

export default ElCol

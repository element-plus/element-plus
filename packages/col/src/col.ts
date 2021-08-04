import { defineComponent, computed, inject, h } from 'vue'
import type { PropType } from 'vue'

type SizeObject = {
  span: number
  offset: number
}
const ElCol = defineComponent({
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    xs: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    sm: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    md: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    lg: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    xl: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
  },
  setup(props, { slots }) {
    const { gutter } = inject('ElRow', { gutter: { value: 0 } })

    const style = computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: gutter.value / 2 + 'px',
          paddingRight: gutter.value / 2 + 'px',
        }
      }
      return {}
    })
    const classList = computed(() => {
      const ret: string[] = []
      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach(prop => {
        const size = props[prop]
        if (typeof size === 'number') {
          if(prop === 'span') ret.push(`el-col-${props[prop]}`)
          else if(size > 0) ret.push(`el-col-${prop}-${props[prop]}`)
        }
      })
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
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
      // this is for the fix
      if (gutter.value) {
        ret.push('is-guttered')
      }

      return ret
    })

    return () => h(
      props.tag,
      {
        class: ['el-col', classList.value],
        style: style.value,
      },
      slots.default?.(),
    )
  },
})

export default ElCol

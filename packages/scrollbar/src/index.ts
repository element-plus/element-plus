
import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'
import scrollbarWidth from '@element-plus/utils/scrollbar-width'
import { toObject } from '@element-plus/utils/util'
import { h, ref, onMounted, onBeforeUnmount, nextTick, provide } from 'vue'
import Bar from './bar'

export default {
  name: 'ElScrollbar',

  components: { Bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup(props, ctx) {
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const wrap = ref(null)
    const resize = ref(null)

    provide('scroll-bar-wrap', wrap)

    const handleScroll = () => {
      moveY.value = ((wrap.value.scrollTop * 100) / wrap.value.clientHeight)
      moveX.value = ((wrap.value.scrollLeft * 100) / wrap.value.clientWidth)
    }

    const update = () => {
      if (!wrap.value) return

      const heightPercentage = (wrap.value.clientHeight * 100 / wrap.value.scrollHeight)
      const widthPercentage = (wrap.value.clientWidth * 100 / wrap.value.scrollWidth)

      sizeHeight.value = (heightPercentage < 100) ? (heightPercentage + '%') : ''
      sizeWidth.value = (widthPercentage < 100) ? (widthPercentage + '%') : ''
    }

    onMounted(() => {
      if (props.native) return
      nextTick(update)
      !props.noresize && addResizeListener(resize.value, update)
    })

    onBeforeUnmount(() => {
      if (props.native) return
      !props.noresize && removeResizeListener(resize.value, update)
    })

    return () => {
      const gutter = scrollbarWidth()
      let style = props.wrapStyle
      if (gutter) {
        const gutterWith = `-${gutter}px`
        const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`

        if (Array.isArray(props.wrapStyle)) {
          style = toObject(props.wrapStyle)
          style.marginRight = style.marginBottom = gutterWith
        } else if (typeof props.wrapStyle === 'string') {
          style += gutterStyle
        } else {
          style = gutterStyle
        }
      }
      const view = h(props.tag, {
        class: ['el-scrollbar__view', props.viewClass],
        style: props.viewStyle,
        ref: resize,
      }, ctx.slots.default())
      const _wrap = h('div', {
        ref: wrap,
        style,
        onScroll: handleScroll,
        class: [props.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'],
      }, [view])

      let nodes

      if (!props.native) {
        nodes = [_wrap,h(Bar,{
          move: moveX.value,
          size: sizeWidth.value,
        }),h(Bar,{
          vertical: true,
          move: moveY.value,
          size: sizeHeight.value,
        }),
        ]
      } else {
        nodes = [
          h('div',{
            ref: wrap,
            class: [props.wrapClass, 'el-scrollbar__wrap'],
            style,
          }, [view]),
        ]
      }

      return h('div', { class: 'el-scrollbar' }, nodes)
    }
  },
}

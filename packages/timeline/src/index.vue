<script lang='ts'>
import { h, provide, defineComponent } from 'vue'

export default defineComponent({
  name: 'ElTimeline',
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    provide('timeline', ctx)

    /**
     *  Maybe ,this component will not support prop 'reverse', why ?
     *
     *  Example 1:
     *   <component-a>
     *     <div>1</div>
     *     <div>2</div>
     *   </component-a>
     *
     *  Example 2:
     *   <component-a>
     *     <div v-for="i in 2" :key="i">{{ i }}</div>
     *   </component-a>
     *
     *  'slots.default()' value in example 1 just like [Vnode, Vnode]
     *  'slots.default()' value in example 2 just like [Vnode]
     *
     *   so i can't reverse the slots, when i use 'v-for' directive.
     */

    return () => {
      let slots = ctx.slots.default?.() || []
      const reverse = props.reverse
      if (reverse) {
        if(slots.length <= 1) { // 使用数组渲染slots.default?.()只有一个元素，内容在children里面
          slots.forEach(v => {
            v.children?.reverse()
          })
        } else {
          slots.reverse() // 不使用数组渲染slots.default?.()只有一个元素，内容在slots.default?.()里面
        }

      }
      return h(
        'ul',
        {
          class: { 'el-timeline': true,'is-reverse': props.reverse },
        },
        slots,
      )
    }
  },
})
</script>

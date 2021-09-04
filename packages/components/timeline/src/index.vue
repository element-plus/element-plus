<script lang="ts">
import { h, provide, defineComponent } from 'vue'

export default defineComponent({
  name: 'ElTimeline',
  setup(_, ctx) {
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
      return h(
        'ul',
        {
          class: { 'el-timeline': true },
        },
        ctx.slots.default?.()
      )
    }
  },
})
</script>

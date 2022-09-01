import { defineComponent, h, provide, renderSlot } from 'vue'
import { useNamespace } from '@element-plus/hooks'

const Timeline = defineComponent({
  name: 'ElTimeline',
  setup(_, { slots }) {
    const ns = useNamespace('timeline')

    provide('timeline', slots)

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
      return h('ul', { class: [ns.b()] }, [renderSlot(slots, 'default')])
    }
  },
})

export default Timeline
export type TimelineInstance = InstanceType<typeof Timeline>

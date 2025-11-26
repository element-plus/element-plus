import { computed, defineComponent, h, provide, renderSlot } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { timelineInjectionKey } from './tokens'
import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const timelineProps = buildProps({
  /**
   * @description position of timeline-item
   */
  mode: {
    type: String,
    values: ['left', 'alternate', 'right'],
    default: 'left',
  },
} as const)
export type TimelineProps = ExtractPropTypes<typeof timelineProps>
export type TimelinePropsPublic = __ExtractPublicPropTypes<typeof timelineProps>

const Timeline = defineComponent({
  name: 'ElTimeline',
  props: timelineProps,
  setup(props, { slots }) {
    const ns = useNamespace('timeline')

    provide(timelineInjectionKey, { props, slots })

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

    const timelineModeKls = computed(() => ns.is(props.mode))

    return () => {
      return h('ul', { class: [ns.b(), timelineModeKls.value] }, [
        renderSlot(slots, 'default'),
      ])
    }
  },
})

export default Timeline
export type TimelineInstance = InstanceType<typeof Timeline> & unknown

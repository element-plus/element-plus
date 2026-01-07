import { computed, defineComponent, h, provide } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { TIMELINE_INJECTION_KEY } from './tokens'
import { buildProps, flattedChildren } from '@element-plus/utils'

import type { VNodeChildAtom } from '@element-plus/utils'
import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'
import type { TimelineProvider } from './tokens'

export const timelineProps = buildProps({
  /**
   * @description relative position of timeline and content
   */
  mode: {
    type: String,
    values: ['left', 'alternate-left', 'alternate-right', 'right'],
    default: 'left',
  },
  /**
   * @description whether reverse order
   */
  reverse: Boolean,
} as const)
export type TimelineProps = ExtractPropTypes<typeof timelineProps>
export type TimelinePropsPublic = ExtractPublicPropTypes<typeof timelineProps>

const Timeline = defineComponent({
  name: 'ElTimeline',
  props: timelineProps,

  setup(props, { slots }) {
    const ns = useNamespace('timeline')

    provide<TimelineProvider>(TIMELINE_INJECTION_KEY, { props, slots })

    const timelineKls = computed(() => [ns.b(), ns.is(props.mode)])

    return () => {
      const children = flattedChildren(
        slots.default?.() ?? []
      ) as VNodeChildAtom[]

      return h(
        'ul',
        { class: timelineKls.value },
        props.reverse ? children.reverse() : children
      )
    }
  },
})

export default Timeline
export type TimelineInstance = InstanceType<typeof Timeline> & unknown

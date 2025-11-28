import { computed, defineComponent, h, provide } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { timelineInjectionKey } from './tokens'
import { buildProps, flattedChildren } from '@element-plus/utils'

import type { VNodeChildAtom } from '@element-plus/utils'
import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const timelineProps = buildProps({
  /**
   * @description relative position of timeline and content
   */
  mode: {
    type: String,
    values: ['left', 'alternate', 'right'],
    default: 'left',
  },
  reverse: Boolean,
} as const)
export type TimelineProps = ExtractPropTypes<typeof timelineProps>
export type TimelinePropsPublic = __ExtractPublicPropTypes<typeof timelineProps>

const Timeline = defineComponent({
  name: 'ElTimeline',
  props: timelineProps,

  setup(props, { slots }) {
    const ns = useNamespace('timeline')

    provide(timelineInjectionKey, { props, slots })

    const timelineModeKls = computed(() => ns.is(props.mode))

    return () => {
      const children = flattedChildren(slots.default?.() ?? []).filter(
        (node) => (node as any)?.type?.name === 'ElTimelineItem'
      ) as VNodeChildAtom[]

      return h(
        'ul',
        { class: [ns.b(), timelineModeKls.value] },
        props.reverse ? children.reverse() : children
      )
    }
  },
})

export default Timeline
export type TimelineInstance = InstanceType<typeof Timeline> & unknown

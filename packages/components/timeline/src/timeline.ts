import { defineComponent, h, provide } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { TIMELINE_INJECTION_KEY } from './tokens'
import { flattedChildren } from '@element-plus/utils'

import type { VNodeChildAtom } from '@element-plus/utils'

const Timeline = defineComponent({
  name: 'ElTimeline',
  props: {
    reverse: Boolean,
  },
  setup(props, { slots }) {
    const ns = useNamespace('timeline')

    provide(TIMELINE_INJECTION_KEY, slots)

    return () => {
      const children = flattedChildren(slots.default?.() ?? []).filter(
        (node) => (node as any)?.type?.name === 'ElTimelineItem'
      ) as VNodeChildAtom[]

      return h(
        'ul',
        { class: [ns.b()] },
        props.reverse ? children.reverse() : children
      )
    }
  },
})

export default Timeline
export type TimelineInstance = InstanceType<typeof Timeline> & unknown

import {
  cloneVNode,
  computed,
  defineComponent,
  ref,
  renderSlot,
  unref,
} from 'vue'
import { debugWarn } from '@element-plus/utils/error'
import { getFirstValidNode } from '@element-plus/utils/vnode'
import { buildProps, definePropType } from '@element-plus/utils/props'

export default defineComponent({
  name: 'ElPopperTrigger',
  props: buildProps({
    onClick: {
      type: definePropType<(e: Event) => void>(Function),
    },
    onMouseenter: { type: definePropType<(e: Event) => void>(Function) },
    onMouseleave: { type: definePropType<(e: Event) => void>(Function) },
    onMousedown: { type: definePropType<(e: Event) => void>(Function) },
    onMouseup: { type: definePropType<(e: Event) => void>(Function) },
    onContextmenu: { type: definePropType<(e: Event) => void>(Function) },
  }),
  setup(props, { slots, expose, attrs }) {
    const triggerRef = ref()

    expose({
      el: computed(() => unref(triggerRef)),
    })

    return () => {
      const children = getFirstValidNode(renderSlot(slots, 'default'))
      if (!children) {
        debugWarn('ElPopper', 'You need to provide a valid trigger element')
        return []
      }
      return cloneVNode(
        children,
        {
          ...attrs,
          ...props,
          ref: triggerRef,
        },
        true
      )
    }
  },
})

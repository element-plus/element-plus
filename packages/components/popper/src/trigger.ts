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

export default defineComponent({
  name: 'ElPopperTrigger',
  setup(props, { slots, expose }) {
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
      return cloneVNode(children, { ...props, ref: triggerRef }, true)
    }
  },
})

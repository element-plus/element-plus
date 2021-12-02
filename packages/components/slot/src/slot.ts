import {
  cloneVNode,
  computed,
  defineComponent,
  h,
  renderSlot,
  ref,
  unref,
} from 'vue'
import { unwrapFragmentElement } from '@element-plus/utils/vnode'
import type { ComponentPublicInstance } from 'vue'

const Slot = defineComponent({
  name: 'ElSlot',
  props: {
    tag: {
      type: String,
      required: true,
    },
    asChild: Boolean,
  },
  setup(props, { slots, attrs, expose }) {
    const childRef = ref<ComponentPublicInstance | HTMLElement | null>()

    const forwardRef = computed(() => {
      const unwrappedChild = unref(childRef)
      if (!unwrappedChild) return null
      if ('nodeType' in unwrappedChild) {
        return unwrapFragmentElement(unwrappedChild)
      }

      return unwrapFragmentElement(unwrappedChild.$el)
    })
    expose({
      forwardRef,
    })

    return () => {
      const defaultSlot = renderSlot(slots, 'default')

      const clonedVNode = cloneVNode(
        defaultSlot,
        {
          ...attrs,
          ref: childRef,
        },
        true
      )

      if (props.asChild) {
        return clonedVNode
      }

      return h(props.tag, { key: 1 }, [clonedVNode])
    }
  },
})

export default Slot

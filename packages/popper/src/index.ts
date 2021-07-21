import { defineComponent } from 'vue'

import { usePopper, usePopperProps, usePopperEmits } from '@element-plus/hooks'
import throwError from '@element-plus/utils/error'

const compName = 'ElPopper'

export default defineComponent({
  name: compName,
  props: usePopperProps,
  emits: [
    ...usePopperEmits,
    'after-enter',
    'after-leave',
    'before-enter',
    'before-leave',
  ],
  setup(_, ctx) {
    const { render } = usePopper()

    return () => {
      if (!ctx.slots.trigger) {
        // this is a reference that we need to pass down to child component
        // to obtain the child instance
        throwError(compName, 'Trigger must be provided')
      }

      return render()
    }
  },
})

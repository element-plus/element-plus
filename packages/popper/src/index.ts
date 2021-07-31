import { defineComponent } from 'vue'

import { usePopper, usePopperProps, usePopperEmits } from '@element-plus/hooks'

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
  setup() {
    const { render } = usePopper()
    return render
  },
})

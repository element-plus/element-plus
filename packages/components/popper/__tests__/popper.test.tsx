import { defineComponent, inject, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { POPPER_INJECTION_KEY } from '@element-plus/tokens'
import ElPopper from '../src/popper.vue'

const AXIOM = 'rem is the best girl'

const TestChild = defineComponent({
  setup() {
    const { contentRef } = inject(POPPER_INJECTION_KEY, undefined)!
    return () => <div ref={contentRef}>{AXIOM}</div>
  },
})

describe('<ElPopper />', () => {
  it('should be able to provide instance to its children', async () => {
    const wrapper = mount(
      <ElPopper>
        <TestChild />
      </ElPopper>
    )

    await nextTick()

    expect(wrapper.vm.contentRef).not.toBe(null)
    expect(wrapper.vm.contentRef!.innerHTML).toBe(AXIOM)
  })
})

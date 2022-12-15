import { defineComponent, nextTick, ref } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { usePopper } from '../use-popper'

import type { Options } from '@popperjs/core'

describe('usePopper', () => {
  const optionsRef = ref<Options>({} as Options)
  const TestComponent = defineComponent({
    setup(_, { expose }) {
      const popperRef = ref()
      const referenceRef = ref()
      const returns = usePopper(referenceRef, popperRef, optionsRef)
      expose({
        ...returns,
        popperRef,
        referenceRef,
      })
      return () => (
        <div class="test-wrapper">
          <div ref={popperRef}>reference</div>
          <div ref={referenceRef}>I am popper</div>
        </div>
      )
    },
  })

  let wrapper: ReturnType<typeof shallowMount>

  const createComponent = () => {
    wrapper = shallowMount(TestComponent)
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render well', async () => {
    createComponent()
    await nextTick()

    expect(wrapper.vm.instanceRef).toBeDefined()
  })
})

import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { POPPER_CONTENT_INJECTION_KEY } from '@element-plus/components/popper'
import ElArrow from '../src/arrow.vue'

import type { VueWrapper } from '@vue/test-utils'
import type { PopperArrowInstance } from '../src/arrow'

const popperContentInjection = {
  arrowRef: ref(null),
}

const mountArrow = () =>
  mount(<ElArrow />, {
    global: {
      provide: {
        [POPPER_CONTENT_INJECTION_KEY as symbol]: popperContentInjection,
      },
    },
  })

describe('<ElPopperArrow />', () => {
  let wrapper: VueWrapper<PopperArrowInstance>

  beforeEach(() => {
    wrapper = mountArrow()
    return nextTick()
  })

  afterEach(() => {
    wrapper?.unmount()
    popperContentInjection.arrowRef.value = null
  })

  it('should set the arrowRef after mounted', async () => {
    expect(popperContentInjection.arrowRef.value).toBe(wrapper.vm.arrowRef)
  })

  it('should unset arrowRef before unmount', async () => {
    expect(popperContentInjection.arrowRef.value).toBe(wrapper.vm.arrowRef)

    wrapper.unmount()
    expect(popperContentInjection.arrowRef.value).toBeNull()
  })
})

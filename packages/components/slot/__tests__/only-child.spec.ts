import { ref, h, nextTick, Comment, Fragment } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { FORWARD_REF_INJECTION_KEY } from '@element-plus/hooks'
import { debugWarn } from '@element-plus/utils/error'
import ElOnlyChild from '../src/only-child'

import type { Slot } from 'vue'

jest.mock('@element-plus/utils/error', () => ({
  debugWarn: jest.fn(),
}))

const AXIOM = 'rem is the best girl'

describe('<ElOnlyChild />', () => {
  const defaultProvide = {
    [FORWARD_REF_INJECTION_KEY as any]: {
      forwardRef: ref(null),
    },
  }
  const createComponent = (slot: Slot) => {
    return shallowMount(ElOnlyChild, {
      global: {
        provide: defaultProvide,
      },
      // vue test utils adds the entry for us even though default's value is null
      slots: slot
        ? {
            default: slot,
          }
        : null,
    })
  }

  let wrapper: ReturnType<typeof createComponent>

  afterEach(() => {
    ;(debugWarn as jest.MockedFunction<typeof debugWarn>).mockClear()
    wrapper?.unmount()
  })

  it('should be able to render only one child', async () => {
    const kls = 'test_kls'
    wrapper = createComponent(() => [
      h(
        'div',
        {
          class: kls,
        },
        [AXIOM]
      ),
    ])

    await nextTick()

    expect(debugWarn).not.toHaveBeenCalled()
    const renderedChild = wrapper.find(`.${kls}`)
    expect(renderedChild.exists()).toBe(true)
    expect(renderedChild.text()).toBe(AXIOM)
  })

  it('should be able to render string type and wrap it into span', async () => {
    wrapper = createComponent(() => [AXIOM as any])
    await nextTick()

    expect(debugWarn).not.toHaveBeenCalled()
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('should be able to unwrap fragmented children', async () => {
    wrapper = createComponent(() => [h(Fragment, [AXIOM])])
    await nextTick()

    expect(debugWarn).not.toHaveBeenCalled()
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('should skip comment', async () => {
    wrapper = createComponent(() => [
      h(Fragment, [h(Comment, 'some comment'), AXIOM as any]),
    ])
    await nextTick()

    expect(debugWarn).not.toHaveBeenCalled()
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('should return nothing and warn when no valid children found', async () => {
    wrapper = createComponent(() => [h(Fragment, [])])
    await nextTick()

    expect(debugWarn).toHaveBeenCalled()
  })

  it('should render nothing when invalid node were found', async () => {
    wrapper = createComponent(() => [h(Fragment, null)])
    await nextTick()

    expect(debugWarn).toHaveBeenCalled()
  })

  it('should warns about having multiple children', async () => {
    wrapper = createComponent(() => [AXIOM, AXIOM] as any[])
    await nextTick()

    expect(debugWarn).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toBe('')
  })

  it('should render nothing when no children provided', async () => {
    wrapper = createComponent(null)
    await nextTick()

    expect(debugWarn).not.toHaveBeenCalled()
    expect(wrapper.text()).toBe('')
  })
})

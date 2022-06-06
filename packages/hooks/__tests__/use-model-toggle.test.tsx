import { defineComponent, nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useModelToggle, useModelToggleProps } from '../use-model-toggle'
import type { VueWrapper } from '@vue/test-utils'

const AXIOM = 'Rem is the best girl'

const onShow = vi.fn()
const onHide = vi.fn()
let flag = true
const shouldProceed = () => flag

const Comp = defineComponent({
  props: {
    ...useModelToggleProps,
    disabled: Boolean,
  },

  setup(props) {
    const indicator = ref(false)
    const { show, hide, toggle } = useModelToggle({
      indicator,
      onShow,
      onHide,
      shouldProceed,
      shouldHideWhenRouteChanges: ref(true),
    })

    return () => {
      return (
        <>
          <button class="show" onClick={show}>
            show
          </button>
          <button class="hide" onClick={hide}>
            hide
          </button>
          <button class="toggle" onClick={toggle}>
            toggle
          </button>
          {indicator.value || props.modelValue ? <div>{AXIOM}</div> : undefined}
        </>
      )
    }
  },
})

describe('use-model-toggle', () => {
  let wrapper: VueWrapper<any>
  beforeEach(() => {
    flag = true
    wrapper = mount(Comp)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render correctly', async () => {
    expect(wrapper.text()).not.toContain(AXIOM)
  })

  it('should show and hide via API calls', async () => {
    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.show').trigger('click')
    expect(wrapper.text()).toContain(AXIOM)
    expect(onShow).toHaveBeenCalledTimes(1)

    await wrapper.find('.hide').trigger('click')
    expect(wrapper.text()).not.toContain(AXIOM)
    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it('should call callbacks correctly', async () => {
    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.show').trigger('click')
    expect(wrapper.text()).toContain(AXIOM)
    expect(onShow).toHaveBeenCalledTimes(1)

    await wrapper.find('.show').trigger('click')
    expect(onShow).toHaveBeenCalledTimes(1)

    await wrapper.find('.hide').trigger('click')
    expect(wrapper.text()).not.toContain(AXIOM)
    expect(onHide).toHaveBeenCalledTimes(1)

    await wrapper.find('.hide').trigger('click')
    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it('should toggle show and hide via API calls', async () => {
    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.toggle').trigger('click')
    expect(wrapper.text()).toContain(AXIOM)
    expect(onShow).toHaveBeenCalledTimes(1)

    await wrapper.find('.toggle').trigger('click')
    expect(wrapper.text()).not.toContain(AXIOM)
    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it('should not proceed when the should proceed returns false', async () => {
    flag = false
    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.show').trigger('click')

    expect(wrapper.text()).not.toContain(AXIOM)
    expect(onShow).not.toHaveBeenCalled()

    await wrapper.find('.toggle').trigger('click')
    expect(wrapper.text()).not.toContain(AXIOM)
    expect(onShow).not.toHaveBeenCalled()
  })

  it('should bind with modelValue', async () => {
    wrapper.unmount()

    const model = ref(false)
    const disabled = ref(false)
    wrapper = mount({
      setup: () => () =>
        <Comp v-model={model.value} disabled={disabled.value} />,
    })

    expect(wrapper.findComponent(Comp).text()).not.toContain(AXIOM)
    await wrapper.find('.show').trigger('click')
    expect(model.value).toBe(true)
    expect(wrapper.findComponent(Comp).text()).toContain(AXIOM)

    await wrapper.find('.hide').trigger('click')
    expect(onHide).toHaveBeenCalledTimes(1)
    expect(model.value).toBe(false)
    expect(wrapper.findComponent(Comp).text()).not.toContain(AXIOM)
    model.value = true
    disabled.value = true
    await nextTick()
    // when disabled emits false that modifies the model
    expect(model.value).toBe(false)

    // should not hide when disabled
    await wrapper.find('.hide').trigger('click')
    expect(onHide).toHaveBeenCalledTimes(1)
  })

  it('should hide when route changes', async () => {
    wrapper.unmount()

    const router = reactive({
      test: '/',
    })
    wrapper = mount(Comp, {
      global: {
        config: {
          globalProperties: {
            $route: router,
          },
        },
      },
    })

    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.show').trigger('click')

    expect(wrapper.text()).toContain(AXIOM)
    expect(onHide).toHaveBeenCalledTimes(0)
    router.test = '/test/changed'
    await nextTick()
    expect(onHide).toHaveBeenCalledTimes(1)
  })
})

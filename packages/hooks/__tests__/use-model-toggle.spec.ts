import { nextTick, ref, h, reactive } from 'vue'
import { mount } from '@vue/test-utils'

import { useModelToggle, useModelToggleProps } from '../use-model-toggle'

import type { ExtractPropTypes } from 'vue'

const AXIOM = 'Rem is the best girl'

const onShow = jest.fn()
const onHide = jest.fn()
let flag = true
const shouldProceed = () => flag

const Comp = {
  name: 'comp',
  props: { ...useModelToggleProps, disabled: Boolean },
  setup(props: ExtractPropTypes<typeof useModelToggleProps>) {
    const indicator = ref(false)
    const { show, hide, toggle } = useModelToggle({
      indicator,
      onShow,
      onHide,
      shouldProceed,
      shouldHideWhenRouteChanges: ref(true),
    })

    return () => {
      return [
        h(
          'button',
          {
            class: 'show',
            onClick: show,
          },
          'show'
        ),
        h(
          'button',
          {
            class: 'hide',
            onClick: hide,
          },
          'hide'
        ),
        h('button', {
          class: 'toggle',
          onClick: toggle,
        }),

        indicator.value || props.modelValue ? h('div', AXIOM) : null,
      ]
    }
  },
}

describe('use-model-toggle', () => {
  let wrapper: ReturnType<typeof mount>
  beforeEach(() => {
    flag = true
    wrapper = mount(Comp)
    onShow.mockClear()
    onHide.mockClear()
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
    wrapper = mount({
      components: {
        Comp,
      },
      template: `<comp v-model="model" :disabled="disabled" />`,
      data() {
        return {
          model: false,
          disabled: false,
        }
      },
    })

    expect(wrapper.findComponent(Comp).text()).not.toContain(AXIOM)
    await wrapper.find('.show').trigger('click')
    expect(wrapper.vm.model).toBe(true)
    expect(wrapper.findComponent(Comp).text()).toContain(AXIOM)

    await wrapper.find('.hide').trigger('click')
    expect(onHide).toHaveBeenCalledTimes(1)
    expect(wrapper.vm.model).toBe(false)
    expect(wrapper.findComponent(Comp).text()).not.toContain(AXIOM)
    ;(wrapper.vm.model as any) = true
    ;(wrapper.vm.disabled as any) = true
    await nextTick()
    // when disabled emits false that modifies the model
    expect(wrapper.vm.model).toBe(false)

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

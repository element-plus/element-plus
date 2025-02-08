import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { useNamespace } from '@element-plus/hooks'
import Captcha from '../src/captcha.vue'

const ns = useNamespace('captcha')

describe('Button.vue', () => {
  it('default', () => {
    const wrapper = mount(() => <Captcha />)

    expect(wrapper.classes()).toEqual([ns.b()])
  })

  it('size prop', async () => {
    const wrapper = mount(<Captcha />, {
      props: {
        size: 'small',
      },
    })

    expect(wrapper.classes()).toContain(ns.m('small'))

    await wrapper.setProps({ size: 'large' })
    expect(wrapper.classes()).toContain(ns.m('large'))
  })

  it('v-model', async () => {
    const wrapper = mount(<Captcha />, {
      props: {
        modelValue: true,
      },
    })

    expect(wrapper.vm.state.isPassed).toBe(true)

    await wrapper.setProps({
      modelValue: false,
    })

    expect(wrapper.vm.state.isPassed).toBe(false)
  })

  it('completeText, helpText props', async () => {
    const model = ref(false)
    const helpText = 'custom help text'
    const completeText = 'custom complete text'
    const wrapper = mount(
      () => (
        <Captcha
          helpText={helpText}
          completeText={completeText}
          v-model={model.value}
        />
      ),
      {}
    )

    expect(wrapper.find(`.${ns.e('content')}`).text()).toBe(helpText)

    model.value = true
    await nextTick()
    expect(wrapper.find(`.${ns.e('content')}`).text()).toBe(completeText)
  })

  it('success state, emits, v-model', async () => {
    const model = ref(false)
    const onStart = vi.fn()
    const onSuccess = vi.fn()
    const onFail = vi.fn()

    const wrapper = mount(
      () => (
        <Captcha
          v-model={model.value}
          onStart={onStart}
          onSuccess={onSuccess}
          onFail={onFail}
        />
      ),
      {
        attachTo: document.body,
      }
    )

    const btn = wrapper.findComponent(`.${ns.e('btn')}`)
    vi.spyOn(
      wrapper.find(`.${ns.b()}`).element,
      'getBoundingClientRect'
    ).mockImplementation(() => ({ width: 100, left: 0 } as DOMRect))
    vi.spyOn(
      wrapper.find<HTMLElement>(`.${ns.e('btn')}`).element,
      'offsetWidth',
      'get'
    ).mockImplementation(() => 60)

    await btn.trigger('mousedown', { offsetX: 10, pageX: 50 })
    await btn.trigger('mousemove', { pageX: 79 })
    expect(model.value).toBe(false)

    await btn.trigger('mousemove', { pageX: 80 })
    expect(model.value).toBe(true)
    expect(onStart).toHaveBeenCalledTimes(1)
    expect(onFail).toHaveBeenCalledTimes(0)
    expect(onSuccess).toHaveBeenCalledTimes(1)
  })

  it('fail state, emits, v-model', async () => {
    const model = ref(false)
    const onStart = vi.fn()
    const onSuccess = vi.fn()
    const onFail = vi.fn()

    const wrapper = mount(
      () => (
        <Captcha
          v-model={model.value}
          onStart={onStart}
          onSuccess={onSuccess}
          onFail={onFail}
        />
      ),
      {
        attachTo: document.body,
      }
    )

    const btn = wrapper.findComponent(`.${ns.e('btn')}`)
    vi.spyOn(
      wrapper.find(`.${ns.b()}`).element,
      'getBoundingClientRect'
    ).mockImplementation(() => ({ width: 100, left: 0 } as DOMRect))
    vi.spyOn(
      wrapper.find<HTMLElement>(`.${ns.e('btn')}`).element,
      'offsetWidth',
      'get'
    ).mockImplementation(() => 60)

    await btn.trigger('mousedown', { offsetX: 10, pageX: 50 })
    await btn.trigger('mousemove', { pageX: 79 })
    expect(model.value).toBe(false)

    await wrapper.trigger('mouseleave', { pageX: 79 })
    expect(model.value).toBe(false)
    expect(onStart).toHaveBeenCalledTimes(1)
    expect(onFail).toHaveBeenCalledTimes(1)
    expect(onSuccess).toHaveBeenCalledTimes(0)
  })
})

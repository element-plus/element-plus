import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { CaretTop } from '@element-plus/icons-vue'
import Backtop from '../src/backtop.vue'

import type { VNode } from 'vue'

const _mount = (render: () => VNode) =>
  mount(render, { attachTo: document.body })

const nextFrame = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))

describe('Backtop.vue', () => {
  test('render', async () => {
    const wrapper = _mount(() => (
      <div class="target" style="height: 100px; overflow: auto">
        <div style="height: 10000px; width: 100%">
          <Backtop
            target=".target"
            visibilityHeight={2000}
            right={100}
            bottom={200}
          />
        </div>
      </div>
    ))
    await nextTick()

    expect(wrapper.find('.el-backtop').exists()).toBe(false)
    wrapper.element.scrollTop = 2000
    await wrapper.trigger('scroll')
    await nextFrame()
    expect(wrapper.find('.el-backtop').exists()).toBe(true)

    expect(wrapper.find('.el-backtop').attributes('style')).toBe(
      'right: 100px; bottom: 200px;'
    )
    expect(wrapper.findComponent(CaretTop).exists()).toBe(true)
    expect(wrapper.find('.el-backtop--progress').exists()).toBe(false)
    expect(wrapper.find('.el-backtop--circle').exists()).toBe(true)

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
  test('render when visibilityHeight is zero', async () => {
    const wrapper = _mount(() => (
      <Backtop visibilityHeight={0} right={100} bottom={200} />
    ))
    await nextTick()

    expect(wrapper.find('.el-backtop').exists()).toBe(true)
  })

  test('displays scroll progress when showProgress is enabled', async () => {
    const wrapper = _mount(() => (
      <div class="progress-target" style="height: 100px; overflow: auto">
        <Backtop target=".progress-target" visibilityHeight={0} showProgress />
      </div>
    ))
    await nextTick()
    Object.defineProperties(wrapper.element, {
      clientHeight: { configurable: true, value: 100 },
      scrollHeight: { configurable: true, value: 1000 },
    })
    wrapper.element.scrollTop = 450
    await wrapper.trigger('scroll')
    await nextFrame()

    const progress = wrapper.find('.el-backtop--progress')
    expect(progress.exists()).toBe(true)
    expect(progress.classes()).toContain('el-backtop--circle')
    expect(progress.attributes('style')).toContain(
      '--el-backtop-progress: 0.5turn'
    )

    wrapper.element.scrollTop = 0
    await wrapper.trigger('scroll')
    await nextFrame()
    expect(progress.attributes('style')).toContain(
      '--el-backtop-progress: 0turn'
    )

    wrapper.element.scrollTop = 900
    await wrapper.trigger('scroll')
    await nextFrame()
    expect(progress.attributes('style')).toContain(
      '--el-backtop-progress: 1turn'
    )
  })

  test('updates progress when showProgress is enabled at runtime', async () => {
    const target = document.createElement('div')
    target.className = 'runtime-target'
    document.body.appendChild(target)
    const wrapper = mount(Backtop, {
      attachTo: target,
      props: { target: '.runtime-target', visibilityHeight: 0 },
    })
    await nextTick()
    Object.defineProperties(target, {
      clientHeight: { configurable: true, value: 100 },
      scrollHeight: { configurable: true, value: 1000 },
    })
    target.scrollTop = 450
    target.dispatchEvent(new Event('scroll'))
    await nextFrame()

    await wrapper.setProps({ showProgress: true })

    expect(wrapper.attributes('style')).toContain(
      '--el-backtop-progress: 0.5turn'
    )

    Object.defineProperty(target, 'scrollHeight', {
      configurable: true,
      value: 1900,
    })
    window.dispatchEvent(new Event('resize'))
    await nextFrame()

    expect(wrapper.attributes('style')).toContain(
      '--el-backtop-progress: 0.25turn'
    )

    wrapper.unmount()
    target.remove()
  })

  test('does not force a circular progress ring for custom content', async () => {
    const wrapper = mount(Backtop, {
      attachTo: document.body,
      props: { showProgress: true, visibilityHeight: 0 },
      slots: { default: '<div class="custom-content">UP</div>' },
    })
    await nextTick()

    const backtop = wrapper.find('.el-backtop')
    expect(backtop.classes()).toContain('el-backtop--progress')
    expect(backtop.classes()).not.toContain('el-backtop--circle')
    expect(wrapper.find('.custom-content').element.parentElement).toBe(
      backtop.element
    )
    wrapper.unmount()
  })
})

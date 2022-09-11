import { markRaw, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Edit } from '@element-plus/icons-vue'
import Steps from '../src/steps.vue'
import Step from '../src/item.vue'
import type { VNode } from 'vue'

const _mount = (render: () => VNode) =>
  mount({
    setup() {
      return render
    },
    attachTo: document.body,
    global: {
      provide: {
        ElSteps: {},
      },
    },
  })

describe('Steps.vue', () => {
  test('render', () => {
    const wrapper = _mount(() => (
      <Steps>
        <Step />
        <Step />
        <Step />
      </Steps>
    ))
    expect(wrapper.findAll('.el-step').length).toBe(3)
    expect(wrapper.classes()).toContain('el-steps--horizontal')
    expect(wrapper.find('.el-step').classes()).toContain('is-horizontal')
  })

  test('space', () => {
    const wrapper = _mount(() => (
      <Steps space={100}>
        <Step />
      </Steps>
    ))
    expect(wrapper.find('.el-step').attributes('style')).toMatch(
      'flex-basis: 100px;'
    )
  })

  test('alignCenter', () => {
    const wrapper = _mount(() => (
      <Steps alignCenter>
        <Step />
      </Steps>
    ))
    expect(wrapper.find('.el-step').classes()).toContain('is-center')
  })

  test('direction', () => {
    const wrapper = _mount(() => (
      <Steps direction="vertical">
        <Step />
      </Steps>
    ))
    expect(wrapper.classes()).toContain('el-steps--vertical')
    expect(wrapper.find('.el-step').classes()).toContain('is-vertical')
  })

  test('simple', () => {
    const wrapper = _mount(() => (
      <Steps simple direction="vertical" space={100} alignCenter>
        <Step />
      </Steps>
    ))
    expect(wrapper.classes()).toContain('el-steps--simple')
    expect(wrapper.find('is-center').exists()).toBe(false)
    expect(wrapper.find('is-vertical').exists()).toBe(false)
  })

  test('active', async () => {
    const wrapper = _mount(() => (
      <Steps active={0}>
        <Step />
        <Step />
        <Step />
      </Steps>
    ))
    await nextTick()
    expect(
      wrapper.findAll('.el-step')[0].find('.el-step__head').classes()
    ).toContain('is-process')
    expect(
      wrapper.findAll('.el-step')[1].find('.el-step__head').classes()
    ).toContain('is-wait')
    expect(
      wrapper.findAll('.el-step')[2].find('.el-step__head').classes()
    ).toContain('is-wait')
    await wrapper.setProps({ active: 1 })
    expect(
      wrapper.findAll('.el-step')[0].find('.el-step__head').classes()
    ).toContain('is-finish')
    expect(
      wrapper.findAll('.el-step')[1].find('.el-step__head').classes()
    ).toContain('is-process')
    expect(
      wrapper.findAll('.el-step')[2].find('.el-step__head').classes()
    ).toContain('is-wait')
    await wrapper.setProps({ active: 2 })
    expect(
      wrapper.findAll('.el-step')[0].find('.el-step__head').classes()
    ).toContain('is-finish')
    expect(
      wrapper.findAll('.el-step')[1].find('.el-step__head').classes()
    ).toContain('is-finish')
    expect(
      wrapper.findAll('.el-step')[2].find('.el-step__head').classes()
    ).toContain('is-process')
    await wrapper.setProps({ active: 3 })
    expect(
      wrapper.findAll('.el-step')[2].find('.el-step__head').classes()
    ).toContain('is-finish')
  })

  test('process-status', async () => {
    const wrapper = _mount(() => (
      <Steps active={2} process-status="success">
        <Step />
        <Step />
        <Step />
      </Steps>
    ))
    await nextTick()
    expect(
      wrapper.findAll('.el-step')[2].find('.el-step__head').classes()
    ).toContain('is-success')
    await wrapper.setProps({ processStatus: 'error' })
    expect(
      wrapper.findAll('.el-step')[2].find('.el-step__head').classes()
    ).toContain('is-error')
  })

  test('finish-status', async () => {
    const wrapper = _mount(() => (
      <Steps active={2} finish-status="error">
        <Step />
        <Step />
        <Step />
      </Steps>
    ))
    await nextTick()
    expect(
      wrapper.findAll('.el-step')[0].find('.el-step__head').classes()
    ).toContain('is-error')
    await wrapper.setProps({ finishStatus: 'success' })
    expect(
      wrapper.findAll('.el-step')[0].find('.el-step__head').classes()
    ).toContain('is-success')
  })

  test('step attribute', () => {
    const wrapper = mount({
      setup() {
        const iconEdit = markRaw(Edit)
        return () => (
          <Steps active={0}>
            <Step
              icon={iconEdit}
              title="title"
              description="description"
              status="wait"
            />
          </Steps>
        )
      },
    })
    expect(wrapper.find('.el-step__head').classes()).toContain('is-wait')
    expect(wrapper.find('.el-step__title').text()).toBe('title')
    expect(wrapper.find('.el-step__description').text()).toBe('description')
    expect(wrapper.findComponent(Edit).exists()).toBe(true)
  })

  test('step slot', () => {
    const wrapper = _mount(() => (
      <Steps active={0}>
        <Step
          v-slots={{
            title: () => 'A',
            description: () => 'B',
          }}
        />
      </Steps>
    ))
    expect(wrapper.find('.el-step__title').text()).toBe('A')
    expect(wrapper.find('.el-step__description').text()).toBe('B')
  })
})

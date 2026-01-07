import { Comment, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { TypeComponentsMap } from '@element-plus/utils'
import Alert from '../src/alert.vue'

const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test & class', () => {
    const wrapper = mount(() => <Alert title={AXIOM} showIcon={true} />)
    expect(wrapper.find('.el-alert__title').text()).toEqual(AXIOM)
    expect(wrapper.find('.el-alert').classes()).toContain('el-alert--info')
  })

  test('type', () => {
    const wrapper = mount(() => (
      <Alert title={'test'} showIcon={true} type={'success'} />
    ))
    expect(wrapper.find('.el-alert').classes()).toContain('el-alert--success')
    expect(wrapper.find('.el-alert__icon').classes()).toContain('el-icon')
    expect(wrapper.findComponent(TypeComponentsMap.success).exists()).toBe(true)
  })

  test('description', () => {
    const wrapper = mount(() => (
      <Alert title={'Dorne'} showIcon={true} description={AXIOM} />
    ))
    expect(wrapper.find('.el-alert__description').text()).toEqual(AXIOM)
  })

  test('theme', () => {
    const wrapper = mount(() => <Alert title={'test'} effect={'dark'} />)
    expect(wrapper.find('.el-alert').classes()).toContain('is-dark')
  })

  test('title slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        title: AXIOM,
      },
    })
    expect(wrapper.find('.el-alert__title').text()).toEqual(AXIOM)
  })

  test('close', async () => {
    const wrapper = mount(() => <Alert closeText={'close'} />)
    const closeBtn = wrapper.find('.el-alert__close-btn')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('default slot with content should show description', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.find('.el-alert__description').exists()).toBe(true)
    expect(wrapper.find('.el-alert__description').text()).toEqual(AXIOM)
  })

  test('empty default slot should not show description', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: '',
      },
    })
    expect(wrapper.find('.el-alert__description').exists()).toBe(false)
  })

  test('default slot with only comment nodes should not show description', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: () => [h(Comment, 'some comment')],
      },
    })
    expect(wrapper.find('.el-alert__description').exists()).toBe(false)
  })

  test('default slot with comment nodes followed by real node should show description', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: () => [h(Comment, 'some comment'), AXIOM],
      },
    })
    expect(wrapper.find('.el-alert__description').exists()).toBe(true)
    expect(wrapper.find('.el-alert__description').text()).toEqual(AXIOM)
  })
})

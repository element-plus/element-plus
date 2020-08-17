import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test & class', () => {
    const wrapper = mount(Alert, {
      props: {
        title: AXIOM,
        showIcon: true,
      },
    })
    expect(wrapper.find('.el-alert__title').text()).toEqual(AXIOM)
    expect(wrapper.find('.el-alert').classes()).toContain('el-alert--info')
  })

  test('type', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        type: 'success',
        showIcon: true,
      },
    })
    expect(wrapper.find('.el-alert').classes()).toContain('el-alert--success')
    expect(wrapper.find('.el-alert__icon').classes()).toContain('el-icon-success')
  })

  test('description', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'Dorne',
        description: AXIOM,
        showIcon: true,
      },
    })
    expect(wrapper.find('.el-alert__description').text()).toEqual(AXIOM)
  })

  test('theme', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        effect: 'dark',
      },
    })
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
    const wrapper = mount(Alert, {
      props: {
        closeText: 'close',
      },
    })

    const closeBtn = wrapper.find('.el-alert__closebtn')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})

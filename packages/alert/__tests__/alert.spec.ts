import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

// const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('render test & class', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        showIcon: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.el-alert__title').textContent).toEqual('test')
    expect(vm.$el.classList.contains('el-alert--info')).toEqual(true)
  })

  test('type', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        type: 'success',
        showIcon: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('el-alert--success')).toEqual(true)
  })

  test('description', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'Dorne',
        description: 'Unbowed, Unbent, Unbroken',
        showIcon: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.el-alert__description').textContent)
      .toEqual('Unbowed, Unbent, Unbroken')
  })

  test('theme', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        effect: 'dark',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('is-dark')).toEqual(true)
  })

  test('title slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        title: 'foo',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.el-alert__title').textContent).toEqual('foo')
  })

  test('close', async () => {
    const wrapper = mount(Alert, {
      slots: {},
    })

    const closeBtn = wrapper.find('.el-alert__closebtn')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })
})

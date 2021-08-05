import { mount } from '@vue/test-utils'
import PageHeader from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('PageHeader.vue', () => {
  test('render test', () => {
    const wrapper = mount(PageHeader, {
      props: { content: AXIOM },
    })
    expect(wrapper.find('.el-page-header__content').text()).toEqual(AXIOM)
  })

  test('should render icon props', () => {
    const icon = 'el-icon-arrow-left'
    const wrapper = mount(PageHeader, {
      props: { icon: icon },
    })
    expect(wrapper.find('.el-page-header__icon i').classes()).toContain(icon)
  })

  test('should render icon slots', () => {
    const wrapper = mount(PageHeader, {
      slots: { icon: AXIOM },
    })
    expect(wrapper.find('.el-page-header__icon').text()).toEqual(AXIOM)
  })

  test('slot content', () => {
    const wrapper = mount(PageHeader, {
      slots: { content: AXIOM },
    })
    expect(wrapper.find('.el-page-header__content').text()).toEqual(AXIOM)
  })

  test('prop title', () => {
    const wrapper = mount(PageHeader, {
      props: { title: AXIOM },
    })
    expect(wrapper.find('.el-page-header__title').text()).toEqual(AXIOM)
  })

  test('slot prop', () => {
    const wrapper = mount(PageHeader, {
      slots: { title: AXIOM },
    })
    expect(wrapper.find('.el-page-header__title').text()).toEqual(AXIOM)
  })

  test('event back', async () => {
    const wrapper = mount(PageHeader, {
      props: { content: AXIOM },
    })

    await wrapper.find('.el-icon-back').trigger('click')
    expect(wrapper.emitted('back')).toBeDefined()
  })
})

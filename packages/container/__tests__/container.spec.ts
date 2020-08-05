import { mount } from '@vue/test-utils'
import Container from '../src/container.vue'
import Header from '../src/header.vue'
import Main from '../src/main.vue'
import Aside from '../src/aside.vue'
import Footer from '../src/footer.vue'

const AXIOM = 'Rem is the best girl'

describe('Container.vue', () => {
  test('render test', () => {
    const wrapper = mount(Container, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})

describe('Header', () => {
  test('create', () => {
    const wrapper = mount(Header)
    expect(wrapper.classes()).toContain('el-header')
  })
})

describe('Main', () => {
  test('create', () => {
    const wrapper = mount(Main)
    expect(wrapper.classes()).toContain('el-main')
  })
})

describe('Aside', () => {
  test('create', () => {
    const wrapper = mount(Aside)
    expect(wrapper.classes()).toContain('el-aside')
  })
})

describe('Footer', () => {
  test('create', () => {
    const wrapper = mount(Footer)
    expect(wrapper.classes()).toContain('el-footer')
  })
})

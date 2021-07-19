import { mount } from '@vue/test-utils'
import Container from '../src/container.vue'
import Header from '../src/header.vue'
import Main from '../src/main.vue'
import Aside from '../src/aside.vue'
import Footer from '../src/footer.vue'
import { getCssVariable } from '@element-plus/test-utils'

const AXIOM = 'Rem is the best girl'

describe('Container.vue', () => {
  test('container render test', () => {
    const wrapper = mount(Container, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('vertical', () => {
    const TestComponent = {
      template: `
        <el-container>
          <el-header></el-header>
          <el-main></el-main>
        </el-container>`,
      components: {
        'el-container': Container,
        'el-header': Header,
        'el-main': Main,
      },
    }

    const wrapper = mount(TestComponent)
    expect(wrapper.classes('is-vertical')).toBe(true)
  })

  test('direction', () => {
    const TestComponent = {
      template: `
        <el-container :direction="direction">
          <el-header></el-header>
          <el-main></el-main>
        </el-container>`,
      components: {
        'el-container': Container,
        'el-header': Header,
        'el-main': Main,
      },
      data() {
        return {
          direction: 'horizontal',
        }
      },
    }
    const wrapper = mount(TestComponent)
    expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(false)
    wrapper.vm.direction = 'vertical'
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(true)
    })
  })
})

describe('Header', () => {
  test('create header', () => {
    const wrapper = mount(Header)
    expect(wrapper.classes()).toContain('el-header')
  })

  test('header height', () => {
    const wrapper = mount(Header, {
      props: {
        height: '100px',
      },
    })
    const vm = wrapper.vm
    expect(getCssVariable(vm.$el, '--el-header-height')).toEqual('100px')
  })
})

describe('Aside', () => {
  test('aside create', () => {
    const wrapper = mount(Aside)
    expect(wrapper.classes()).toContain('el-aside')
  })

  test('aside width', () => {
    const wrapper = mount(Aside, {
      props: {
        width: '200px',
      },
    })

    const vm = wrapper.vm
    expect(getCssVariable(vm.$el, '--el-aside-width')).toEqual('200px')
  })
})

describe('Main', () => {
  test('main create', () => {
    const wrapper = mount(Main)
    expect(wrapper.classes()).toContain('el-main')
  })
})

describe('Footer', () => {
  test('footer create', () => {
    const wrapper = mount(Footer)
    expect(wrapper.classes()).toContain('el-footer')
  })

  test('footer height', () => {
    const wrapper = mount(Footer, {
      props: {
        height: '100px',
      },
    })
    const vm = wrapper.vm
    expect(getCssVariable(vm.$el, '--el-footer-height')).toEqual('100px')
  })


})

import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { getCssVariable } from '@element-plus/test-utils'
import Container from '../src/container.vue'
import Header from '../src/header.vue'
import Main from '../src/main.vue'
import Aside from '../src/aside.vue'
import Footer from '../src/footer.vue'

const AXIOM = 'Rem is the best girl'

describe('Container.vue', () => {
  test('container render test', async () => {
    const wrapper = mount(() => <Container>{AXIOM}</Container>)
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('vertical', () => {
    const wrapper = mount(() => (
      <Container>
        <Header />
        <Main />
      </Container>
    ))
    expect(wrapper.classes('is-vertical')).toBe(true)
  })

  test('direction', () => {
    const wrapper = mount({
      data: () => ({ direction: 'horizontal' }),
      render() {
        return (
          <Container direction={this.direction}>
            <Header />
            <Main />
          </Container>
        )
      },
    })

    expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(false)
    wrapper.vm.direction = 'vertical'
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(true)
    })
  })
})

describe('Header', () => {
  test('create header', () => {
    const wrapper = mount(() => <Header />)
    expect(wrapper.classes()).toContain('el-header')
  })

  test('header height', () => {
    const wrapper = mount(() => <Header height="100px" />)
    const vm = wrapper.vm
    expect(getCssVariable(vm.$el, '--el-header-height')).toEqual('100px')
  })
})

describe('Aside', () => {
  test('aside create', () => {
    const wrapper = mount(() => <Aside />)
    expect(wrapper.classes()).toContain('el-aside')
  })

  test('aside width', () => {
    const wrapper = mount(() => <Aside width="200px" />)
    const vm = wrapper.vm
    expect(getCssVariable(vm.$el, '--el-aside-width')).toEqual('200px')
  })
})

describe('Main', () => {
  test('main create', () => {
    const wrapper = mount(() => <Main />)
    expect(wrapper.classes()).toContain('el-main')
  })
})

describe('Footer', () => {
  test('footer create', () => {
    const wrapper = mount(() => <Footer />)
    expect(wrapper.classes()).toContain('el-footer')
  })

  test('footer height', () => {
    const wrapper = mount(() => <Footer height="100px" />)
    const vm = wrapper.vm
    expect(getCssVariable(vm.$el, '--el-footer-height')).toEqual('100px')
  })
})

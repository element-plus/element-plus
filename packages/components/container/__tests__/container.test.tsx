import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { getCssVariable } from '@element-plus/test-utils/dom'

import Container from '../src/container.vue'
import Header from '../src/header.vue'
import Main from '../src/main.vue'
import Aside from '../src/aside.vue'
import Footer from '../src/footer.vue'

const AXIOM = 'Rem is the best girl'

describe('Container.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <Container
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('vertical', () => {
    const wrapper = mount(() => (
      <Container>
        <Header></Header>
        <Main></Main>
      </Container>
    ))
    expect(wrapper.classes('is-vertical')).toBe(true)
  })

  test('direction', async () => {
    const direction = ref('horizontal')
    const wrapper = mount(() => (
      <Container direction={direction.value}>
        <Header></Header>
        <Main></Main>
      </Container>
    ))
    expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(false)
    direction.value = 'vertical'
    await nextTick()
    expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(true)
  })
})

describe('Header', () => {
  test('create header', () => {
    const wrapper = mount(() => <Header />)
    expect(wrapper.classes()).toContain('el-header')
  })

  test('header height', () => {
    const height = '100px'
    const wrapper = mount(() => <Header height={height} />)

    expect(getCssVariable(wrapper.vm.$el, '--el-header-height')).toEqual(height)
  })
})

describe('Aside', () => {
  test('aside create', () => {
    const wrapper = mount(() => <Aside />)
    expect(wrapper.classes()).toContain('el-aside')
  })

  test('aside width', () => {
    const width = '200px'
    const wrapper = mount(() => <Aside width={width} />)

    expect(getCssVariable(wrapper.vm.$el, '--el-aside-width')).toEqual(width)
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
    const height = '100px'
    const wrapper = mount(() => <Footer height={height} />)

    expect(getCssVariable(wrapper.vm.$el, '--el-footer-height')).toEqual(height)
  })
})

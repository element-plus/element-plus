import { mount } from '@vue/test-utils'
import Divider from '../src/divider.vue'

const AXIOM = 'Rem is the best girl'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toBe(AXIOM)
  })

  test('direction', () => {
    const wrapper = mount(Divider, {
      props: {
        direction: 'vertical',
      },
    })
    expect(wrapper.classes()).toContain('el-divider--vertical')
  })

  test('contentPosition', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
      props: {
        contentPosition: 'right',
      },
    })
    expect(wrapper.find('.el-divider__text').classes()).toContain('is-right')
  })

  test('customClass', () => {
    const wrapper = mount(Divider, {
      props: {
        class: 'customClass',
      },
    })
    expect(wrapper.classes()).toContain('customClass')
  })

  test('line-dashed', () => {
    const wrapper = mount(Divider, {
      props: {
        borderStyle: 'dashed',
      },
    })
    expect(
      getComputedStyle(wrapper.element, null).getPropertyValue(
        '--el-border-style'
      )
    ).toBe('dashed')
  })

  test('line-solid', () => {
    const wrapper = mount(Divider, {
      props: {
        direction: 'vertical',
      },
    })
    expect(
      getComputedStyle(wrapper.element, null).getPropertyValue(
        '--el-border-style'
      )
    ).toBe('solid')
  })
})

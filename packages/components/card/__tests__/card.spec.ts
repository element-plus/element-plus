import { mount } from '@vue/test-utils'
import Card from '../src/card.vue'

const AXIOM = 'Rem is the best girl'

describe('Card.vue', () => {
  test('render test', () => {
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('string header', () => {
    const header = 'I am header'
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
      },
      props: {
        header,
      },
    })
    expect(wrapper.text()).toContain(header)
  })

  test('vnode header', () => {
    const headerCls = 'header-text'
    const btnCls = 'test-btn'
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
        header: `<div>
          <span class="${headerCls}">card header</span>
          <button class="${btnCls}">click me</button>
        </div>`,
      },
    })
    expect(wrapper.find('.header-text').exists()).toBe(true)
    expect(wrapper.find('.test-btn').exists()).toBe(true)
  })

  test('body style', () => {
    const style = 'font-size: 14px;'
    const wrapper = mount(Card, {
      props: {
        slots: {
          default: AXIOM,
        },
        bodyStyle: style,
      },
    })
    expect(wrapper.find('.el-card__body').attributes('style')).toBe(style)
  })

  test('body style with object', () => {
    const style = { 'font-size': '14px' }
    const wrapper = mount(Card, {
      props: {
        slots: {
          default: AXIOM,
        },
        bodyStyle: style,
      },
    })
    expect(wrapper.find('.el-card__body').attributes('style')).toBe(
      'font-size: 14px;'
    )
  })

  test('body style with array', () => {
    const style = [{ 'font-size': '14px' }, { color: 'blue' }]
    const wrapper = mount(Card, {
      props: {
        slots: {
          default: AXIOM,
        },
        bodyStyle: style,
      },
    })
    expect(
      wrapper.find('.el-card__body').attributes('style').replace(/[ ]/g, '')
    ).toBe('font-size:14px;color:blue;')
  })

  test('shadow', () => {
    const shadow = 'test-shadow'
    const wrapper = mount(Card, {
      props: {
        slots: {
          default: AXIOM,
        },
        shadow,
      },
    })

    expect(wrapper.find(`.is-${shadow}-shadow`).exists()).toBe(true)
  })
})

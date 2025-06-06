import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Card from '../src/card.vue'

const AXIOM = 'Rem is the best girl'

describe('Card.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Card>{AXIOM}</Card>)

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('string header', () => {
    const header = 'I am header'
    const wrapper = mount(() => <Card header={header}>{AXIOM}</Card>)
    expect(wrapper.text()).toContain(header)
  })

  test('vnode header', () => {
    const headerCls = 'header-text'
    const btnCls = 'test-btn'
    const wrapper = mount(() => (
      <Card
        v-slots={{
          default: () => AXIOM,
          header: () => (
            <div>
              <span class={headerCls}>card header</span>
              <button class={btnCls}>click me</button>
            </div>
          ),
        }}
      />
    ))
    expect(wrapper.find('.header-text').exists()).toBe(true)
    expect(wrapper.find('.test-btn').exists()).toBe(true)
  })

  test('body style', () => {
    const style = 'font-size: 14px;'
    const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>)
    expect(wrapper.find('.el-card__body').attributes('style')).toBe(style)
  })

  test('body style with object', () => {
    const style = { 'font-size': '14px' }
    const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>)
    expect(wrapper.find('.el-card__body').attributes('style')).toBe(
      'font-size: 14px;'
    )
  })

  test('body style with array', () => {
    const style = [{ 'font-size': '14px' }, { color: 'blue' }]
    const wrapper = mount(() => <Card bodyStyle={style}>{AXIOM}</Card>)
    expect(
      wrapper.find('.el-card__body').attributes('style')?.replace(/[ ]/g, '')
    ).toBe('font-size:14px;color:blue;')
  })

  test('should render header-class, body-class and footer-class  props', async () => {
    const bodyClass = 'test-body-class'
    const headerClass = 'test-header-class'
    const footerClass = 'test-footer-class'
    const wrapper = mount(() => (
      <Card
        header-class={headerClass}
        body-class={bodyClass}
        footer-class={footerClass}
        v-slots={{ header: () => <div />, footer: () => <div /> }}
      />
    ))

    expect(wrapper.find('.el-card__body').classes()).toContain(bodyClass)
    expect(wrapper.find('.el-card__header').classes()).toContain(headerClass)
    expect(wrapper.find('.el-card__footer').classes()).toContain(footerClass)
  })

  test('shadow', () => {
    const shadow = 'always'
    const wrapper = mount(() => <Card shadow={shadow}>{AXIOM}</Card>)

    expect(wrapper.find(`.is-${shadow}-shadow`).exists()).toBe(true)
  })
})

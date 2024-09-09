import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Row from '@element-plus/components/row'
import Knob from '../src/knob.vue'

describe('Knob', () => {
  it('create', () => {
    const wrapper = mount(() => <Knob />)
    expect(wrapper.classes()).toContain('el-knob')
  })

  it('span', () => {
    const wrapper = mount(() => <Knob span={12} />)
    expect(wrapper.classes()).toContain('el-knob-12')
  })

  it('pull', () => {
    const wrapper = mount(() => <Knob span={12} pull={3} />)
    expect(wrapper.classes()).toContain('el-knob-pull-3')
  })

  it('push', () => {
    const wrapper = mount(() => <Knob span={12} push={3} />)
    expect(wrapper.classes()).toContain('el-knob-push-3')
  })

  it('gutter', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={20}>
            <Knob span={12} ref="knob"></Knob>
          </Row>
        )
      },
    })

    const knobElm = wrapper.findComponent({ ref: 'knob' })
      .element as HTMLElement
    expect(knobElm.style.paddingLeft === '10px').toBe(true)
    expect(knobElm.style.paddingRight === '10px').toBe(true)
  })

  it('change gutter value', async () => {
    const outer = ref(20)

    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={outer.value} ref="row">
            <Knob span={12} ref="knob" />
          </Row>
        )
      },
    })

    const rowElm = wrapper.findComponent({ ref: 'row' }).element as HTMLElement
    const knobElm = wrapper.findComponent({ ref: 'knob' })
      .element as HTMLElement
    expect(rowElm.style.marginLeft === '-10px').toBe(true)
    expect(rowElm.style.marginRight === '-10px').toBe(true)
    expect(knobElm.style.paddingLeft === '10px').toBe(true)
    expect(knobElm.style.paddingRight === '10px').toBe(true)

    outer.value = 40 // change gutter value
    await nextTick()
    expect(rowElm.style.marginLeft === '-20px').toBe(true)
    expect(rowElm.style.marginRight === '-20px').toBe(true)
    expect(knobElm.style.paddingLeft === '20px').toBe(true)
    expect(knobElm.style.paddingRight === '20px').toBe(true)
  })

  it('responsive', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={20}>
            <Knob
              ref="knob"
              sm={{ span: 4, offset: 2 }}
              md={8}
              lg={{ span: 6, offset: 3 }}
            />
          </Row>
        )
      },
    })

    const knobElmClass = wrapper.findComponent({ ref: 'knob' }).classes()
    expect(knobElmClass.includes('el-knob-sm-4')).toBe(true)
    expect(knobElmClass.includes('el-knob-sm-4')).toBe(true)
    expect(knobElmClass.includes('el-knob-sm-offset-2')).toBe(true)
    expect(knobElmClass.includes('el-knob-lg-6')).toBe(true)
    expect(knobElmClass.includes('el-knob-lg-offset-3')).toBe(true)
    expect(knobElmClass.includes('el-knob-md-8')).toBe(true)
  })
})

describe('Row', () => {
  test('create', () => {
    const wrapper = mount(() => <Row />)
    expect(wrapper.classes()).toContain('el-row')
  })

  test('gutter', () => {
    const wrapper = mount(() => <Row gutter={20} />)
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })
  test('justify', () => {
    const wrapper = mount(() => <Row justify="end" />)
    expect(wrapper.classes()).toContain('is-justify-end')
  })
  test('align', () => {
    const wrapper = mount(() => <Row align="bottom" />)
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})

import { mount } from '@vue/test-utils'
import ElRow from '../src/index'

describe('Row', () => {
  test('create', () => {
    const wrapper = mount(ElRow)
    expect(wrapper.classes()).toContain('el-row')
  })

  test('gutter', () => {
    const wrapper = mount(ElRow, {
      props: { gutter: 20 },
    })
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })
  test('type', () => {
    const wrapper = mount(ElRow, {
      props: { type: 'flex' },
    })
    expect(wrapper.classes()).toContain('el-row--flex')
  })
  test('justify', () => {
    const wrapper = mount(ElRow, {
      props: { justify: 'end' },
    })
    expect(wrapper.classes()).toContain('is-justify-end')
  })
  test('align', () => {
    const wrapper = mount(ElRow, {
      props: { align: 'bottom' },
    })
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})

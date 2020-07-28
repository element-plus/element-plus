import { mount } from '@vue/test-utils'
import Col from '../src/index'
import Row from '../../row/src/index'

describe('Col', () => {
  it('create', () => {
    const wrapper = mount(Col)
    expect(wrapper.classes()).toContain('el-col')
  })

  it('span', () => {
    const wrapper = mount(Col, {
      props: { span: 12 },
    })
    expect(wrapper.classes()).toContain('el-col-12')
  })

  it('pull', () => {
    const wrapper = mount(Col, {
      props: { span: 12, pull: 3 },
    })
    expect(wrapper.classes()).toContain('el-col-pull-3')
  })

  it('push', () => {
    const wrapper = mount(Col, {
      props: { span: 12, push: 3 },
    })
    expect(wrapper.classes()).toContain('el-col-push-3')
  })

  it('gutter', () => {
    const TestComponent = {
      template: `<el-row :gutter="20">
      <el-col :span="12" ref="col"></el-col>
    </el-row>`,
      components: {
        'el-col': Col,
        'el-row':Row,
      },
    }
    const wrapper = mount(TestComponent)
    const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(colElm.style.paddingLeft === '10px').toBe(true)
    expect(colElm.style.paddingRight === '10px').toBe(true)
  })
  it('responsive', () => {
    const TestComponent = {
      template: `<el-row :gutter="20">
      <el-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
      </el-col>
    </el-row>`,
      components: {
        'el-col': Col,
        'el-row':Row,
      },
    }
    const wrapper = mount(TestComponent)
    const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(colElm.classList.contains('el-col-sm-4')).toBe(true)
    expect(colElm.classList.contains('el-col-sm-offset-2')).toBe(true)
    expect(colElm.classList.contains('el-col-lg-6')).toBe(true)
    expect(colElm.classList.contains('el-col-lg-offset-3')).toBe(true)
    expect(colElm.classList.contains('el-col-md-8')).toBe(true)
  })
})

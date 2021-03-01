import { mount } from '@vue/test-utils'
import { h, ref, nextTick } from 'vue'
import Col from '../src/col'
import Row from '../src/row'

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

  it('change gutter value', async () => {
    const outer = ref(20)
    const App = {
      setup() {
        return () => {
          return h(Row, {
            gutter: outer.value,
            ref: 'row',
          }, [
            h(Col, {
              span: 12,
              ref: 'col',
            }),
          ])
        }
      },
    }

    const wrapper = mount(App)
    const rowElm = wrapper.findComponent({ ref: 'row' }).element as HTMLElement
    const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(rowElm.style.marginLeft === '-10px').toBe(true)
    expect(rowElm.style.marginRight === '-10px').toBe(true)
    expect(colElm.style.paddingLeft === '10px').toBe(true)
    expect(colElm.style.paddingRight === '10px').toBe(true)

    outer.value = 40 // change gutter value
    await nextTick()
    expect(rowElm.style.marginLeft === '-20px').toBe(true)
    expect(rowElm.style.marginRight === '-20px').toBe(true)
    expect(colElm.style.paddingLeft === '20px').toBe(true)
    expect(colElm.style.paddingRight === '20px').toBe(true)
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
    const colElmClass = wrapper.findComponent({ ref: 'col' }).classes()
    expect(colElmClass.includes('el-col-sm-4')).toBe(true)
    expect(colElmClass.includes('el-col-sm-4')).toBe(true)
    expect(colElmClass.includes('el-col-sm-offset-2')).toBe(true)
    expect(colElmClass.includes('el-col-lg-6')).toBe(true)
    expect(colElmClass.includes('el-col-lg-offset-3')).toBe(true)
    expect(colElmClass.includes('el-col-md-8')).toBe(true)
  })
})

describe('Row', () => {
  test('create', () => {
    const wrapper = mount(Row)
    expect(wrapper.classes()).toContain('el-row')
  })

  test('gutter', () => {
    const wrapper = mount(Row, {
      props: { gutter: 20 },
    })
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })
  test('type', () => {
    const wrapper = mount(Row, {
      props: { type: 'flex' },
    })
    expect(wrapper.classes()).toContain('el-row--flex')
  })
  test('justify', () => {
    const wrapper = mount(Row, {
      props: { justify: 'end' },
    })
    expect(wrapper.classes()).toContain('is-justify-end')
  })
  test('align', () => {
    const wrapper = mount(Row, {
      props: { align: 'bottom' },
    })
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})


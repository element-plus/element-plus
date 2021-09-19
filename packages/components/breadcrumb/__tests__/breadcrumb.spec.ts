import { mount } from '@vue/test-utils'
import Breadcrumb from '../src/breadcrumb.vue'
import BreadcrumbItem from '../src/breadcrumb-item.vue'

const _mount = (template: string) =>
  mount(
    {
      components: {
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem,
      },
      template,
    },
    {
      global: {
        provide: {
          breadcrumb: {},
        },
      },
    }
  )

describe('Breadcrumb.vue', () => {
  test('separator', () => {
    const wrapper = _mount(`
      <el-breadcrumb separator="?">
        <el-breadcrumb-item>A</el-breadcrumb-item>
      </el-breadcrumb>
    `)
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('?')
  })

  test('separatorClass', () => {
    const wrapper = _mount(`
      <el-breadcrumb separator="?" separatorClass="test">
        <el-breadcrumb-item>A</el-breadcrumb-item>
      </el-breadcrumb>
    `)
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
    expect(wrapper.find('.el-breadcrumb__separator').classes()).toContain(
      'test'
    )
  })

  test('to', () => {
    const wrapper = _mount(`
      <el-breadcrumb separator="?" separatorClass="test">
        <el-breadcrumb-item to="/index">A</el-breadcrumb-item>
      </el-breadcrumb>
    `)
    expect(wrapper.find('.el-breadcrumb__inner').classes()).toContain('is-link')
  })

  test('single', () => {
    const wrapper = _mount('<el-breadcrumb-item>A</el-breadcrumb-item>')
    expect(wrapper.find('.el-breadcrumb__inner').text()).toBe('A')
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
  })
})

import { mount } from '@vue/test-utils'
import Breadcrumb from '../src/index.vue'
import BreadcrumbItem from '../src/item.vue'

const config = {
  components: {
    'el-breadcrumb': Breadcrumb,
    'el-breadcrumb-item': BreadcrumbItem,
  },
}

describe('Breadcrumb.vue', () => {
  test('separator', () => {
    const wrapper = mount({
      ...config,
      template: `
        <el-breadcrumb separator="?">
          <el-breadcrumb-item>A</el-breadcrumb-item>
        </el-breadcrumb>
      `,
    })
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('?')
  })

  test('separatorClass', () => {
    const wrapper = mount({
      ...config,
      template: `
        <el-breadcrumb separator="?" separatorClass="test">
          <el-breadcrumb-item>A</el-breadcrumb-item>
        </el-breadcrumb>
      `,
    })
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
    expect(wrapper.find('.el-breadcrumb__separator').classes()).toContain('test')
  })

  test('to', () => {
    const wrapper = mount({
      ...config,
      template: `
        <el-breadcrumb separator="?" separatorClass="test">
          <el-breadcrumb-item to="/index">A</el-breadcrumb-item>
        </el-breadcrumb>
      `,
    })
    expect(wrapper.find('.el-breadcrumb__inner').classes()).toContain('is-link')
  })

  test('single', () => {
    const wrapper = mount({
      ...config,
      template: `
        <el-breadcrumb-item>A</el-breadcrumb-item>
      `,
    })
    expect(wrapper.find('.el-breadcrumb__inner').text()).toBe('A')
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
  })
})

import { mount } from '@vue/test-utils'
import { Check } from '@element-plus/icons-vue'
import Breadcrumb from '../src/breadcrumb.vue'
import BreadcrumbItem from '../src/breadcrumb-item.vue'

const _mount = (template: string) =>
  mount(
    {
      components: {
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem,
      },
      data() {
        return {
          Check,
        }
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

  test('separatorIcon', () => {
    const wrapper = _mount(
      `
      <el-breadcrumb :separatorIcon="Check">
        <el-breadcrumb-item>A</el-breadcrumb-item>
      </el-breadcrumb>
    `
    )
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
    expect(wrapper.findComponent(Check).exists()).toBe(true)
  })

  test('to', () => {
    const wrapper = _mount(`
      <el-breadcrumb separator="?" :separatorIcon="Check">
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

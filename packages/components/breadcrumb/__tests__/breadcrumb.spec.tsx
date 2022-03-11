import { mount } from '@vue/test-utils'
import { Check } from '@element-plus/icons-vue'
import Breadcrumb from '../src/breadcrumb.vue'
import BreadcrumbItem from '../src/breadcrumb-item.vue'
import type { VNode } from 'vue'

const _mount = (render: () => VNode) =>
  mount(render, {
    global: {
      provide: {
        breadcrumb: {},
      },
    },
  })

describe('Breadcrumb.vue', () => {
  test('separator', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separator="?">
        <BreadcrumbItem>A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('?')
  })

  test('separatorIcon', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separatorIcon={Check}>
        <BreadcrumbItem>A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
    expect(wrapper.findComponent(Check).exists()).toBe(true)
  })

  test('to', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separator="?" separatorIcon={Check}>
        <BreadcrumbItem to="/index">A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.el-breadcrumb__inner').classes()).toContain('is-link')
  })

  test('single', () => {
    const wrapper = _mount(() => <BreadcrumbItem>A</BreadcrumbItem>)
    expect(wrapper.find('.el-breadcrumb__inner').text()).toBe('A')
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
  })
})

import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { Check } from '@element-plus/icons-vue'
import Breadcrumb from '../src/breadcrumb.vue'
import BreadcrumbItem from '../src/breadcrumb-item.vue'
import type { VNode } from 'vue'

const _mount = (render: () => VNode, $router = {}) =>
  mount(render, {
    global: {
      provide: {
        breadcrumb: {},
      },
      config: {
        globalProperties: {
          $router,
        },
      },
    },
  })

describe('Breadcrumb.vue', () => {
  it('separator', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separator="?">
        <BreadcrumbItem>A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('?')
  })

  it('separatorIcon', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separatorIcon={Check}>
        <BreadcrumbItem>A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
    expect(wrapper.findComponent(Check).exists()).toBe(true)
  })

  it('to', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separator="?" separatorIcon={Check}>
        <BreadcrumbItem to="/index">A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.el-breadcrumb__inner').classes()).toContain('is-link')
  })

  it('single', () => {
    const wrapper = _mount(() => <BreadcrumbItem>A</BreadcrumbItem>)
    expect(wrapper.find('.el-breadcrumb__inner').text()).toBe('A')
    expect(wrapper.find('.el-breadcrumb__separator').text()).toBe('')
  })

  describe('BreadcrumbItem', () => {
    it('should set the last item as current page', () => {
      const wrapper = _mount(() => (
        <Breadcrumb>
          <BreadcrumbItem>A</BreadcrumbItem>
          <BreadcrumbItem>B</BreadcrumbItem>
        </Breadcrumb>
      ))

      const items = wrapper.findAllComponents(BreadcrumbItem)
      expect(items.at(1)!.element.getAttribute('aria-current')).toBe('page')
    })

    it('click event', async () => {
      const replace = vi.fn()
      const push = vi.fn()
      let wrapper = _mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/path">A</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          replace,
          push,
        }
      )
      await wrapper.find('.el-breadcrumb__inner').trigger('click')
      expect(push).toHaveBeenCalled()
      wrapper.unmount()
      wrapper = _mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/path" replace>
              A
            </BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          replace,
          push,
        }
      )

      await wrapper.find('.el-breadcrumb__inner').trigger('click')
      expect(replace).toHaveBeenCalled()
    })
  })
})

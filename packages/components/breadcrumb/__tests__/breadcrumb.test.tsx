import { nextTick, ref } from 'vue'
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
          // @ts-ignore
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

    it('should move aria-current to the new last item when items are appended', async () => {
      const items = ref(['A', 'B'])
      const wrapper = _mount(() => (
        <Breadcrumb>
          {items.value.map((item) => (
            <BreadcrumbItem key={item}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      ))

      await nextTick()
      expect(
        wrapper
          .findAll('.el-breadcrumb__item')
          .at(1)!
          .attributes('aria-current')
      ).toBe('page')

      items.value = ['A', 'B', 'C']
      await nextTick()

      const rendered = wrapper.findAll('.el-breadcrumb__item')
      expect(rendered).toHaveLength(3)
      expect(rendered.at(1)!.attributes('aria-current')).toBeUndefined()
      expect(rendered.at(2)!.attributes('aria-current')).toBe('page')
    })

    it('should keep aria-current on the last item when items are removed', async () => {
      const items = ref(['A', 'B', 'C'])
      const wrapper = _mount(() => (
        <Breadcrumb>
          {items.value.map((item) => (
            <BreadcrumbItem key={item}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumb>
      ))

      await nextTick()
      expect(
        wrapper
          .findAll('.el-breadcrumb__item')
          .at(2)!
          .attributes('aria-current')
      ).toBe('page')

      items.value = ['A']
      await nextTick()

      const rendered = wrapper.findAll('.el-breadcrumb__item')
      expect(rendered).toHaveLength(1)
      expect(rendered.at(0)!.attributes('aria-current')).toBe('page')
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

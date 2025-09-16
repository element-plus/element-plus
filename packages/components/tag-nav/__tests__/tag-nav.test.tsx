import { mount } from '@vue/test-utils'
import TagNavItem from '@element-plus/components/tag-nav/src/tag-nav-item.vue'
import TagNav from '@element-plus/components/tag-nav'
import { describe, expect, test, vi } from 'vitest'

import type { VNode } from 'vue'

const _mount = (render: () => VNode, $router = { push: vi.fn() }) =>
  mount(render, {
    global: {
      config: {
        globalProperties: {
          $router,
        },
      },
    },
  })

describe('TagNav', () => {
  test('should render correctly', () => {
    const wrapper = _mount(() => (
      <TagNav>
        <TagNavItem title="dashboard" name="dashboard" />
        <TagNavItem title="setting" name="setting" />
        <TagNavItem title="profile" name="profile" />
      </TagNav>
    ))

    const items = wrapper.findAllComponents(TagNavItem)
    expect(items.length).toBe(3)
    expect(items[0].find('.el-tag').text()).toBe('dashboard')
    expect(items[1].find('.el-tag').text()).toBe('setting')
    expect(items[2].find('.el-tag').text()).toBe('profile')
  })

  test('should activate item by modelValue', async () => {
    const wrapper = _mount(() => (
      <TagNav modelValue="setting">
        <TagNavItem title="dashboard" name="dashboard" />
        <TagNavItem title="setting" name="setting" />
        <TagNavItem title="profile" name="profile" />
      </TagNav>
    ))

    const activeItem = wrapper.find('.el-tag-nav-item--active')
    expect(activeItem.exists()).toBe(true)
    expect(activeItem.text()).toBe('setting')
  })

  test('should emit tagClick event when tag clicked', async () => {
    const wrapper = _mount(() => (
      <TagNav>
        <TagNavItem title="setting" name="setting" />
      </TagNav>
    ))

    const item = wrapper.findComponent(TagNavItem)
    await item.find('.el-tag').trigger('click')
    expect(item.emitted()).toHaveProperty('tagClick')
    expect(item.emitted('tagClick')?.[0]).toEqual(['setting'])
  })

  test('should emit tagRemove event when close button clicked', async () => {
    const wrapper = _mount(() => (
      <TagNav>
        <TagNavItem title="dashboard" name="dashboard" closable />
        <TagNavItem title="setting" name="setting" closable />
      </TagNav>
    ))
    const firstItem = wrapper.findAllComponents(TagNavItem)[0]
    await firstItem.find('.el-tag__close').trigger('click')

    expect(firstItem.emitted()).toHaveProperty('tagRemove')
    expect(firstItem.emitted('tagRemove')?.[0]).toEqual(['dashboard'])
  })

  test('should call router.push when clicked with routing enabled', async () => {
    const mockRouter = {
      push: vi.fn(),
      replace: vi.fn(),
      currentRoute: { value: {} }, // 避免路由警告
    }

    const wrapper = _mount(
      () => (
        <TagNav routing>
          <TagNavItem
            title="dashboard"
            name="dashboard"
            to={{ path: '/dashboard' }}
          />
        </TagNav>
      ),
      mockRouter
    )
    const item = wrapper.findComponent(TagNavItem)
    await item.find('.el-tag').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith({
      path: '/dashboard',
    })
    expect(mockRouter.replace).not.toHaveBeenCalled()
  })
})

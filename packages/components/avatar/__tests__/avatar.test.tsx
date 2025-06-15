import { markRaw, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { User } from '@element-plus/icons-vue'
import {
  IMAGE_FAIL,
  IMAGE_SUCCESS,
  mockImageEvent,
} from '@element-plus/test-utils/mock'

import Avatar from '../src/avatar.vue'

describe('Avatar.vue', () => {
  mockImageEvent()

  test('render test', () => {
    const wrapper = mount(() => <Avatar />)
    expect(wrapper.find('.el-avatar').exists()).toBe(true)
  })

  test('size is number', () => {
    const wrapper = mount(() => <Avatar size={50} />)
    expect(wrapper.attributes('style')).toContain('--el-avatar-size: 50px;')
  })

  test('size is string', () => {
    const wrapper = mount(() => <Avatar size="small" />)
    expect(wrapper.classes()).toContain('el-avatar--small')
  })

  test('shape', () => {
    const wrapper = mount(() => <Avatar size="small" shape="square" />)
    expect(wrapper.classes()).toContain('el-avatar--square')
  })

  test('icon avatar', () => {
    const wrapper = mount(() => <Avatar icon={markRaw(User)} />)
    expect(wrapper.classes()).toContain('el-avatar--icon')
    expect(wrapper.findComponent(User).exists()).toBe(true)
  })

  test('image avatar', () => {
    const wrapper = mount(() => <Avatar src={IMAGE_SUCCESS} />)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  test('image fallback', async () => {
    const wrapper = mount(
      <Avatar
        src={IMAGE_FAIL}
        v-slots={{
          default: () => 'fallback',
        }}
      />
    )

    await nextTick()
    wrapper.emitted('error') && expect(wrapper.emitted('error')).toBeDefined()
    await nextTick()
    expect(wrapper.text()).toBe('fallback')
    expect(wrapper.find('img').exists()).toBe(false)
  })

  test('image fit', () => {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
    for (const fit of fits) {
      const wrapper = mount(() => <Avatar fit={fit} src={IMAGE_SUCCESS} />)
      expect(wrapper.find('img').attributes('style')).toContain(
        `object-fit: ${fit};`
      )
    }
  })

  test('src changed', async () => {
    const wrapper = mount(
      <Avatar
        v-slots={{
          default: () => 'fallback',
        }}
      />
    )

    expect(wrapper.vm.hasLoadError).toBe(false)
    await wrapper.setProps({ src: IMAGE_FAIL })
    // wait error event trigger
    await nextTick()
    expect(wrapper.vm.hasLoadError).toBe(true)
    await wrapper.setProps({ src: IMAGE_SUCCESS })
    expect(wrapper.vm.hasLoadError).toBe(false)
    expect(wrapper.find('img').exists()).toBe(true)
  })
})

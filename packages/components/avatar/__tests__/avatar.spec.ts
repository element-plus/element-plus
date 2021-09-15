import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import {
  IMAGE_SUCCESS,
  IMAGE_FAIL,
  mockImageEvent,
} from '@element-plus/test-utils'

import Avatar from '../src/avatar.vue'

describe('Avatar.vue', () => {
  mockImageEvent()

  test('render test', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.find('.el-avatar').exists()).toBe(true)
  })

  test('size is number', () => {
    const wrapper = mount(Avatar, {
      props: { size: 50 },
    })
    expect(wrapper.attributes('style')).toContain('height: 50px')
  })

  test('size is string', () => {
    const wrapper = mount(Avatar, {
      props: { size: 'small' },
    })
    expect(wrapper.classes()).toContain('el-avatar--small')
  })

  test('shape', () => {
    const wrapper = mount(Avatar, {
      props: { size: 'small', shape: 'square' },
    })
    expect(wrapper.classes()).toContain('el-avatar--square')
  })

  test('icon avatar', () => {
    const wrapper = mount(Avatar, {
      props: { icon: 'el-icon-user-solid' },
    })
    expect(wrapper.classes()).toContain('el-avatar--icon')
    expect(wrapper.find('i').classes()).toContain('el-icon-user-solid')
  })

  test('image avatar', () => {
    const wrapper = mount(Avatar, {
      props: { src: IMAGE_SUCCESS },
    })
    expect(wrapper.find('img').exists()).toBe(true)
  })

  test('image fallback', async () => {
    const wrapper = mount(Avatar, {
      props: { src: IMAGE_FAIL },
      slots: { default: 'fallback' },
    })
    await nextTick()
    expect(wrapper.emitted('error')).toBeDefined()
    await nextTick()
    expect(wrapper.text()).toBe('fallback')
    expect(wrapper.find('img').exists()).toBe(false)
  })

  test('image fit', () => {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
    for (const fit of fits) {
      const wrapper = mount(Avatar, {
        props: { fit, src: IMAGE_SUCCESS },
      })
      expect(wrapper.find('img').attributes('style')).toContain(
        `object-fit: ${fit};`
      )
    }
  })

  test('src changed', async () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'fallback' },
    })
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

import { mount } from '@vue/test-utils'
import Image from '../src/index.vue'
import { nextTick } from 'vue'

import { IMAGE_SUCCESS, IMAGE_FAIL } from '../../test-utils/mock'


describe('Image.vue', () => {

  beforeAll(() => {
    Object.defineProperty(global.Image.prototype, 'src', {
      set(src) {
        const type = !src || src === IMAGE_FAIL ? 'error' : 'load'
        const event = new Event(type)
        nextTick(() => this.dispatchEvent(event))
      },
    })
  })

  test('render test', () => {
    const wrapper = mount(Image)
    expect(wrapper.find('.el-image').exists()).toBe(true)
  })

  test('image load success test', async () => {
    const alt = 'this ia alt'
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_SUCCESS,
        alt,
      },
    })
    await nextTick()
    expect(wrapper.find('.el-image__placeholder').exists()).toBe(true)
    await nextTick()
    expect(wrapper.find('.el-image__inner').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('.el-image__placeholder').exists()).toBe(false)
    expect(wrapper.find('.el-image__error').exists()).toBe(false)
  })

  test('image load error test', async () => {
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_FAIL,
      },
    })

    await nextTick()
    expect(wrapper.emitted('error')).toBeDefined()
    await nextTick()
    expect(wrapper.find('.el-image__inner').exists()).toBe(false)
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.el-image__error').exists()).toBe(true)
  })

  test('imageStyle fit test', async () => {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
    for (const fit of fits) {
      const wrapper = mount(Image, {
        props: { fit, src: IMAGE_SUCCESS },
      })
      await nextTick()
      await nextTick()
      expect(wrapper.find('img').attributes('style')).toContain(`object-fit: ${fit};`)
    }
  })

  test('preview classname test', async () => {
    const wrapper = mount(Image, {
      props: {
        fit: 'cover',
        src: IMAGE_SUCCESS,
        previewSrcList: new Array(3).fill(IMAGE_SUCCESS),
      },
    })
    await nextTick()
    await nextTick()
    expect(wrapper.find('img').classes()).toContain('el-image__preview')
  })


  test('$attrs', async () => {
    const alt = 'this ia alt'
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_SUCCESS,
        alt,
        referrerpolicy: 'origin',
      },
    })
    await nextTick()
    await nextTick()
    expect(wrapper.find('img').attributes('alt')).toBe(alt)
    expect(wrapper.find('img').attributes('referrerpolicy')).toBe('origin')
  })

  test('pass event listeners', async() => {
    let result = false
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_SUCCESS,
        onClick: (e) => result = true,
      },
    })
    await nextTick()
    await nextTick()
    const inner = wrapper.find('.el-image__inner').element as HTMLElement
    inner.click()
    expect(result).toBeTruthy()
  })

  //@todo lazy image test

  test('big image preview', async() => {
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_SUCCESS,
        previewSrcList: [IMAGE_SUCCESS],
      },
    })
    await nextTick()
    await nextTick()
    expect(wrapper.find('.el-image__inner').exists()).toBe(true)
    const inner = wrapper.find('.el-image__inner').element as HTMLElement
    inner.click()
    await nextTick()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    const close = wrapper.find('.el-image-viewer__close').element as HTMLElement
    close.click()
    await nextTick()
    expect(wrapper.find('.el-image-viewer__wrapper').exists()).toBe(false)
  })
})

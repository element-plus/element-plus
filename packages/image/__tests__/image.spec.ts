import { mount } from '@vue/test-utils'
import Image from '../src/index.vue'
import { nextTick } from 'vue'

import { IMAGE_SUCCESS, IMAGE_FAIL, mockImageEvent } from '../../test-utils/mock'

// firstly wait for image event
// secondly wait for vue render
async function doubleWait() {
  await nextTick()
  await nextTick()
}

describe('Image.vue', () => {
  mockImageEvent()

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
    expect(wrapper.find('.el-image__placeholder').exists()).toBe(true)
    await doubleWait()
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
    await doubleWait()
    expect(wrapper.emitted('error')).toBeDefined()
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
      await doubleWait()
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
    await doubleWait()
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
    await doubleWait()
    expect(wrapper.find('img').attributes('alt')).toBe(alt)
    expect(wrapper.find('img').attributes('referrerpolicy')).toBe('origin')
  })

  test('pass event listeners', async() => {
    let result = false
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_SUCCESS,
        onClick: () => result = true,
      },
    })
    await doubleWait()
    await wrapper.find('.el-image__inner').trigger('click')
    expect(result).toBeTruthy()
  })

  test('emit load event', async () => {
    const handleLoad = jest.fn()
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_SUCCESS,
        onLoad: handleLoad,
      },
    })
    await doubleWait()
    expect(wrapper.find('.el-image__inner').exists()).toBe(true)
    expect(handleLoad).toBeCalled()
  })

  //@todo lazy image test
})

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import {
  IMAGE_FAIL,
  IMAGE_SUCCESS,
  mockImageEvent,
} from '@element-plus/test-utils/mock'
import Image from '../src/image.vue'
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from 'vue'
import type { ImageProps } from '../src/image'

type ElImageProps = ImgHTMLAttributes &
  AnchorHTMLAttributes &
  Partial<ImageProps>

// firstly wait for image event
// secondly wait for vue render
async function doubleWait() {
  await nextTick()
  await nextTick()
}

const _mount = (template: string, data: Record<string, any>) =>
  mount({
    components: {
      [Image.name!]: Image,
    },
    template,
    data,
  })

describe('Image.vue', () => {
  mockImageEvent()

  test('render test', () => {
    const wrapper = mount(Image)
    expect(wrapper.find('.el-image').exists()).toBe(true)
  })

  test('image load success test', async () => {
    const alt = 'this ia alt'
    const wrapper = mount({
      setup() {
        const props: ElImageProps = {
          alt,
          src: IMAGE_SUCCESS,
        }
        return () => <Image {...props} />
      },
    })
    expect(wrapper.find('.el-image__placeholder').exists()).toBe(true)
    await doubleWait()
    expect(wrapper.find('.el-image__inner').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    await nextTick()
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
    wrapper.emitted('error') && expect(wrapper.emitted('error')).toBeDefined()
    expect(wrapper.find('.el-image__inner').exists()).toBe(false)
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.el-image__error').exists()).toBe(true)
  })

  test('image load sequence success test', async () => {
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_FAIL,
      },
    })
    wrapper.setProps({
      src: IMAGE_SUCCESS,
    })
    expect(wrapper.find('.el-image__placeholder').exists()).toBe(true)
    await doubleWait()
    expect(wrapper.emitted('error')).toBeUndefined()
    expect(wrapper.find('.el-image__inner').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('.el-image__placeholder').exists()).toBe(false)
    expect(wrapper.find('.el-image__error').exists()).toBe(false)
  })

  test('imageStyle fit test', async () => {
    const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
    for (const fit of fits) {
      const wrapper = mount(() => <Image src={IMAGE_SUCCESS} fit={fit} />)
      await doubleWait()
      expect(wrapper.find('img').attributes('style')).toContain(
        `object-fit: ${fit};`
      )
    }
  })

  test('preview classname test', async () => {
    const props: ElImageProps = {
      fit: 'cover',
      src: IMAGE_SUCCESS,
      previewSrcList: Array.from<string>({ length: 3 }).fill(IMAGE_SUCCESS),
    }
    const wrapper = mount(() => <Image {...props} />)
    await doubleWait()
    expect(wrapper.find('img').classes()).toContain('el-image__preview')
  })

  test('preview initial index test', async () => {
    const props: ElImageProps = {
      src: IMAGE_SUCCESS,
      previewSrcList: Array.from<string>({ length: 3 }).fill(IMAGE_FAIL),
      initialIndex: 1,
    }
    const wrapper = mount(() => <Image {...props} />)
    await doubleWait()
    await wrapper.find('.el-image__inner').trigger('click')
    expect(
      wrapper.findAll('.el-image-viewer__img')[1].attributes('style')
    ).not.toContain('display: none')
  })

  test('native loading attributes', async () => {
    const wrapper = mount(Image, {
      props: {
        src: IMAGE_SUCCESS,
        loading: 'eager',
      } as ElImageProps,
    })

    await doubleWait()
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('loading')).toBe('eager')

    await wrapper.setProps({ loading: undefined })
    expect(wrapper.find('img').attributes('loading')).toBe(undefined)
  })

  test('$attrs', async () => {
    const alt = 'this ia alt'
    const props: ElImageProps = {
      alt,
      src: IMAGE_SUCCESS,
      referrerpolicy: 'origin',
    }
    const wrapper = mount(() => <Image {...props} />)
    await doubleWait()
    expect(wrapper.find('img').attributes('alt')).toBe(alt)
    expect(wrapper.find('img').attributes('referrerpolicy')).toBe('origin')
  })

  test('pass event listeners', async () => {
    let result = false
    const props: ElImageProps = {
      src: IMAGE_SUCCESS,
      onClick: () => (result = true),
    }
    const wrapper = mount(() => <Image {...props} />)
    await doubleWait()
    await wrapper.find('.el-image__inner').trigger('click')
    expect(result).toBeTruthy()
  })

  test('emit load event', async () => {
    const handleLoad = vi.fn()
    const props: ElImageProps = {
      src: IMAGE_SUCCESS,
      onLoad: handleLoad,
    }
    const wrapper = mount(() => <Image {...props} />)
    await doubleWait()
    expect(wrapper.find('.el-image__inner').exists()).toBe(true)
    expect(handleLoad).toBeCalled()
  })

  test('manually open preview', async () => {
    const url = IMAGE_SUCCESS
    const srcList = Array.from<string>({ length: 3 }).fill(IMAGE_FAIL)
    const wrapper = _mount(
      `
      <el-image
        ref="imageRef"
        style="width: 100px; height: 100px"
        :src="url"
        :preview-src-list="srcList"
        :initial-index="1"
        fit="cover"
      />`,
      () => ({
        url,
        srcList,
      })
    )
    await doubleWait()
    wrapper.vm.$refs.imageRef.showPreview()
    await doubleWait()
    expect(
      wrapper.findAll('.el-image-viewer__img')[1].attributes('style')
    ).not.toContain('display: none')
  })
  //@todo lazy image test
})

import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { IMAGE_FAIL, IMAGE_SUCCESS } from '@element-plus/test-utils/mock'
import ImageViewer from '../src/image-viewer.vue'

async function doubleWait() {
  await nextTick()
  await nextTick()
}

describe('<image-viewer />', () => {
  test('big image preview', async () => {
    const wrapper = mount(<ImageViewer urlList={[IMAGE_SUCCESS]} />)

    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    await wrapper.find('.el-image-viewer__close').trigger('click')
    expect(wrapper.emitted('close')).toEqual([[]])
    wrapper.unmount()
  })

  test('image preview hide-click-on-modal', async () => {
    const wrapper = mount(<ImageViewer urlList={[IMAGE_SUCCESS]} />)

    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    await wrapper.find('.el-image-viewer__mask').trigger('click')
    expect(wrapper.emitted('close')).toBeUndefined()

    await wrapper.setProps({
      hideOnClickModal: true,
    })

    await wrapper.find('.el-image-viewer__mask').trigger('click')
    expect(wrapper.emitted('close')).toBeDefined()
    wrapper.unmount()
  })

  test('manually switch image', async () => {
    const wrapper = mount(
      <ImageViewer urlList={[IMAGE_SUCCESS, IMAGE_FAIL]} initialIndex={0} />
    )

    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)

    const img = wrapper.find('.el-image-viewer__img')
    expect(img.attributes('src')).toBe(IMAGE_SUCCESS)

    wrapper.vm.setActiveItem(1)
    await doubleWait()
    expect(wrapper.find('.el-image-viewer__img').attributes('src')).toBe(
      IMAGE_FAIL
    )
    expect(wrapper.findAll('.el-image-viewer__img').length).toBe(1)
    wrapper.unmount()
  })

  test('image progress render', async () => {
    const wrapper = mount(
      <ImageViewer
        showProgress
        urlList={[IMAGE_SUCCESS, IMAGE_SUCCESS]}
        initial-index={1}
      />
    )

    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    await wrapper.find('.el-image-viewer__next').trigger('click')
    await doubleWait()
    const innerText = wrapper.find('.el-image-viewer__progress').text()
    expect(innerText).toBe('1 / 2')
    wrapper.unmount()
  })
})

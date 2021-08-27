import ImageViewer from '../src/index.vue'
import { nextTick } from 'vue'

import { IMAGE_SUCCESS } from '@element-plus/test-utils/mock'
import makeMount from '@element-plus/test-utils/make-mount'

const mount = makeMount(ImageViewer, {
  props: {
    src: IMAGE_SUCCESS,
    urlList: [IMAGE_SUCCESS],
  },
})

async function doubleWait() {
  await nextTick()
  await nextTick()
}

describe('<image-viewer />', () => {

  test('big image preview', async() => {
    const wrapper = mount()
    await doubleWait()
    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    await wrapper.find('.el-image-viewer__close').trigger('click')
    expect(wrapper.emitted('close')).toEqual([[]])
  })

  test('image preview hide-click-on-modal', async () => {
    const wrapper = mount()

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

  })

})

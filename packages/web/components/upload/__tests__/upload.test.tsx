import { nextTick, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'

import { EVENT_CODE } from '@element-plus/constants'
import Upload from '../src/upload.vue'
import UploadContent from '../src/upload-content.vue'

const AXIOM = 'Rem is the best girl'

const mockGetFile = (element: HTMLInputElement, files: File[]) =>
  vi.spyOn(element, 'files', 'get').mockImplementation((): any => files)

describe('<upload />', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('render test', () => {
    test('basic rendering', async () => {
      const drag = ref(false)
      const wrapper = mount(() => <Upload drag={drag.value}>{AXIOM}</Upload>)
      expect(wrapper.text()).toEqual(AXIOM)

      drag.value = true
      await nextTick()
      expect(wrapper.find('.el-upload-dragger').exists()).toBe(true)
    })
  })

  describe('functionality', () => {
    test('works with keydown & click', async () => {
      const wrapper = mount(() => <UploadContent />)

      const onClick = vi.fn()
      wrapper.find('input').element.addEventListener('click', onClick)

      await wrapper.trigger('click')
      expect(onClick).toHaveBeenCalled()

      await wrapper.trigger('keydown', {
        key: EVENT_CODE.enter,
      })
      expect(onClick).toHaveBeenCalledTimes(2)

      await wrapper.trigger('keydown', {
        key: EVENT_CODE.space,
      })
      expect(onClick).toHaveBeenCalledTimes(3)
    })

    test('works when upload file exceeds the limit', async () => {
      const onExceed = vi.fn()
      const wrapper = mount(() => (
        <UploadContent onExceed={onExceed} limit={1} />
      ))
      const fileList = [
        new File(['content'], 'test-file.txt'),
        new File(['content'], 'test-file.txt'),
      ]
      mockGetFile(wrapper.find('input').element, fileList)

      await wrapper.find('input').trigger('change')
      expect(onExceed).toHaveBeenCalled()
    })

    test('onStart works', async () => {
      const onStart = vi.fn()
      const wrapper = mount(() => (
        <UploadContent onStart={onStart} autoUpload={false} />
      ))

      const fileList = [new File(['content'], 'test-file.txt')]
      mockGetFile(wrapper.find('input').element, fileList)
      await wrapper.find('input').trigger('change')

      expect(onStart).toHaveBeenCalled()
    })

    test('beforeUpload works for rejecting upload', async () => {
      const beforeUpload = vi.fn(() => Promise.reject())
      const onRemove = vi.fn()
      const wrapper = mount(() => (
        <UploadContent beforeUpload={beforeUpload} onRemove={onRemove} />
      ))
      const fileList = [new File(['content'], 'test-file.txt')]
      mockGetFile(wrapper.find('input').element, fileList)

      await wrapper.find('input').trigger('change')

      expect(beforeUpload).toHaveBeenCalled()
      await nextTick()
      expect(onRemove).toHaveBeenCalled()
    })

    test('beforeUpload works for resolving upload', async () => {
      const beforeUpload = vi.fn(() => Promise.resolve())
      const httpRequest = ref(vi.fn(() => Promise.resolve()))
      const onSuccess = vi.fn()
      const onError = vi.fn()

      const wrapper = mount(() => (
        <UploadContent
          beforeUpload={beforeUpload}
          httpRequest={httpRequest.value}
          onSuccess={onSuccess}
          onError={onError}
        />
      ))

      const fileList = [new File(['content'], 'test-file.txt')]
      mockGetFile(wrapper.find('input').element, fileList)

      await wrapper.find('input').trigger('change')

      expect(beforeUpload).toHaveBeenCalled()
      await flushPromises()
      expect(onSuccess).toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()

      vi.clearAllMocks()

      httpRequest.value = vi.fn(() => Promise.reject())
      await nextTick()

      await wrapper.find('input').trigger('change')

      expect(beforeUpload).toHaveBeenCalled()
      await flushPromises()
      expect(onSuccess).not.toHaveBeenCalled()
      expect(onError).toHaveBeenCalled()
    })

    test('onProgress should work', async () => {
      const onProgress = vi.fn()
      const httpRequest = vi.fn(({ onProgress }) => {
        onProgress()
        return Promise.resolve()
      })
      const wrapper = mount(
        <UploadContent httpRequest={httpRequest} onProgress={onProgress} />
      )

      const fileList = [new File(['content'], 'test-file.txt')]
      mockGetFile(wrapper.find('input').element, fileList)

      await wrapper.find('input').trigger('change')
      await nextTick()
      expect(onProgress).toHaveBeenCalled()
    })
  })
})

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

    // Ensure that the modified data in before-upload can be correctly passed into the upload request. (#12029)
    test('in beforeUpload change data correctly to request', async () => {
      const keyList: string[] = []
      const beforeUpload = vi.fn((file) => (data.value.key = file.name))
      const httpRequest = vi.fn((val) => {
        keyList.push(val?.data?.key)
        return Promise.resolve()
      })

      const data = ref({ key: '' })

      const wrapper = mount(() => (
        <UploadContent
          data={data.value}
          multiple={true}
          beforeUpload={beforeUpload}
          httpRequest={httpRequest}
        />
      ))

      const fileList = [
        new File(['content'], 'test-file.txt'),
        new File(['content2'], 'test-file2.txt'),
      ]
      mockGetFile(wrapper.find('input').element, fileList)

      await wrapper.find('input').trigger('change')

      expect(beforeUpload).toHaveBeenCalled()
      await flushPromises()

      expect(keyList).toEqual(['test-file.txt', 'test-file2.txt'])
    })

    test('in beforeUpload return promise change data correctly to request', async () => {
      const keyList: string[] = []
      const beforeUpload = vi.fn((file: File) => {
        return new Promise<File>((resolve) => {
          data.value.key = file.name
          resolve(file)
        })
      })
      const httpRequest = vi.fn((val) => {
        keyList.push(val?.data?.key)
        return Promise.resolve()
      })

      const data = ref({ key: '' })

      const wrapper = mount(() => (
        <UploadContent
          data={data.value}
          multiple={true}
          beforeUpload={beforeUpload}
          httpRequest={httpRequest}
        />
      ))

      const fileList = [
        new File(['content'], 'test-file.txt'),
        new File(['content2'], 'test-file2.txt'),
      ]
      mockGetFile(wrapper.find('input').element, fileList)

      await wrapper.find('input').trigger('change')

      expect(beforeUpload).toHaveBeenCalled()
      await flushPromises()

      expect(keyList).toEqual(['test-file.txt', 'test-file2.txt'])
    })

    test('upload files and save keyList', async () => {
      const keyList: string[] = []
      const beforeUpload = vi.fn((file: File) => {
        return new Promise<File>((resolve) => {
          data.value.key = file.name
          resolve(file)
        })
      })
      const httpRequest = vi.fn((val) => {
        keyList.push(val?.data?.key)
        return Promise.resolve()
      })

      const data = ref({ key: '' })

      const wrapper = mount(() => (
        <UploadContent
          data={data.value}
          multiple={true}
          beforeUpload={beforeUpload}
          httpRequest={httpRequest}
        />
      ))

      // upload the first file
      const firstFile = new File(['content'], 'test-file.txt')
      mockGetFile(wrapper.find('input').element, [firstFile])
      await wrapper.find('input').trigger('change')
      await flushPromises()

      // upload the second file
      const secondFile = new File(['content2'], 'test-file2.txt')
      mockGetFile(wrapper.find('input').element, [firstFile, secondFile])
      await wrapper.find('input').trigger('change')
      await flushPromises()

      // check the keyList after uploading both files
      expect(keyList).toEqual([
        'test-file.txt',
        'test-file.txt',
        'test-file2.txt',
      ])
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

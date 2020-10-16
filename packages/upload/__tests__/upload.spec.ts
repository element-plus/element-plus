import { nextTick } from 'vue'
import { on } from '@element-plus/utils/dom'
import { EVENT_CODE } from '../../utils/aria'

import makeMount from '../../test-utils/make-mount'
import Upload from '../src/upload.vue'

const AXIOM = 'Rem is the best girl'
const action = 'test-action'

interface MockFile {
  name: string
  body: string
  mimeType: string
}

const mockGetFile = (element: HTMLInputElement, files: File[]) => {
  Object.defineProperty(element, 'files', {
    get() {
      return files
    },
  })
}

const mount = makeMount(Upload, {
  props: {
    action,
  },
  slots: {
    default: () => AXIOM,
  },
})

describe('<upload />', () => {
  describe('render test', () => {
    test('basic rendering', async () => {
      const wrapper = mount()
      expect(wrapper.text()).toEqual(AXIOM)
      await wrapper.setProps({
        drag: true,
      })

      expect(wrapper.find('.el-upload-dragger').exists()).toBe(true)
    })
  })

  describe('functionality', () => {
    test('works with keydown & click', async () => {
      const wrapper = mount()

      const click = jest.fn()
      on(wrapper.find('input').element, 'click', click)

      await wrapper.trigger('click')
      expect(click).toHaveBeenCalled()
      await wrapper.trigger('keydown', {
        key: EVENT_CODE.enter,
      })
      expect(click).toHaveBeenCalledTimes(2)

      await wrapper.trigger('keydown', {
        key: EVENT_CODE.space,
      })
      expect(click).toHaveBeenCalledTimes(3)
    })

    test('works when upload file exceeds the limit', async () => {
      const onExceed = jest.fn()
      const wrapper = mount({
        props: {
          onExceed,
          limit: 1,
        },
      })
      const fileList = [
        new File(['content'], 'test-file.txt'),
        new File(['content'], 'test-file.txt'),
      ]
      mockGetFile(wrapper.find('input').element, fileList)

      await wrapper.find('input').trigger('change')
      expect(onExceed).toHaveBeenCalled()
    })

    test('onStart works', async () => {
      const onStart = jest.fn()
      const wrapper = mount({
        props: {
          onStart,
          autoUpload: false, // prevent auto upload
        },
      })
      const fileList = [new File(['content'], 'test-file.txt')]

      mockGetFile(wrapper.find('input').element, fileList)
      await wrapper.find('input').trigger('change')

      expect(onStart).toHaveBeenCalled()
    })

    test('beforeUpload works for rejecting upload', async () => {
      const beforeUpload = jest.fn(() => Promise.reject())
      const onRemove = jest.fn()
      const wrapper = mount({
        props: {
          beforeUpload,
          onRemove,
        },
      })
      const fileList = [new File(['content'], 'test-file.txt')]

      mockGetFile(wrapper.find('input').element, fileList)
      await wrapper.find('input').trigger('change')

      expect(beforeUpload).toHaveBeenCalled()
      await nextTick()
      expect(onRemove).toHaveBeenCalled()
    })

    test('beforeUpload works for resolving upload', async () => {
      const beforeUpload = jest.fn(() => Promise.resolve())
      const httpRequest = jest.fn(() => Promise.resolve())
      const onSuccess = jest.fn()
      const wrapper = mount({
        props: {
          beforeUpload,
          httpRequest,
          onSuccess,
        },
      })
      const fileList = [new File(['content'], 'test-file.txt')]

      mockGetFile(wrapper.find('input').element, fileList)
      await wrapper.find('input').trigger('change')

      expect(beforeUpload).toHaveBeenCalled()
      await nextTick()
      // await nextTick()
      expect(onSuccess).toHaveBeenCalled()

      const onError = jest.fn()
      await wrapper.setProps({
        httpRequest: jest.fn(() => Promise.reject()),
        onError,
      })
      await wrapper.find('input').trigger('change')
      await nextTick()
      expect(onError).toHaveBeenCalled()
    })

    test('onProgress should work', async () => {
      const onProgress = jest.fn()
      const httpRequest = jest.fn(({ onProgress }) => {
        onProgress()
        return Promise.resolve()
      })
      const wrapper = mount({
        props: {
          httpRequest,
          onProgress,
        },
      })
      const fileList = [new File(['content'], 'test-file.txt')]

      mockGetFile(wrapper.find('input').element, fileList)
      await wrapper.find('input').trigger('change')
      await nextTick()
      expect(onProgress).toHaveBeenCalled()
    })
  })
})

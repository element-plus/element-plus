import { computed, defineComponent, h, nextTick, provide } from 'vue'
import { flushPromises } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import makeMount from '@element-plus/test-utils/make-mount'
import { on } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'

import { uploadContextKey } from '@element-plus/tokens'
import UploadContent from '../src/upload-content.vue'

const AXIOM = 'Rem is the best girl'
const action = 'test-action'

const mockGetFile = (element: HTMLInputElement, files: File[]) => {
  Object.defineProperty(element, 'files', {
    get() {
      return files
    },
  })
}

const Wrapper = defineComponent({
  props: {
    action: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    provide(uploadContextKey, { accept: computed(() => 'video/*') })
    return () => h(UploadContent, props, slots)
  },
})

const mount = makeMount(Wrapper, {
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

      const click = vi.fn()
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
      const onExceed = vi.fn()
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
      const onStart = vi.fn()
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
      const beforeUpload = vi.fn(() => Promise.reject())
      const onRemove = vi.fn()
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
      const beforeUpload = vi.fn(() => Promise.resolve())
      const httpRequest = vi.fn(() => Promise.resolve())
      const onSuccess = vi.fn()

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
      await flushPromises()

      expect(onSuccess).toHaveBeenCalled()

      const onError = vi.fn()
      await wrapper.setProps({
        httpRequest: vi.fn(() => Promise.reject()),
        onError,
      })
      await wrapper.find('input').trigger('change')
      await flushPromises()
      expect(onError).toHaveBeenCalled()
    })

    test('onProgress should work', async () => {
      const onProgress = vi.fn()
      const httpRequest = vi.fn(({ onProgress }) => {
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

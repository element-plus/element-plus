import { computed, provide } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { uploadContextKey } from '@element-plus/tokens'
import UploadDragger from '../src/upload-dragger.vue'

const AXIOM = 'Rem is the best girl'

const _mount = (props = {}) =>
  mount({
    setup() {
      provide(uploadContextKey, { accept: computed(() => 'video/*') })
      return () => <UploadDragger {...props}>{AXIOM}</UploadDragger>
    },
  })

describe('<upload-dragger />', () => {
  describe('render test', () => {
    test('should render correct', () => {
      const wrapper = _mount()

      expect(wrapper.text()).toBe(AXIOM)
    })
  })

  describe('functionality', () => {
    test('onDrag works', async () => {
      const wrapper = _mount()
      await wrapper.find('.el-upload-dragger').trigger('dragover')
      expect(wrapper.classes('is-dragover')).toBe(true)
    })

    test('ondrop works for any given video type', async () => {
      const onDrop = vi.fn()
      const wrapper = _mount({ onDrop })
      const dragger = wrapper.findComponent(UploadDragger)

      await dragger.trigger('drop', {
        dataTransfer: {
          files: [
            {
              type: 'video/mp4',
              name: 'test.mp4',
            },
          ],
        },
      })
      expect(onDrop).toHaveBeenCalledTimes(1)
      expect(dragger.emitted('file')).toHaveLength(1)
      await dragger.trigger('drop', {
        dataTransfer: {
          files: [
            {
              type: 'video/mov',
              name: 'test.mov',
            },
          ],
        },
      })
      expect(dragger.emitted('file')).toHaveLength(2)
    })
  })
})

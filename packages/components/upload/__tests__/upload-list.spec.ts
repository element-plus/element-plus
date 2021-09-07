import { h } from 'vue'
import { EVENT_CODE } from '@element-plus/utils/aria'

import makeMount from '@element-plus/test-utils/make-mount'
import UploadList from '../src/upload-list.vue'

const testName = 'test name'

const mount = makeMount(UploadList, {
  props: {
    files: [new File([], testName)],
  },
})

describe('<upload-list />', () => {
  describe('render test', () => {
    test('should render correct', () => {
      const wrapper = mount({
        slots: {
          default: ({ file }: { file: File }) => h('div', null, file.name),
        },
      })
      expect(wrapper.text()).toBe(testName)
    })
  })

  describe('functionalities', () => {
    test('handle preview works', async () => {
      const preview = jest.fn()
      const wrapper = mount({
        props: {
          handlePreview: preview,
        },
      })

      await wrapper.find('.el-upload-list__item-name').trigger('click')
      expect(preview).toHaveBeenCalled()

      await wrapper.setProps({
        listType: 'picture-card',
      })

      await wrapper.find('.el-upload-list__item-preview').trigger('click')
      expect(preview).toHaveBeenCalledTimes(2)
    })

    test('handle delete works', async () => {
      const remove = jest.fn()

      const wrapper = mount({
        props: {
          onRemove: remove,
        },
      })

      await wrapper.find('.el-icon-close').trigger('click')
      expect(remove).toHaveBeenCalled()

      await wrapper.find('.el-upload-list__item').trigger('keydown', {
        key: EVENT_CODE.delete,
      })

      expect(remove).toHaveBeenCalledTimes(2)

      await wrapper.setProps({
        listType: 'picture-card',
      })

      await wrapper.find('.el-upload-list__item-delete').trigger('click')
      expect(remove).toHaveBeenCalledTimes(3)
    })
  })
})

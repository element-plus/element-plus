import { h, nextTick } from 'vue'
import makeMount from '@element-plus/test-utils/make-mount'
import { rAF } from '@element-plus/test-utils/tick'
import { EVENT_CODE } from '@element-plus/utils/aria'
import Message from '../src/message.vue'

import type { ComponentPublicInstance, CSSProperties } from 'vue'

const AXIOM = 'Rem is the best girl'

jest.useFakeTimers()

type MessageInstance = ComponentPublicInstance<{
  visible: boolean
  typeClass: string
  customStyle: CSSProperties
}>

const onClose = jest.fn()
const _mount = makeMount(Message, {
  props: {
    onClose,
  },
})

describe('Message.vue', () => {
  describe('render', () => {
    test('basic render test', () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      const vm = wrapper.vm as MessageInstance

      expect(wrapper.text()).toEqual(AXIOM)
      expect(vm.visible).toBe(true)
      expect(vm.typeClass).toBe('el-icon-info')
      expect(vm.customStyle).toEqual({ top: '20px', zIndex: 0 })
    })

    test('should be able to render VNode', () => {
      const wrapper = _mount({
        slots: {
          default: h('span', { class: 'text-node' }, AXIOM),
        },
      })

      expect(wrapper.find('.text-node').exists()).toBe(true)
    })

    test('should be able to render raw HTML with dangerouslyUseHTMLString prop', () => {
      const tagClass = 'test-class'
      const wrapper = _mount({
        props: {
          dangerouslyUseHTMLString: true,
          message: `<string class="${tagClass}"'>${AXIOM}</strong>`,
        },
      })

      expect(wrapper.find(`.${tagClass}`).exists()).toBe(true)
    })

    test('should not be able to render raw HTML without dangerouslyUseHTMLString prop', () => {
      const tagClass = 'test-class'
      const wrapper = _mount({
        props: {
          dangerouslyUseHTMLString: false,
          message: `<string class="${tagClass}"'>${AXIOM}</strong>`,
        },
      })

      expect(wrapper.find(`.${tagClass}`).exists()).toBe(false)
    })
  })

  describe('Message.type', () => {
    test('should be able to render typed messages', () => {
      for (const type of ['success', 'warning', 'info', 'error'] as const) {
        const wrapper = _mount({ props: { type } })

        const renderedClasses = wrapper.find('.el-message__icon').classes()
        expect(renderedClasses).toContain(`el-icon-${type}`)
      }
    })

    test('should not be able to render invalid type icon', () => {
      const type = 'some-type'
      const wrapper = _mount({ props: { type } })

      expect(wrapper.find(`el-icon-${type}`).exists()).toBe(false)
    })
  })

  describe('event handlers', () => {
    test('it should be able to close the message by clicking close button', async () => {
      const onClose = jest.fn()
      const wrapper = _mount({
        slots: { default: AXIOM },
        props: {
          onClose,
          showClose: true,
        },
      })

      const closeBtn = wrapper.find('.el-message__closeBtn')
      expect(closeBtn.exists()).toBe(true)
      await closeBtn.trigger('click')
      expect((wrapper.vm as MessageInstance).visible).toBe(false)
    })

    test('it should close after duration', async () => {
      const duration = 1000
      const wrapper = _mount({ props: { duration } })
      const vm = wrapper.vm as MessageInstance
      await nextTick()
      expect(vm.visible).toBe(true)
      jest.runAllTimers()
      await nextTick()
      expect(vm.visible).toBe(false)
    })

    test('it should prevent close when hovered', async () => {
      const duration = 1000
      const wrapper = _mount({ props: { duration } })
      const vm = wrapper.vm as MessageInstance
      expect(vm.visible).toBe(true)
      await wrapper.find('[role="alert"]').trigger('mouseenter')
      jest.runAllTimers()
      expect(vm.visible).toBe(true)
      await wrapper.find('[role="alert"]').trigger('mouseleave')
      expect(vm.visible).toBe(true)
      jest.runAllTimers()
      expect(vm.visible).toBe(false)
    })

    test('it should not close when duration is set to 0', () => {
      const duration = 0
      const wrapper = _mount({ props: { duration } })
      const vm = wrapper.vm as MessageInstance
      expect(vm.visible).toBe(true)
      jest.runAllTimers()
      expect(vm.visible).toBe(true)
    })

    test('it should close when esc is pressed', async () => {
      const wrapper = _mount({ slots: { default: AXIOM } })

      const event = new KeyboardEvent('keydown', {
        code: EVENT_CODE.esc,
      })
      document.dispatchEvent(event)

      expect((wrapper.vm as MessageInstance).visible).toBe(false)
    })

    test('it should call close after transition ends', async () => {
      const onClose = jest.fn()
      const wrapper = _mount({
        slots: { default: AXIOM },
        props: { onClose },
      })
      await rAF()
      const vm = wrapper.vm as MessageInstance
      vm.visible = false
      await rAF()

      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})

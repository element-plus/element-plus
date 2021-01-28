import { h, nextTick } from 'vue'
import Message from '../src/index.vue'
import * as domExports from '../../utils/dom'
import { mount } from '@vue/test-utils'
import { EVENT_CODE } from '@element-plus/utils/aria'

const AXIOM = 'Rem is the best girl'

jest.useFakeTimers()

const _mount = (props: Record<string, unknown>) => {
  const onClose = jest.fn()
  return mount(Message, {
    ...props,
    props: {
      onClose,
      ...(props.props as Record<string, unknown>),
    },
  })
}

describe('Message.vue', () => {
  describe('render', () => {
    test('basic render test', () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      expect(wrapper.text()).toEqual(AXIOM)
      expect(wrapper.vm.visible).toBe(true)
      expect(wrapper.vm.typeClass).toBe('el-message__icon el-icon-info')
      expect(wrapper.vm.customStyle).toEqual({ top: '20px', zIndex: 0 })
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

  describe('lifecycle', () => {
    test('should add keydown event lister on mount', () => {
      jest.spyOn(domExports, 'on')
      jest.spyOn(domExports, 'off')
      const wrapper = _mount({
        slots: { default: AXIOM },
      })
      expect(domExports.on).toHaveBeenCalledWith(
        document,
        'keydown',
        wrapper.vm.keydown,
      )
      wrapper.unmount()
      expect(domExports.off).toHaveBeenCalled()
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

      expect(wrapper.find('.el-message__icon').exists()).toBe(false)
    })
  })

  describe('event handlers', () => {
    test('it should be able to close the message by clicking close button', () => {
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
      wrapper.vm.visible = false
      wrapper.vm.onClose()
      expect(onClose).toHaveBeenCalled()
    })

    test('it should close after duration', () => {
      const duration = 1000
      const wrapper = _mount({ props: { duration } })
      wrapper.vm.close = jest.fn()
      expect(wrapper.vm.timer).not.toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      jest.runAllTimers()
      expect(wrapper.vm.close).toHaveBeenCalled()
    })

    test('it should prevent close when hovered', async () => {
      const duration = 1000
      const wrapper = _mount({ props: { duration } })
      expect(wrapper.vm.timer).not.toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      await wrapper.find('[role="alert"]').trigger('mouseenter')
      jest.runAllTimers()
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      await wrapper.find('[role="alert"]').trigger('mouseleave')
      expect(wrapper.vm.timer).not.toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      jest.runAllTimers()
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(true)
    })

    test('it should not close when duration is set to 0', () => {
      const duration = 0
      const wrapper = _mount({ props: { duration } })
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      jest.runAllTimers()
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(false)
    })

    test('it should close when esc is pressed', async () => {
      const wrapper = _mount({ slots: { default: AXIOM } })

      const event = new KeyboardEvent('keydown', {
        code: EVENT_CODE.esc,
      })
      const oldClose = wrapper.vm.close
      wrapper.vm.close = jest.fn(() => oldClose())
      document.dispatchEvent(event)

      expect(wrapper.vm.closed).toBe(true)
      expect(wrapper.vm.close).toHaveBeenCalledTimes(1)
    })

    test('it should call close after transition ends', async () => {
      const onClose = jest.fn()
      const wrapper = _mount({
        slots: { default: AXIOM },
        props: { onClose },
      })

      expect(wrapper.vm.closed).toBe(false)
      wrapper.vm.close()
      expect(wrapper.vm.closed).toBe(true)
      await nextTick()
      await wrapper.vm.onClose()
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})

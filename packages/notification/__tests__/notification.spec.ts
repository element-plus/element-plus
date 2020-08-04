import { mount } from '@vue/test-utils'
import { h } from 'vue'
import * as domExports from '../../utils/dom'
import { eventKeys } from '../../utils/aria'
import Notification from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

jest.useFakeTimers()

const _mount = (props: Record<string, unknown>) => {
  const onClose = jest.fn()
  return mount(Notification, {
    ...props,
    props: {
      onClose,
      ...props.props as Record<string, unknown>,
    },
  })
}

describe('Notification.vue', () => {

  describe('render', () => {
    test('basic render test', () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })
      expect(wrapper.text()).toEqual(AXIOM)
      expect(wrapper.vm.visible).toBe(true)
      expect(wrapper.vm.typeClass).toBe('')
      expect(wrapper.vm.horizontalClass).toBe('right')
      expect(wrapper.vm.verticalProperty).toBe('top')
      expect(wrapper.vm.positionStyle).toEqual({ top: 0 })
    })

    test('should be able to render VNode', () => {
      const wrapper = _mount({
        slots: {
          default: h('span', {
            class: 'text-node',
          }, AXIOM),
        },
      })

      expect(wrapper.find('.text-node').exists()).toBe(true)
    })

    test('should be able to render raw HTML tag with dangerouslyUseHTMLString flag', () => {
      const tagClass = 'test-class'
      const HTMLWrapper = _mount({
        props: {
          dangerouslyUseHTMLString: true,
          message: `<strong class=${tagClass}>${AXIOM}</strong>`,
        },
      })

      expect(HTMLWrapper.find(`.${tagClass}`).exists()).toBe(true)
    })

    test('should not be able to render raw HTML tag without dangerouslyUseHTMLString flag', () => {
      const tagClass = 'test-class'
      const HTMLWrapper = _mount({
        props: {
          dangerouslyUseHTMLString: false,
          message: `<strong class=${tagClass}>${AXIOM}</strong>`,
        },
      })

      expect(HTMLWrapper.find(`.${tagClass}`).exists()).toBe(false)
    })
  })

  describe('lifecycle', () => {
    let onMock
    let offMock
    beforeEach(() => {
      onMock = jest.spyOn(domExports, 'on').mockReset()
      offMock = jest.spyOn(domExports, 'off').mockReset()
    })

    afterEach(() => {
      onMock.mockRestore()
      offMock.mockRestore()
    })

    test('should call init function when it\'s provided', () => {
      const _init = jest.fn()
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
        props: {
          _init,
          _idx: 0,
        },
      })
      expect(_init).toHaveBeenCalled()
      wrapper.unmount()
    })

    test('should add event listener to target element when init', () => {

      jest.spyOn(domExports, 'on')
      jest.spyOn(domExports, 'off')
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })
      expect(domExports.on).toHaveBeenCalledWith(document, 'keydown', wrapper.vm.keydown)
      wrapper.unmount()
      expect(domExports.off).toHaveBeenCalled()
    })
  })

  describe('Notification.type', () => {
    test('should be able to render success notification', () => {
      const type = 'success'
      const wrapper = _mount({
        props: {
          type,
        },
      })

      expect(wrapper.find(`.el-icon-${type}`).exists()).toBe(true)
    })

    test('should be able to render warning notification', () => {
      const type = 'warning'
      const wrapper = _mount({
        props: {
          type,
        },
      })

      expect(wrapper.find(`.el-icon-${type}`).exists()).toBe(true)
    })

    test('should be able to render info notification', () => {
      const type = 'info'
      const wrapper = _mount({
        props: {
          type,
        },
      })

      expect(wrapper.find(`.el-icon-${type}`).exists()).toBe(true)
    })

    test('should be able to render error notification', () => {
      const type = 'error'
      const wrapper = _mount({
        props: {
          type,
        },
      })

      expect(wrapper.find(`.el-icon-${type}`).exists()).toBe(true)
    })

    test('should not be able to render invalid type icon', () => {
      const type = 'some-type'
      const wrapper = _mount({
        props: {
          type,
        },
      })

      expect(wrapper.find(`.el-icon-${type}`).exists()).toBe(false)
    })
  })

  describe('event handlers', () => {
    test('it should be able to close the notification by clicking close button', async () => {
      const onClose = jest.fn()
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
        props: { onClose },
      })

      const closeBtn = wrapper.find('.el-notification__closeBtn')
      expect(closeBtn.exists()).toBe(true)
      await closeBtn.trigger('click')
      expect(onClose).toHaveBeenCalled()
    })

    test('should be able to close after duration', () => {
      const duration = 100
      const wrapper = _mount({
        props: {
          duration,
        },
      })
      wrapper.vm.close = jest.fn()
      // jest.spyOn(wrapper.vm, 'close')
      expect(wrapper.vm.timer).not.toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      jest.runAllTimers()
      expect(wrapper.vm.close).toHaveBeenCalled()
    })

    test('should be able to prevent close itself when hover over', async () => {
      const duration = 100
      const wrapper = _mount({
        props: {
          duration,
        },
      })
      expect(wrapper.vm.timer).not.toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      await wrapper.find('[role=alert]').trigger('mouseenter')
      jest.runAllTimers()
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      await wrapper.find('[role=alert]').trigger('mouseleave')
      expect(wrapper.vm.timer).not.toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      jest.runAllTimers()
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(true)
    })

    test('should not be able to close when duration is set to 0', () => {
      const duration = 0
      const wrapper = _mount({
        props: {
          duration,
        },
      })
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(false)
      jest.runAllTimers()
      expect(wrapper.vm.timer).toBe(null)
      expect(wrapper.vm.closed).toBe(false)
    })

    test('should be able to handle click event', async () => {
      const wrapper = _mount({
        props: {
          duration: 0,
        },
      })
      await wrapper.trigger('click')
      expect(wrapper.emitted('click')).toHaveLength(1)
    })

    test('should be able to delete timer when press delete', async () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      // disable eslint to allow us using any, due to the lack of KeyboardEventInit member `keyCode`
      // see https://github.com/Microsoft/TypeScript/issues/15228
      const event = new KeyboardEvent('keydown', {
        keyCode: eventKeys.backspace,
        babels: true,
      // eslint-disable-next-line
      } as any)
      document.dispatchEvent(event)

      jest.runOnlyPendingTimers()
      expect(wrapper.vm.closed).toBe(false)
      expect(wrapper.emitted('close')).toBeUndefined()
    })

    test('should be able to close the notification immediately when press esc', async () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      // Same as above
      const event = new KeyboardEvent('keydown', {
        keyCode: eventKeys.esc,
        // eslint-disable-next-line
      } as any)
      document.dispatchEvent(event)
      jest.runAllTimers()
      expect(wrapper.vm.closed).toBe(true)
      expect(wrapper.emitted('close')).toHaveLength(1)
    })
  })
})

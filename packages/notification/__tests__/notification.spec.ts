import { VueWrapper } from '@vue/test-utils'
import { h, ComponentPublicInstance, nextTick } from 'vue'
import * as domExports from '@element-plus/utils/dom'
import { EVENT_CODE } from '@element-plus/utils/aria'
import Notification from '../src/index.vue'
import makeMount from '@element-plus/test-utils/make-mount'
import { rAF } from '@element-plus/test-utils/tick'
import PopupManager from '@element-plus/utils/popup-manager'

const AXIOM = 'Rem is the best girl'

jest.useFakeTimers()

const onClose = jest.fn()

const _mount = makeMount(Notification, {
  props: {
    onClose,
  },
})

describe('Notification.vue', () => {
  describe('render', () => {
    test('basic render test', () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{
        visible: boolean
        typeClass: string
        horizontalClass: string
        positionStyle: Record<string, string>
      }>

      expect(wrapper.text()).toEqual(AXIOM)
      expect(vm.visible).toBe(true)
      expect(vm.typeClass).toBe('')
      expect(vm.horizontalClass).toBe('right')
      expect(vm.positionStyle).toEqual({ top: '0px','z-index': 0 })
    })

    test('should be able to render VNode', () => {
      const wrapper = _mount({
        slots: {
          default: h(
            'span',
            {
              class: 'text-node',
            },
            AXIOM,
          ),
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

    test('should be able to render z-index style with zIndex flag', () => {
      const zIndex = PopupManager.nextZIndex()
      const wrapper = _mount({
        props:{
          zIndex: zIndex,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{
        positionStyle: Record<string, string>
      }>

      expect(vm.positionStyle).toEqual({ top: '0px','z-index': zIndex })
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

    test('should add event listener to target element when init', () => {
      jest.spyOn(domExports, 'on')
      jest.spyOn(domExports, 'off')
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })
      expect(domExports.on).toHaveBeenCalled()
      wrapper.unmount()
      expect(domExports.off).toHaveBeenCalled()
    })
  })

  describe('Notification.type', () => {
    test('should be able to render typed notification', () => {
      let wrapper: VueWrapper<ComponentPublicInstance>

      for (const type of ['success', 'warning', 'info', 'error']) {
        wrapper = _mount({
          props: {
            type,
          },
        })
        expect(wrapper.find('.el-notification__icon').classes()).toContain(
          `el-icon-${type}`,
        )
      }
    })

    test('should not be able to render invalid type icon', () => {
      const type = 'some-type'
      const wrapper = _mount({
        props: {
          type,
        },
      })

      expect(wrapper.find('.el-notification__icon').classes()).not.toContain(
        `el-icon-${type}`,
      )
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
      await rAF()

      const closeBtn = wrapper.find('.el-notification__closeBtn')
      expect(closeBtn.exists()).toBe(true)
      await closeBtn.trigger('click')
      await rAF()
      await nextTick()
      expect(onClose).toHaveBeenCalled()
    })

    test('should be able to close after duration', async () => {
      const duration = 100
      const wrapper = _mount({
        props: {
          duration,
        },
      })
      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean; }>

      jest.runAllTimers()

      await rAF()
      expect(vm.visible).toBe(false)
    })

    test('should be able to prevent close itself when hover over', async () => {
      const duration = 100
      const wrapper = _mount({
        props: {
          duration,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean; }>

      await rAF()
      await wrapper.find('[role=alert]').trigger('mouseenter')
      jest.runAllTimers()
      expect(vm.visible).toBe(true)
      await wrapper.find('[role=alert]').trigger('mouseleave')
      // expect(wrapper.vm.timer).not.toBe(null)
      expect(vm.visible).toBe(true)
      // expect(wrapper.vm.closed).toBe(false)
      jest.runAllTimers()
      expect(vm.visible).toBe(false)
      // expect(wrapper.vm.timer).toBe(null)
      // expect(wrapper.vm.closed).toBe(true)
    })

    test('should not be able to close when duration is set to 0', async () => {
      const duration = 0
      const wrapper = _mount({
        props: {
          duration,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean; }>
      await rAF()
      expect(vm.visible).toBe(true)
      jest.runAllTimers()

      await rAF()
      expect(vm.visible).toBe(true)
    })

    test('should be able to handle click event', async () => {
      const onClick = jest.fn()
      const wrapper = _mount({
        props: {
          duration: 0,
          onClick,
        },
      })

      await wrapper.trigger('click')
      await rAF()
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    test('should be able to delete timer when press delete', async () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean; }>

      const event = new KeyboardEvent('keydown', {
        code: EVENT_CODE.backspace,
        babels: true,
      } as any)
      document.dispatchEvent(event)

      jest.runOnlyPendingTimers()
      await rAF()
      expect(vm.visible).toBe(true)
    })

    test('should be able to close the notification immediately when press esc', async () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })
      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean; }>
      // Same as above
      const event = new KeyboardEvent('keydown', {
        code: EVENT_CODE.esc,
        // eslint-disable-next-line
      } as any)

      document.dispatchEvent(event)
      jest.runAllTimers()
      await rAF()
      expect(vm.visible).toBe(false)
    })
  })
})

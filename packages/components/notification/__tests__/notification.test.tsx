import { nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import { TypeComponentsMap } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { notificationTypes } from '../src/notification'
import {
  __mount,
  _mount,
  hasVisibility,
  isClosed,
  isOpen,
} from './wrapper.utils'
import { mockAnimationsApi } from './mock-animations-api'
import type { NotificationTimerControls } from '../src/notification'
import type { NotificationVueWrapper } from './wrapper.utils'

const AXIOM = 'Rem is the best girl'

const findNotification = (wrapper: NotificationVueWrapper) =>
  wrapper.find('[role=alert]')

describe('Notification.vue', () => {
  mockAnimationsApi()

  describe('render', () => {
    test('basic render test', () => {
      const wrapper = _mount({
        slots: {
          default: () => AXIOM,
        },
      })
      expect(wrapper.text()).toEqual(AXIOM)
      expect(wrapper).toSatisfy(isOpen)
      expect((wrapper.vm as any).iconComponent).toBeUndefined()
      expect((wrapper.vm as any).horizontalClass).toBe('right')
      expect((wrapper.vm as any).positionStyle).toEqual(
        expect.objectContaining({
          top: '0px',
        })
      )
    })

    test('should be able to render VNode', () => {
      const wrapper = _mount({
        slots: {
          default: () => <span class="text-node">{AXIOM}</span>,
        },
      })
      expect(wrapper.find('.text-node').exists()).toBe(true)
    })

    test('should be able to render raw HTML tag with dangerouslyUseHTMLString flag', () => {
      const tagClass = 'test-class'
      const HTMLWrapper = __mount({
        dangerouslyUseHTMLString: true,
        message: `<strong class=${tagClass}>${AXIOM}</strong>`,
      })
      expect(HTMLWrapper.find(`.${tagClass}`).exists()).toBe(true)
    })

    test('should not be able to render raw HTML tag without dangerouslyUseHTMLString flag', () => {
      const tagClass = 'test-class'
      const HTMLWrapper = __mount({
        dangerouslyUseHTMLString: false,
        message: `<strong class=${tagClass}>${AXIOM}</strong>`,
      })
      expect(HTMLWrapper.find(`.${tagClass}`).exists()).toBe(false)
    })

    test('should be able to render z-index style with zIndex flag', async () => {
      const wrapper = __mount({ zIndex: 9999 })
      await nextTick()
      expect((wrapper.vm as any).positionStyle).toEqual(
        expect.objectContaining({
          top: '0px',
          zIndex: 9999,
        })
      )
    })
  })

  describe('Notification.type', () => {
    test.for(notificationTypes)(
      "should be able to render typed notification when { type: '%s' }",
      (type) => {
        const wrapper = __mount({ type })
        const typeComponent = wrapper.findComponent(TypeComponentsMap[type])
        expect(typeComponent.exists()).toBe(true)
      }
    )

    const findIcon = (wrapper: NotificationVueWrapper) =>
      wrapper.find('.el-notification__icon')

    test('should not be able to render invalid type icon', () => {
      const consoleWarn = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => vi.fn)
      // @ts-expect-error
      const wrapper = __mount({ type: 'some-type' })
      expect(findIcon(wrapper).exists()).toBe(false)
      expect(consoleWarn).toHaveBeenCalled()
      consoleWarn.mockRestore()
    })
  })

  const findCloseButton = (wrapper: NotificationVueWrapper) =>
    wrapper.find('.el-notification__closeBtn')

  describe('event handlers', () => {
    test('should be able to close the notification by clicking close button', async () => {
      const onClose = vi.fn()
      const wrapper = _mount({
        slots: {
          default: () => AXIOM,
        },
        props: { onClose },
      })
      await nextTick()
      const closeButton = findCloseButton(wrapper)
      expect(closeButton.exists()).toBe(true)
      await closeButton.trigger('click')
      expect(onClose).toHaveBeenCalled()
    })

    test('should be able to close after duration', async () => {
      vi.useFakeTimers()
      const wrapper = __mount({ duration: 100 })
      vi.runAllTimers()
      await vi.waitFor(() => {
        expect(wrapper).toSatisfy(isClosed)
      })
      vi.useRealTimers()
    })

    test('should be able to prevent close itself when hover over', async () => {
      vi.useFakeTimers()
      const wrapper = __mount({ duration: 100 })
      vi.advanceTimersByTime(50)
      await findNotification(wrapper).trigger('mouseenter')
      vi.advanceTimersByTime(5000)
      expect(wrapper).toSatisfy(isOpen)
      await findNotification(wrapper).trigger('mouseleave')
      expect(wrapper).toSatisfy(isOpen)
      vi.runAllTimers()
      await vi.waitFor(() => {
        expect(wrapper).toSatisfy(isClosed)
      })
      vi.useRealTimers()
    })

    test('should not be able to close when duration is set to 0', async () => {
      vi.useFakeTimers()
      const wrapper = __mount({ duration: 0 })
      vi.runAllTimers()
      expect(wrapper).toSatisfy(isOpen)
      vi.useRealTimers()
    })

    test('should be able to handle click event', async () => {
      const onClick = vi.fn()
      const wrapper = __mount({ duration: 0, onClick })
      await wrapper.trigger('click')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    const keydown = (options: KeyboardEventInit) =>
      new KeyboardEvent('keydown', { ...options })

    test.for([EVENT_CODE.backspace, EVENT_CODE.delete])(
      'should be able to delete timer when press %s',
      async (code) => {
        vi.useFakeTimers()
        const wrapper = _mount({
          slots: {
            default: () => AXIOM,
          },
        })
        document.dispatchEvent(keydown({ code, bubbles: true }))
        vi.runAllTimers()
        expect(wrapper).toSatisfy(isOpen)
        vi.useRealTimers()
      }
    )

    test('should be able to close the notification immediately when press esc', async () => {
      vi.useFakeTimers()
      const wrapper = _mount({
        props: {
          duration: 0,
        },
        slots: {
          default: () => AXIOM,
        },
      })
      document.dispatchEvent(keydown({ code: EVENT_CODE.esc }))
      vi.runAllTimers()
      expect(wrapper).toSatisfy(isClosed)
      vi.useRealTimers()
    })

    test.for<{
      timerControls: NotificationTimerControls
      isVisibleAfterRepeatedHover: boolean
      name: string
    }>([
      {
        timerControls: 'pause-resume',
        isVisibleAfterRepeatedHover: false,
        name: 'will be closed after multiple hovers when timerControls is pause-resume',
      },
      {
        timerControls: 'reset-restart',
        isVisibleAfterRepeatedHover: true,
        name: 'will be open after multiple hovers when timerControls is reset-restart',
      },
    ])('$name', async ({ timerControls, isVisibleAfterRepeatedHover }) => {
      vi.useFakeTimers()
      const wrapper = __mount({ duration: 100, timerControls })
      vi.advanceTimersByTime(50)
      await findNotification(wrapper).trigger('mouseenter')
      await findNotification(wrapper).trigger('mouseleave')
      vi.advanceTimersByTime(50)
      await vi.waitFor(() => {
        expect(wrapper).toSatisfy(hasVisibility(isVisibleAfterRepeatedHover))
      })
      vi.runAllTimers()
      await vi.waitFor(() => {
        expect(wrapper).toSatisfy(isClosed)
      })
      vi.useRealTimers()
    })
  })
})

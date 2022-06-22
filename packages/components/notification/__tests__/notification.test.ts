// @ts-nocheck
import { h, nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import makeMount from '@element-plus/test-utils/make-mount'
import { TypeComponentsMap } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import { useZIndex } from '@element-plus/hooks'
import Notification from '../src/notification.vue'

import type { Component, ComponentPublicInstance } from 'vue'
import type { VueWrapper } from '@vue/test-utils'
import type { SpyInstance } from 'vitest'

const AXIOM = 'Rem is the best girl'

const onClose = vi.fn()

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
        iconComponent: Component
        horizontalClass: string
        positionStyle: Record<string, string>
      }>

      expect(wrapper.text()).toEqual(AXIOM)
      expect(vm.visible).toBe(true)
      expect(vm.iconComponent).toBe('')
      expect(vm.horizontalClass).toBe('right')
      expect(vm.positionStyle).toEqual({
        top: '0px',
        zIndex: 0,
      } as CSSProperties)
    })

    test('should be able to render VNode', () => {
      const wrapper = _mount({
        slots: {
          default: h(
            'span',
            {
              class: 'text-node',
            },
            AXIOM
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
      const { nextZIndex } = useZIndex()
      const zIndex = nextZIndex()
      const wrapper = _mount({
        props: {
          zIndex,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{
        positionStyle: Record<string, string>
      }>

      expect(vm.positionStyle).toEqual({
        top: '0px',
        zIndex,
      } as CSSProperties)
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
        expect(wrapper.findComponent(TypeComponentsMap[type]).exists()).toBe(
          true
        )
      }
    })

    test('should not be able to render invalid type icon', () => {
      vi.spyOn(console, 'warn').mockImplementation(() => vi.fn)

      const type = 'some-type'
      const wrapper = _mount({
        props: {
          type,
        },
      })

      expect(wrapper.find('.el-notification__icon').exists()).toBe(false)
      expect(console.warn).toHaveBeenCalled()
      ;(console.warn as any as SpyInstance).mockRestore()
    })
  })

  describe('event handlers', () => {
    test('it should be able to close the notification by clicking close button', async () => {
      const onClose = vi.fn()
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
        props: { onClose },
      })
      await nextTick()

      const closeBtn = wrapper.find('.el-notification__closeBtn')
      expect(closeBtn.exists()).toBe(true)
      await closeBtn.trigger('click')
      expect(onClose).toHaveBeenCalled()
    })

    test('should be able to close after duration', async () => {
      vi.useFakeTimers()
      const duration = 100
      const wrapper = _mount({
        props: {
          duration,
        },
      })
      vi.runAllTimers()
      vi.useRealTimers()

      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean }>

      expect(vm.visible).toBe(false)
    })

    test('should be able to prevent close itself when hover over', async () => {
      vi.useFakeTimers()
      const duration = 100
      const wrapper = _mount({
        props: {
          duration,
        },
      })
      vi.advanceTimersByTime(50)

      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean }>

      await wrapper.find('[role=alert]').trigger('mouseenter')
      vi.advanceTimersByTime(5000)
      expect(vm.visible).toBe(true)

      await wrapper.find('[role=alert]').trigger('mouseleave')
      // expect(wrapper.vm.timer).not.toBe(null)
      expect(vm.visible).toBe(true)
      // expect(wrapper.vm.closed).toBe(false)
      vi.runAllTimers()
      expect(vm.visible).toBe(false)
      // expect(wrapper.vm.timer).toBe(null)
      // expect(wrapper.vm.closed).toBe(true)
      vi.useRealTimers()
    })

    test('should not be able to close when duration is set to 0', async () => {
      vi.useFakeTimers()
      const duration = 0
      const wrapper = _mount({
        props: {
          duration,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean }>

      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      vi.useRealTimers()
    })

    test('should be able to handle click event', async () => {
      const onClick = vi.fn()
      const wrapper = _mount({
        props: {
          duration: 0,
          onClick,
        },
      })

      await wrapper.trigger('click')
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    test('should be able to delete timer when press delete', async () => {
      vi.useFakeTimers()
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean }>

      const event = new KeyboardEvent('keydown', {
        code: EVENT_CODE.backspace,
        babels: true,
      } as any)
      document.dispatchEvent(event)

      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      vi.useRealTimers()
    })

    test('should be able to close the notification immediately when press esc', async () => {
      vi.useFakeTimers()
      const wrapper = _mount({
        props: {
          duration: 0,
        },
        slots: {
          default: AXIOM,
        },
      })
      const vm = wrapper.vm as ComponentPublicInstance<{ visible: boolean }>
      // Same as above
      const event = new KeyboardEvent('keydown', {
        code: EVENT_CODE.esc,
      } as any)

      document.dispatchEvent(event)
      vi.runAllTimers()
      expect(vm.visible).toBe(false)
      vi.useRealTimers()
    })
  })
})

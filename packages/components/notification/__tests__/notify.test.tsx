import { createApp, nextTick } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import Notification, { closeAll, updateOffsets } from '../src/notify'
import defineGetter from '@element-plus/test-utils/define-getter'

import type { NotificationHandle } from '../src/notification'
import type { VNode } from 'vue'

const selector = '.el-notification'

describe('Notification on command', () => {
  afterEach(() => {
    closeAll()
    Notification._context = null
  })

  it('it should get component handle', async () => {
    const handle = Notification()
    await rAF()
    expect(document.querySelector(selector)).toBeDefined()

    handle.close()
    await rAF()
    await nextTick()
    expect(document.querySelector(selector)).toBeNull()
    expect(
      document.querySelector('[class^="container_notification"]')
    ).toBeNull()
  })

  it('it should be able to render vnode', async () => {
    const testClassName = 'test-classname'
    const { close } = Notification({
      duration: 0,
      message: <div class={testClassName}>test-content</div>,
    })

    await rAF()
    expect(document.querySelector(`.${testClassName}`)).toBeDefined()
    close()
  })

  it('it should be able to render function that return vnode', async () => {
    const testClassName = 'test-classname'
    const { close } = Notification({
      duration: 0,
      message: () => <div class={testClassName}>test-content</div>,
    })

    await rAF()
    expect(document.querySelector(`.${testClassName}`)).toBeTruthy()
    close()
  })

  it('it should be able to close notification by manually close', async () => {
    const { close } = Notification({
      duration: 0,
    })
    await rAF()

    const element = document.querySelector(selector)
    expect(element).toBeDefined()
    close()
    await rAF()
    await nextTick()

    expect(document.querySelector(selector)).toBeNull()
  })

  it('it should close all notifications', async () => {
    const notifications: NotificationHandle[] = []
    const onClose = vi.fn()
    for (let i = 0; i < 4; i++) {
      notifications.push(
        Notification({
          onClose,
          duration: 0,
        })
      )
    }
    // vi.runAllTicks()
    await rAF()

    expect(document.querySelectorAll(selector).length).toBe(4)
    closeAll()
    // vi.runAllTicks()
    await rAF()
    expect(onClose).toHaveBeenCalledTimes(notifications.length)
    expect(document.querySelectorAll(selector).length).toBe(0)
  })

  it('it should update offsets notifications', async () => {
    // the gap size between each notification
    const GAP_SIZE = 16
    const height = 100
    const notifications: NotificationHandle[] = []
    const cleanups: (() => void)[] = []

    for (let i = 0; i < 4; i++) {
      notifications.push(Notification({ duration: 0 }))

      await nextTick()

      const el = document.querySelector(`${selector}:nth-child(${i + 1})`)!

      // mocking offsetHeight
      cleanups.push(
        defineGetter(el, 'offsetHeight', function (this: HTMLElement) {
          return Number.parseFloat(this.style.height) || height
        })
      )
    }

    await rAF()

    const notificationEls = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    )

    expect(notificationEls.length).toBe(4)

    const getOffsets = () => notificationEls.map((el) => el?.style.top || '0')

    expect(getOffsets()).toEqual(
      Array.from({ length: 4 }).map(
        (_, i) => `${(i + 1) * GAP_SIZE + i * height}px`
      )
    )

    notificationEls[0]?.style.setProperty('height', '150px')

    updateOffsets('top-right')

    await rAF()

    expect(getOffsets()).toEqual(
      Array.from({ length: 4 }).map(
        (_, i) => `${(i + 1) * GAP_SIZE + i * height + (i > 0 ? 50 : 0)}px`
      )
    )

    cleanups.forEach((fn) => fn())
  })

  it('it should be able to render all types notification', () => {
    for (const type of ['success', 'warning', 'error', 'info'] as const) {
      Notification[type]({})
      expect(document.querySelector(`.el-icon-${type}`)).toBeDefined()
    }
  })

  it('it should appendTo specified HTMLElement', async () => {
    const htmlElement = document.createElement('div')
    const handle = Notification({
      appendTo: htmlElement,
    })
    await rAF()
    expect(htmlElement.querySelector(selector)).toBeDefined()

    handle.close()
    await rAF()
    await nextTick()
    expect(htmlElement.querySelector(selector)).toBeNull()
  })

  it('it should appendTo specified selector', async () => {
    const htmlElement = document.createElement('div')
    htmlElement.classList.add('notification-manager')
    document.body.appendChild(htmlElement)
    const handle = Notification({
      appendTo: '.notification-manager',
    })
    await rAF()
    expect(htmlElement.querySelector(selector)).toBeDefined()
    handle.close()
    await rAF()
    await nextTick()
    expect(htmlElement.querySelector(selector)).toBeNull()
  })

  it('should globally inherit context correctly', async () => {
    const globalContext = createApp({})._context
    Notification._context = globalContext
    const onClose = vi.fn((vm: VNode) => vm.appContext)
    const handle = Notification({ duration: 0, onClose })
    await nextTick()
    handle.close()
    await nextTick()
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveLastReturnedWith(globalContext)
  })

  it('should be possible to set the context individually', async () => {
    const globalContext = createApp({})._context
    Notification._context = globalContext
    const localContext = createApp({})._context
    const onClose = vi.fn((vm: VNode) => vm.appContext)
    const handle = Notification({ duration: 0, onClose }, localContext)
    await nextTick()
    handle.close()
    await nextTick()
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onClose).toHaveLastReturnedWith(localContext)
  })

  it('set dangerouslyUseHTMLString should render html string', async () => {
    const htmlString = '<div class="test-html-string">test-html-string</div>'
    const { close } = Notification({
      duration: 0,
      message: htmlString,
      dangerouslyUseHTMLString: true,
    })

    await rAF()
    expect(document.querySelector('.test-html-string')).toBeDefined()
    close()
  })

  it('not set dangerouslyUseHTMLString should render text', async () => {
    const text = '<div class="test-html-string">test-html-string</div>'
    const { close } = Notification({
      duration: 0,
      message: text,
    })

    await rAF()
    expect(
      document.querySelector('.el-notification__content')!.textContent
    ).toBe(text)
    close()
  })
})

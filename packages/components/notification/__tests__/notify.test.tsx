import { nextTick } from 'vue'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import Notification, { closeAll } from '../src/notify'
import { ElNotification, notificationTypes } from '..'
import { mockAnimationsApi } from './mock-animations-api'
import type { NotificationHandle } from '../src/notification'

const selector = '.el-notification'

describe('Notification on command', () => {
  mockAnimationsApi()

  afterEach(() => {
    closeAll()
  })

  test('should get component handle', async () => {
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

  test('should be able to render vnode', async () => {
    const testClassName = 'test-classname'
    const { close } = Notification({
      duration: 0,
      message: <div class={testClassName}>test-content</div>,
    })
    await rAF()
    expect(document.querySelector(`.${testClassName}`)).toBeDefined()
    close()
  })

  test('should be able to close notification by manually close', async () => {
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

  test('should close all notifications', async () => {
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
    await rAF()
    expect(document.querySelectorAll(selector)).toHaveLength(4)
    closeAll()
    await rAF()
    expect(onClose).toHaveBeenCalledTimes(notifications.length)
    expect(document.querySelectorAll(selector)).toHaveLength(0)
  })

  test('should be able to render all types notification', () => {
    for (const type of notificationTypes) {
      Notification[type]({})
      expect(document.querySelector(`.el-icon-${type}`)).toBeDefined()
    }
  })

  test('should appendTo specified HTMLElement', async () => {
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

  test('should appendTo specified selector', async () => {
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

  describe('context inheritance', () => {
    test('should globally inherit context correctly', () => {
      expect(ElNotification._context).toBe(null)
      const testContext = {
        config: {
          globalProperties: {},
        },
        _context: {},
      }
      ElNotification.install?.(testContext as any)
      expect(ElNotification._context).not.toBe(null)
      expect(ElNotification._context).toBe(testContext._context)
      // clean up
      ElNotification._context = null
    })
  })
})

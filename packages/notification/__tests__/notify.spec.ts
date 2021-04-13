import { nextTick, h } from 'vue'
import Notification, { closeAll } from '../src/notify'
import { rAF } from '@element-plus/test-utils/tick'
import type { INotificationHandle } from '../src/notification.type'

const selector = '.el-notification'

describe('Notification on command', () => {

  afterEach(() => {
    closeAll()
  })

  test('it should get component handle', async () => {
    const handle = Notification()
    await rAF()
    expect(document.querySelector(selector)).toBeDefined()

    handle.close()
    await rAF()
    await nextTick()
    expect(document.querySelector(selector)).toBeNull()
    expect(document.querySelector('[class^="container_notification"]')).toBeNull()
  })

  test('it should be able to render vnode', async () => {
    const testClassName = 'test-classname'
    const { close } = Notification({
      duration: 0,
      message: h('div', { class: testClassName }, 'test-content'),
    })

    await rAF()
    expect(document.querySelector(`.${testClassName}`)).toBeDefined()
    close()
  })


  test('it should be able to close notification by manually close', async () => {
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

  test('it should close all notifications', async () => {
    const notifications: INotificationHandle[] = []
    const onClose = jest.fn()
    for (let i = 0; i < 4; i++) {
      notifications.push(Notification({
        onClose,
        duration: 0,
      }))
    }
    // jest.runAllTicks()
    await rAF()

    expect(document.querySelectorAll(selector).length).toBe(4)
    closeAll()
    // jest.runAllTicks()
    await rAF()
    expect(onClose).toHaveBeenCalledTimes(notifications.length)
    expect(document.querySelectorAll(selector).length).toBe(0)
  })

  test('it should be able to render all types notification', () => {
    for (const type of ['success', 'warning', 'error', 'info'] as const) {
      Notification[type]()
      expect(document.querySelector(`.el-icon-${type}`)).toBeDefined()
    }
  })
})

import Notification, { close, closeAll } from '../src/notify'
import type { INotificationHandle } from '../src/notification'

jest.useFakeTimers()

const selector = '.el-notification'

describe('Notification on command', () => {
  afterEach(() => {
    closeAll()
  })

  test('it should get component handle', async () => {
    const handle = Notification()
    expect(document.querySelector(selector)).toBeDefined()
    jest.runAllTicks()
    handle.close()
    expect(document.querySelector(selector)).toBeNull()
  })


  test('it should be able to close notification by manually close', () => {
    Notification()
    const element = document.querySelector(selector)
    expect(element).toBeDefined()
    close(element.id)
    expect(document.querySelector(selector)).toBeNull()
  })

  test('it should close all notifications', () => {
    const notifications: INotificationHandle[] = []
    const onClose = jest.fn()
    for (let i = 0; i < 4; i++) {
      notifications.push(Notification({
        onClose,
      }))
    }
    expect(document.querySelectorAll(selector).length).toBe(4)
    closeAll()
    for (let i = 0; i < notifications.length; i++) {
      expect(onClose).toHaveBeenCalledTimes(4)
    }
    expect(document.querySelectorAll(selector).length).toBe(0)
  })

  test('it should be able to render all types notification', () => {
    for (const type of ['success', 'warning', 'error', 'info'] as const) {
      Notification[type]()
      expect(document.querySelector(`.el-icon-${type}`)).toBeDefined()
    }
  })
})

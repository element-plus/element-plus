import { isVNode } from 'vue'
import Notification, { close, closeAll } from '../src/notify'
import type { NotificationVM } from '../src/notification.constants'

jest.useFakeTimers()

const selector = '.el-notification'

describe('Notification on command', () => {
  afterEach(() => {
    closeAll()
  })

  test('it should get component instance when calling notification constructor', async () => {
    const vm = Notification()
    expect(isVNode(vm)).toBe(true)
    expect(document.querySelector(selector)).toBeDefined()
    jest.runAllTicks()
  })


  test('it should be able to close notification by manually close', () => {
    Notification()
    const element = document.querySelector(selector)
    expect(element).toBeDefined()
    close(element.id)
    expect(document.querySelector(selector)).toBeNull()
  })

  test('it should close all notifications', () => {
    const notifications: NotificationVM[] = []
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

})

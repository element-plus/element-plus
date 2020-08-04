import Notification, { close, closeAll } from '../src/notify'

jest.useFakeTimers()

const selector = '.el-notification'

describe('Notification on command', () => {
  afterEach(() => {
    closeAll()
  })

  test('it should get component instance when calling notification constructor', async () => {
    const vm = Notification({})
    expect(vm).toBeNull()
    expect(document.querySelector(selector)).toBeDefined()
    jest.runAllTicks()
  })


  test('it should be able to close notification by manually close', () => {
    Notification({})
    const element = document.querySelector(selector)
    expect(element).toBeDefined()
    close(element.id)
    expect(document.querySelector(selector)).toBeNull()
  })

  test('it should close all notifications', () => {
    for (let i = 0; i < 4; i++) {
      Notification({})
    }
    expect(document.querySelectorAll(selector).length).toBe(4)
    closeAll()
    expect(document.querySelectorAll(selector).length).toBe(0)
  })

})

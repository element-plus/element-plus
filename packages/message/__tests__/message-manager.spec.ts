import { nextTick } from 'vue'
import { getStyle } from '@element-plus/utils/dom'
import { rAF } from '@element-plus/test-utils/tick'
import Message from '../src/message'

jest.useFakeTimers()
const selector = '.el-message'
// TODO: testing the original transition with `nextTick`'

describe('Message on command', () => {
  // const oldTransition = Vue.Transition
  beforeAll(() => {
    // eslint-disable-next-line
    // ;(Vue as any).Transition = Transition
  })

  afterAll(() => {
    // eslint-disable-next-line
    // ;(Vue as any).Transition = oldTransition
  })

  test('it should get component handle', async () => {
    const handle = Message()
    await rAF()
    expect(document.querySelector(selector)).toBeTruthy()
    handle.close()
    await rAF()
    await nextTick()
    expect(document.querySelector(selector)).toBeFalsy()
  })

  test('it should be able to manually close a message', async () => {
    const { close } = Message()
    await rAF()
    const element = document.querySelector(selector)
    expect(element).toBeTruthy()
    close()
    await rAF()
    await nextTick()
    expect(document.querySelector(selector)).toBeNull()
  })

  test('it should close all messages', async () => {
    const onClose = jest.fn()
    const instances = []
    for (let i = 0; i < 4; i++) {
      const instance = Message({
        duration: 0,
        onClose,
      })
      instances.push(instance)
    }

    await rAF()
    const elements = document.querySelectorAll(selector)
    expect(elements.length).toBe(4)
    Message.closeAll()
    await rAF()
    expect(onClose).toHaveBeenCalledTimes(4)
    expect(document.querySelectorAll(selector).length).toBe(0)
  })

  test('it should stack messages', async () => {
    const messages = [Message(), Message(), Message()]
    await rAF()
    const elements = document.querySelectorAll(selector)
    expect(elements.length).toBe(3)

    const getTopValue = (elm: Element): number =>
      parseInt(getStyle(elm as HTMLElement, 'top'), 10)

    const topValues = []
    elements.forEach(e => {
      topValues.push(getTopValue(e))
    })

    for (let i = 1; i < topValues.length; i++) {
      expect(topValues[i - 1]).toBeLessThan(topValues[i])
    }

    messages.forEach(m => m.close())
  })

  test('it should have 4 other types of message', () => {
    expect(Message.success).toBeInstanceOf(Function)
    expect(Message.warning).toBeInstanceOf(Function)
    expect(Message.info).toBeInstanceOf(Function)
    expect(Message.error).toBeInstanceOf(Function)
  })
})

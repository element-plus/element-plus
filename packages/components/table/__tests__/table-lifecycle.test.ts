import { nextTick } from 'vue'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import ElTableColumn from '../src/table-column'
import ElTable from '../src/table.vue'
import { doubleWait, mount } from './table-test-common'

describe('Table.vue lifecycle', () => {
  let wrapper: ReturnType<typeof mount> | undefined

  afterEach(() => {
    wrapper?.unmount()
    wrapper = undefined
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  function createTable() {
    wrapper = mount({
      components: {
        ElTable,
        ElTableColumn,
      },
      template: `
        <el-table :data="[]" :fit="false">
          <el-table-column prop="name" />
        </el-table>
      `,
    })
    return wrapper
  }

  it('removes the window resize listener on unmount when fit is false', async () => {
    const addListener = vi.spyOn(window, 'addEventListener')
    const removeListener = vi.spyOn(window, 'removeEventListener')

    createTable()
    await doubleWait()
    await rAF()

    const resizeAdd = addListener.mock.calls.find(([type]) => type === 'resize')
    expect(resizeAdd).toBeDefined()
    const resizeHandler = resizeAdd![1]

    expect(
      removeListener.mock.calls.some(
        ([type, handler]) => type === 'resize' && handler === resizeHandler
      )
    ).toBe(false)

    wrapper!.unmount()
    wrapper = undefined
    await nextTick()

    expect(
      removeListener.mock.calls.some(
        ([type, handler]) => type === 'resize' && handler === resizeHandler
      )
    ).toBe(true)
  })

  it('releases scroll listeners and resize observers on unmount', async () => {
    const observers: Array<{ disconnect: () => void }> = []
    class ResizeObserverStub {
      disconnect = vi.fn()
      observe = vi.fn()
      unobserve = vi.fn()

      constructor() {
        observers.push(this)
      }
    }
    vi.stubGlobal('ResizeObserver', ResizeObserverStub)

    const addListener = vi.spyOn(Element.prototype, 'addEventListener')
    const removeListener = vi.spyOn(Element.prototype, 'removeEventListener')

    createTable()
    await doubleWait()
    await rAF()

    const scrollHandlers = new Set(
      addListener.mock.calls
        .filter(
          ([type, , options]) =>
            type === 'scroll' &&
            (options as AddEventListenerOptions | undefined)?.passive === true
        )
        .map(([, handler]) => handler)
    )
    expect(scrollHandlers.size).toBeGreaterThan(0)
    expect(observers.length).toBeGreaterThan(0)

    wrapper!.unmount()
    wrapper = undefined
    await nextTick()

    const removedHandlers = new Set(
      removeListener.mock.calls
        .filter(
          ([type, , options]) =>
            type === 'scroll' &&
            (options as AddEventListenerOptions | undefined)?.passive === true
        )
        .map(([, handler]) => handler)
    )
    expect(
      [...scrollHandlers].filter((handler) => !removedHandlers.has(handler))
    ).toEqual([])
    observers.forEach((observer) => {
      expect(observer.disconnect).toHaveBeenCalled()
    })
  })
})

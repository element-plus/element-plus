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
})

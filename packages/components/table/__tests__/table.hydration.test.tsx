import { createSSRApp, defineComponent, h, nextTick } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it } from 'vitest'
import { ID_INJECTION_KEY } from '@element-plus/hooks'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column'
import { rAF } from '@element-plus/test-utils/tick.js'

const TableApp = defineComponent({
  setup() {
    const data = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]

    return () =>
      h(ElTable, { data }, () => [
        h(ElTableColumn, { prop: 'date', label: 'Date', width: 180 }),
        h(ElTableColumn, { prop: 'name', label: 'Name', width: 180 }),
        h(ElTableColumn, { prop: 'address', label: 'Address' }),
      ])
  },
})

const createTableApp = (rootComponent = TableApp) => {
  const app = createSSRApp(rootComponent)
  app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
  return app
}

describe('table hydration', () => {
  it('keeps server-rendered cells during hydration', async () => {
    const container = document.createElement('div')
    container.innerHTML = await renderToString(createTableApp())

    expect(
      container.querySelectorAll('.el-table__header colgroup col')
    ).toHaveLength(3)
    expect(
      container.querySelectorAll('.el-table__body colgroup col')
    ).toHaveLength(3)
    const app = createTableApp()

    app.mount(container)
    await nextTick()
    await rAF()
    await rAF()

    expect(
      container.querySelectorAll('.el-table__header colgroup col')
    ).toHaveLength(3)
    expect(
      container.querySelectorAll('.el-table__body colgroup col')
    ).toHaveLength(3)
    expect(container.querySelectorAll('.el-table__header .cell')).toHaveLength(
      3
    )
    expect(container.querySelectorAll('.el-table__body td')).toHaveLength(3)

    app.unmount()
  })
})

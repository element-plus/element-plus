import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it } from 'vitest'
import { ID_INJECTION_KEY } from '@element-plus/hooks'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column'

const TableApp = defineComponent({
  setup() {
    const data = [
      {
        date: '2016-05-03',
        name: 'Tom',
      },
    ]

    return () =>
      h(ElTable, { data }, () => [
        h(ElTableColumn, { prop: 'date', label: 'Date' }),
        h(ElTableColumn, { prop: 'name', label: 'Name' }),
      ])
  },
})

const createTableApp = () => {
  const app = createSSRApp(TableApp)
  app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
  return app
}

describe('table hydration', () => {
  it('keeps server-rendered cells during hydration', async () => {
    const container = document.createElement('div')
    container.innerHTML = await renderToString(createTableApp())

    expect(
      container.querySelectorAll('.el-table__header colgroup col')
    ).toHaveLength(2)
    expect(
      container.querySelectorAll('.el-table__body colgroup col')
    ).toHaveLength(2)

    const app = createTableApp()

    app.mount(container)

    expect(
      container.querySelectorAll('.el-table__header colgroup col')
    ).toHaveLength(2)
    expect(
      container.querySelectorAll('.el-table__body colgroup col')
    ).toHaveLength(2)
    expect(container.querySelectorAll('.el-table__header .cell')).toHaveLength(
      2
    )
    expect(container.querySelectorAll('.el-table__body td')).toHaveLength(2)

    app.unmount()
  })
})

/**
 * @vitest-environment node
 */

import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it } from 'vitest'
import { ID_INJECTION_KEY } from '@element-plus/hooks'
import ElTable from '../src/table.vue'
import ElTableColumn from '../src/table-column'

describe('table SSR', () => {
  it('renders columns and data on the server', async () => {
    const data = [
      {
        date: '2016-05-03',
        name: 'Tom',
      },
    ]
    const app = createSSRApp({
      render: () =>
        h(ElTable, { data }, () => [
          h(ElTableColumn, { prop: 'date', label: 'Date' }),
          h(ElTableColumn, { prop: 'name', label: 'Name' }),
        ]),
    })
    app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })

    const html = await renderToString(app)

    expect(html).toContain('Date')
    expect(html).toContain('Name')
    expect(html).toContain('2016-05-03')
    expect(html).toContain('Tom')
  })

  it('renders grouped columns on the server', async () => {
    const app = createSSRApp({
      render: () =>
        h(ElTable, { data: [{ name: 'Tom', release: '2026-08-15' }] }, () => [
          h(ElTableColumn, { prop: 'name', label: 'Name' }),
          h(ElTableColumn, { label: 'Group' }, () => [
            h(ElTableColumn, { prop: 'release', label: 'Release' }),
          ]),
        ]),
    })
    app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })

    const html = await renderToString(app)

    expect(html).toContain('Group')
    expect(html).toContain('Release')
    expect(html).toContain('2026-08-15')
  })
})
